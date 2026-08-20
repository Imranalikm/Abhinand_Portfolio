/**
 * Case-study data for portfolio detail pages. Add a new object to `projects`
 * to get a new page at `/project/<slug>` — `ProjectDetail.tsx` renders
 * entirely from this shape, nothing is hardcoded per-project in the page.
 */
export interface GalleryImage {
  src: string;
  /** Natural width/height in px — sets the image's fixed size in the horizontal gallery rail. */
  w: number;
  h: number;
  label: string;
}

export interface Project {
  slug: string;
  /** e.g. "04 - 2026" */
  date: string;
  title: string;
  client: string;
  services: string[];
  mockup: {
    brand: string;
    tagline: string;
    locationTag: string;
    ctaLabel: string;
    navLinks: string[];
    image: string;
  };
  overview: string[];
  problemStatement: string[];
  gallery: GalleryImage[];
  role: {
    intro: string;
    responsibilities: string[];
  };
  tags: string[];
  closingQuote: string;
}

export const projects: Project[] = [
  {
    slug: "dream-town",
    date: "04 - 2026",
    title: "Dream Town",
    client: "Dream town (Dubai, United Arab Emirates)",
    services: ["UX Design", "UI Design"],
    mockup: {
      brand: "DREAM TOWN",
      tagline: "LUXURY INTERIOR · DUBAI",
      locationTag: "LUXURY INTERIOR · DUBAI",
      ctaLabel: "EXPLORE",
      navLinks: ["Home", "About", "Services", "Projects", "Contact"],
      image: "/dream-town-hero.jpg",
    },
    overview: [
      "The goal was to design a modern and premium website experience that communicates Dream Town's design expertise while making it easy for users to explore services, discover projects, understand the brand, and take the next step toward consultation.",
      "I focused on creating a clean visual hierarchy, intuitive navigation, strong project presentation, and a consistent design language that balances luxury aesthetics with usability.",
    ],
    problemStatement: [
      "Dream Town needed a modern digital presence that could effectively communicate its premium interior design services while making it easy for potential clients to explore projects, understand the services offered, and take the next step toward consultation.",
      "The existing experience lacked a strong visual hierarchy and a seamless user journey, making it difficult to present the brand's design expertise and guide visitors from discovering the work to exploring services and making an enquiry.",
      "The challenge was to create a premium, visually engaging, and user-friendly website that strengthens brand perception while providing a simple and intuitive experience for potential clients.",
    ],
    gallery: [
      { src: "/dream-town-page-home.jpg", w: 253, h: 620, label: "Home" },
      { src: "/dream-town-page-about.jpg", w: 328, h: 557, label: "About" },
      { src: "/dream-town-page-services.jpg", w: 317, h: 607, label: "Services" },
      { src: "/dream-town-page-project.jpg", w: 338, h: 520, label: "Project" },
      { src: "/dream-town-page-gallery.jpg", w: 349, h: 522, label: "Gallery" },
      { src: "/dream-town-page-detail.jpg", w: 328, h: 607, label: "Detail" },
      { src: "/dream-town-page-blog.jpg", w: 395, h: 498, label: "Blog" },
    ],
    role: {
      intro:
        "As the UI/UX Designer, I was responsible for designing the end-to-end digital experience for Dream Town. I focused on understanding the business and user needs, structuring the website's information architecture, and creating an intuitive journey for users exploring interior design services and projects.",
      responsibilities: [
        "Defined the information architecture and overall website structure.",
        "Created user flows and wireframes to establish clear navigation and content hierarchy.",
        "Designed the high-fidelity UI with a premium and modern visual direction.",
        "Developed interactive prototypes to validate key interactions and user journeys.",
        "Focused on responsive design across desktop, tablet, and mobile experiences.",
        "Created consistent UI components and visual patterns to maintain a cohesive design system.",
        "Collaborated with stakeholders and developers to ensure the final design aligned with business requirements and was practical to implement.",
      ],
    },
    tags: [
      "UI/UX Design",
      "Product Design",
      "UX Research",
      "Information Architecture",
      "User Flow",
      "Wireframing",
      "Prototyping",
      "Responsive Design",
    ],
    closingQuote: "Crafting experiences that connect people and products.",
  },
];

export function getProjectBySlug(slug: string | undefined): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProject(slug: string): Project | undefined {
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1 || projects.length < 2) return undefined;
  return projects[(index + 1) % projects.length];
}
