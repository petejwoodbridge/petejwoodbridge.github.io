const fs=require('fs'),path=require('path'),sharp=require('sharp');
const IN='logos-raw', OUT='logos-png'; fs.mkdirSync(OUT,{recursive:true});
const SKIP=new Set(['monster']);            // simple-icons "monster" is Monster.com, wrong brand
const TARGET_INK=3400;                      // target ink area in px^2 at 1x -> even optical weight
const MAX_H=44, MAX_W=190, SS=4;            // render supersampled, then downscale

async function toWhite(file){
  const raw=fs.readFileSync(file);
  // 1. render the ORIGINAL, in colour, big, on transparent
  const img=sharp(raw,{density:600}).resize({width:MAX_W*SS,height:MAX_H*SS,fit:'inside',
            background:{r:0,g:0,b:0,alpha:0}});
  const {data,info}=await img.ensureAlpha().raw().toBuffer({resolveWithObject:true});
  const {width:w,height:h}=info;
  // 2. ink -> white, white/background -> transparent
  const out=Buffer.alloc(w*h*4);
  const alpha=new Float32Array(w*h);
  let peak=0, opaque=0, inked=0;
  for(let i=0;i<w*h;i++){
    const r=data[i*4],g=data[i*4+1],b=data[i*4+2],a=data[i*4+3];
    // distance from white, not luminance: a saturated cyan or amber is ink,
    // even though it is bright. only all-channels-near-white counts as paper.
    const minc=Math.min(r,g,b)/255;
    let al=a/255*(1-minc);
    if(al<0.04) al=0;
    alpha[i]=al; if(al>peak) peak=al;
    if(a>40) opaque++;
    if(al>0.25) inked++;
  }
  // an asset that is ALREADY a white mark on transparent (Sport England) would
  // vanish under distance-from-white. fall back to its own alpha channel.
  if(inked < opaque*0.2){
    peak=0;
    for(let i=0;i<w*h;i++){ const al=data[i*4+3]/255; alpha[i]=al; if(al>peak) peak=al; }
  }
  // a mark drawn in mid-grey must still read as solid white: stretch to full strength
  const gain=peak>0.02?1/peak:1;
  let ink=0;
  for(let i=0;i<w*h;i++){
    const al=Math.min(1,alpha[i]*gain);
    out[i*4]=255; out[i*4+1]=255; out[i*4+2]=255; out[i*4+3]=Math.round(al*255);
    ink+=al;
  }
  // exact alpha bounding box; sharp's trim() was eating edge-flush marks (BBC)
  let x0=w,y0=h,x1=-1,y1=-1;
  for(let y=0;y<h;y++) for(let x=0;x<w;x++){
    if(out[(y*w+x)*4+3]>2){ if(x<x0)x0=x; if(x>x1)x1=x; if(y<y0)y0=y; if(y>y1)y1=y; }
  }
  if(x1<0) throw new Error('empty after whitening');
  const bw=x1-x0+1, bh=y1-y0+1;
  const trimmed=await sharp(out,{raw:{width:w,height:h,channels:4}})
    .extract({left:x0,top:y0,width:bw,height:bh}).png().toBuffer();
  const m={width:bw,height:bh};
  // 3. optical scale: constant ink area, clamped by max height / width
  const inkAt1x=ink/(SS*SS);
  let scale=Math.sqrt(TARGET_INK/Math.max(inkAt1x,1));
  let tw=Math.round(m.width/SS*scale), th=Math.round(m.height/SS*scale);
  if(th>MAX_H){ const k=MAX_H/th; tw=Math.round(tw*k); th=MAX_H; }
  if(tw>MAX_W){ const k=MAX_W/tw; th=Math.round(th*k); tw=MAX_W; }
  return {buf:await sharp(trimmed).resize({width:tw*2,height:th*2,fit:'fill'}).png({compressionLevel:9}).toBuffer(),tw,th};
}
(async()=>{
  const rows=[];
  for(const f of fs.readdirSync(IN).filter(f=>/\.(svg|png)$/i.test(f))){
    const name=f.replace(/\.(svg|png)$/i,'');
    if(SKIP.has(name)){ console.log('skip  '+name+'  (wrong brand)'); continue; }
    try{
      const {buf,tw,th}=await toWhite(path.join(IN,f));
      fs.writeFileSync(path.join(OUT,name+'.png'),buf);
      rows.push({name,tw,th}); console.log(`ok    ${name.padEnd(16)} ${tw}x${th}`);
    }catch(e){ console.log('FAIL  '+name+'  '+e.message.slice(0,70)); }
  }
  fs.writeFileSync('sizes.json',JSON.stringify(rows,null,1));
})();
