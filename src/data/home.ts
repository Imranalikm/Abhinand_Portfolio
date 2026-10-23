/**
 * Homepage copy for the stacked (<1280px) layout in `components/mobile/MobileHome.tsx`.
 *
 * The >=1280px layout is the Figma-exported fixed canvas in `components/sections/*`, which hand-places each
 * string with pixel offsets, so it carries its own copy of this text. When editing copy here, update the
 * matching section component too (and vice versa).
 */

export const HERO = {
  headline: ["An Experienced", "UI UX Designer", "— Based in", "India"],
  blurb: "Abhinandh kottappurath is a designer is passionate about designing intuitive experiences that augment human abilities and help businesses succeed.",
  biography: ["Biography", "2025"],
};

export const ABOUT = {
  heading: "Privileged to be working as a UI/UX Designer at Wisbato Softwares,",
  paragraphs: ["I am Abhinandh, a passionate and detail-oriented UI/UX Designer with 3.6 years of experience in crafting user-friendly digital solutions. Currently working at Wisbato Pvt Ltd, I have successfully designed and optimized UI/UX experiences across various industries, including e-commerce, real estate, fintech, healthcare, education, corporate, and logistics.", "I specialize in user research, wireframing, prototyping, and usability testing, leveraging tools like Figma and Adobe XD to create visually compelling and functional designs. My expertise in information architecture, interaction design, and user-centered design principles allows me to craft intuitive digital experiences that drive user engagement and business growth."],
};

export const SKILLS = {
  heading: "Skills That Shape Meaningful User Journeys.",
  cards: [
    { title: "01  User Experience Design", items: ["User Research", "Design Thinking", "Data Analysis", "Wireframe and Prototype"] },
    { title: "02  User Interface Design", items: ["Design System", "Interaction Design", "Responsive Design", "Web Design", "App Design"] },
    { title: "03  Design Planning", items: ["Set Process", "Design Sprint", "Project Trackers", "Resource Management"] },
    {
      title: "04  Visual Communication & Branding",
      items: ["HTML(basic)", "CSS (Basic)", "Implementing typography", "Aligning UI designs with brand identity"],
    },
  ],
};

export interface TimelineEntry {
  role: string;
  date: string;
  points: string[];
}

export const EXPERIENCE = {
  heading: "Experience That Speaks Through Design",
  intro: "From crafting intuitive interfaces to shaping seamless user journeys, every experience has strengthened my passion for purposeful design.",
  timeline: [
    {
      role: "UI/UX Intern — WISBATO",
      date: "1/2/2023",
      points: ["Assisted in UX research, prototyping, and UI development for client projects.", "Learned to create responsive designs and implement user feedback efficiently.", "Contributed to improving visual consistency across web products."],
    },
    {
      role: "Junior UI/UX Designer",
      date: "1/8/2023",
      points: ["Lead design for web and mobile interfaces focused on usability and clean visuals.", "Collaborated with developers and clients to refine digital experiences.", "Created wireframes, prototypes, and final UI for various industry domains (healthcare, fintech, real estate, etc.)."],
    },
    {
      role: "UI/UX Designer",
      date: "1/9/2024",
      points: ["Lead design for web and mobile interfaces focused on usability and clean visuals.", "Collaborated with developers and clients to refine digital experiences.", "Created wireframes, prototypes, and final UI for various industry domains (healthcare, fintech, real estate, etc.)."],
    },
    {
      role: "Senior UI/UX Designer",
      date: "1/9/2025",
      points: ["Managed complex projects and mentored junior designers.", "Established design standards, workflows, and component libraries.", "Collaborated with product managers and stakeholders to define product strategy.", "Led usability testing and translated insights into impactful design improvements."],
    },
    {
      role: "Product Designer",
      date: "1/6/2026",
      points: ["Owned the complete product lifecycle from discovery to launch.", "Balanced business objectives, user needs, and technical feasibility.", "Defined product vision, user journeys, and experience strategies.", "Drove product innovation through data-driven decisions and customer insights."],
    },
  ] satisfies TimelineEntry[],
  history: [
    { project: "Fire fighting house", role: "UX/UI Design lead 2025" },
    { project: "WAPO GENERAL TRADING", role: "UX/UI Design lead 2025" },
    { project: "Fintech Company Website", role: "UX/UI Design lead Oct 2024" },
    { project: "Construction Company Website", role: "UX/UI Design lead Oct 2024" },
    { project: "Wiscart E-Commerce Website", role: "UX/UI Design lead Oct 2024" },
    { project: "Car Rental Service Website", role: "UX/UI Design lead Oct 2024" },
    { project: "Dr. Jigar Bhatt Hair Transplant Website", role: "UX/UI Design lead jan 2025" },
    { project: ".NET Admin & User Panel Responsive Design", role: "Senior web Design lead march 2025" },
    { project: "Wapo Logistics & E-Commerce Website", role: "Senior web Design lead april 2025" },
    { project: "Home Cox-Fly Tour & Travel Website", role: "Senior web Design lead april 2025" },
    { project: "Home Cox-Fly Tour & Travel Website", role: "Senior web Design lead april 2025" },
    { project: "Shelter Creation Website", role: "Senior web Design lead may 2025" },
    { project: "Sails tracking application", role: "Product designear may 2025" },
  ],
};

export interface PortfolioRow {
  index: string;
  title: string;
  tags: string;
  /** Project detail slug; rows without one aren't clickable yet. */
  slug?: string;
}

export const PORTFOLIO: PortfolioRow[] = [
  { index: "01", title: "Dream Town", tags: "Website design , user experience , User interface", slug: "dream-town" },
  { index: "02", title: "Enafto", tags: "Website design , user experience , User interface", slug: "enafto" },
  { index: "03", title: "Sales application", tags: "Mobile app , user experience , User interface", slug: "sales-application" },
  { index: "04", title: "4x trading platform", tags: "Website design , user experience , User interface" },
  { index: "05", title: "General trading", tags: "Website design , user experience , User interface" },
  { index: "06", title: "Travel and tourism", tags: "Website design , user experience , User interface" },
  { index: "07", title: "Real-estate", tags: "Website design , user experience , User interface" },
  { index: "08", title: "Construction", tags: "Website design , user experience , User interface" },
];

export const CLOSING = "Crafting experiences that connect people and products.";
