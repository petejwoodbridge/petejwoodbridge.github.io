// Teaching roles. Shared by the Teaching page (its timeline and structured data) and llms.txt,
// so search engines, AI assistants and visitors all read the same list.

export const academicRoles = [
  { when: "2018 – 2020", what: "Programme Leader, MA Immersive Arts, and Director of the Experimental Technologies Lab", where: "Liverpool John Moores University", url: "https://www.ljmu.ac.uk/study/courses/postgraduates/immersive-media" },
  { when: "2015 – 2019", what: "Senior Lecturer, and curriculum development lead for the £35m School of Digital Arts", where: "Manchester School of Art, Manchester Metropolitan University", url: "https://www.schoolofdigitalarts.mmu.ac.uk/" },
  { when: "2010 – 2015", what: "Digital Media and Culture MA, Media Production BA, and a pioneering BA in Digital Media", where: "Coventry School of Art and Design", url: "https://www.coventry.ac.uk/study-at-coventry/faculties-and-schools/arts-and-humanities/art-and-design/" },
];

// Visiting lectureships and advisory work. No dates, so the left column says what kind of role it was.
// `org` is the organisation's plain name for structured data; leave url off where there is no page worth linking to.
export const visitingRoles: { kind: string; what: string; where: string; org: string; university?: boolean; url?: string }[] = [
  { kind: "Mentor", what: "Tutor and mentor on the postgraduate degree in film", where: "Raindance, London", org: "Raindance", url: "https://www.raindance.org/postgraduate/" },
  { kind: "Mentor", what: "Mentor on the Creative Solutions residency programme", where: "Ithra, Saudi Arabia", org: "Ithra (King Abdulaziz Center for World Culture)", url: "https://www.ithra.com/en/special-programs/The-Creative-Solutions-Residency-Program/cycle-3" },
  { kind: "Curriculum", what: "Curriculum design for industry bootcamps", where: "In4 Group", org: "In4 Group" },
  { kind: "Curriculum", what: "Curriculum advisor, industry bootcamps in games technology", where: "HOST, Salford", org: "HOST Salford", url: "https://www.hostsalford.com/services/gametech/" },
  { kind: "Curriculum", what: "Consultant on new creative technology degrees", where: "Nottingham Trent University", org: "Nottingham Trent University", university: true, url: "https://www.ntu.ac.uk/" },
  { kind: "Visiting", what: "Visiting lecturer", where: "University of Manchester", org: "University of Manchester", university: true, url: "https://www.manchester.ac.uk/" },
  { kind: "Visiting", what: "Visiting lecturer", where: "Zhejiang University of Media and Communications, China", org: "Zhejiang University of Media and Communications", university: true },
  { kind: "Visiting", what: "Visiting lecturer", where: "Stellenbosch University, South Africa", org: "Stellenbosch University", university: true, url: "https://www.sun.ac.za/" },
  { kind: "Visiting", what: "Visiting lecturer", where: "University of Warwick", org: "University of Warwick", university: true, url: "https://warwick.ac.uk/" },
  { kind: "Visiting", what: "Visiting lecturer", where: "University of Ibadan, Nigeria", org: "University of Ibadan", university: true, url: "https://www.ui.edu.ng/" },
];

export const credentials = ["Fellow of the Higher Education Academy (FHEA)", "Fellow of the Royal Society of Arts (FRSA)"];
