# Ticker logos

`public/img/logos/*.png` are generated, not hand-made. Do not edit them by hand.

Source marks go in `logos-raw/` (SVG or PNG, in whatever colours the brand
publishes), then `node whiten.js` produces the white-on-transparent 2x PNGs and
`sizes.json`, which feeds `src/data/logos.ts`.

Two rules do the real work:

- **Ink is distance from white, not darkness.** A saturated cyan or amber is ink
  even though it is bright; only all-channels-near-white counts as paper. Keying
  on luminance instead turned ITV into a grey smudge.
- **An asset that is already a white mark** (Sport England ships one) would
  vanish under that rule, so if almost nothing survives, its own alpha channel is
  used as the mask instead.

Marks are then trimmed to an exact alpha bounding box — `sharp.trim()` ate 17% of
BBC, whose boxes run flush to the edge — and scaled to constant *ink area* rather
than constant height, so a wide wordmark and a compact glyph carry the same
optical weight in the row.

Knockout logos (BBC, NHS, UKRI, Warner) come out correctly as white shapes with
the letterforms punched out, because the transform drops their white parts.

Requires `sharp`. Check the result before shipping: render a contact sheet and
look at it. Deps are not in package.json; this runs by hand, rarely.
