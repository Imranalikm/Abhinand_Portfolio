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
    image: string;
    /** Display box size in px from the design — caps the hero's width and sets its aspect ratio. */
    w: number;
    h: number;
    /** Corner radius in px; omit for images that already include a device frame. */
    radius?: number;
    shadow?: boolean;
    /** "contain" for transparent device-mockup renders; defaults to "cover". */
    fit?: "cover" | "contain";
    /** CSS object-position for cropped (cover) images. */
    position?: string;
  };
  overview: string[];
  problemStatement: string[];
  gallery: GalleryImage[];
  role: {
    intro: string;
    /** Heading above the list; defaults to "Responsibilities", `null` hides it. */
    responsibilitiesTitle?: string | null;
    responsibilities: string[];
  };
  tags: string[];
  /** Defaults to "  /  ". */
  tagSeparator?: string;
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
      brand: "Dream Town",
      image: "/dream-town-hero.jpg",
      w: 1340,
      h: 602,
      radius: 14,
      shadow: true,
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
  {
    slug: "enafto",
    date: "04 - 2026",
    title: "Enafto",
    client: "Enafto (Dubai, United Arab Emirates)",
    services: ["UX Design", "UI Design"],
    mockup: {
      brand: "Enafto",
      image: "/enafto-hero.jpg",
      w: 1273,
      h: 731,
      fit: "contain",
    },
    overview: [
      "Enafto is a digital platform designed to provide users with a seamless and intuitive online experience. The goal of the project was to create a user-friendly interface with clear navigation, well-structured content, and a consistent visual design that helps users interact with the platform easily.",
      "As a UI/UX Designer, I focused on creating a clean and modern interface, improving the user journey, and ensuring a consistent experience across different screen sizes.",
    ],
    problemStatement: [
      "The challenge was to create a digital experience that makes it easy for users to navigate the platform, understand its offerings, and access relevant information without confusion. The goal was to address potential usability challenges through clear information architecture, intuitive navigation, and a consistent interface that improves the overall user experience",
      "The focus was on designing a user-friendly, visually engaging, and accessible experience that balances user needs with business goals.",
    ],
    // Sizes are the design's rail boxes scaled 1.3x to sit at the same height as Dream Town's rail.
    gallery: [
      { src: "/enafto-page-01.jpg", w: 107, h: 603, label: "Enafto screen 1" },
      { src: "/enafto-page-02.jpg", w: 114, h: 491, label: "Enafto screen 2" },
      { src: "/enafto-page-03.jpg", w: 129, h: 594, label: "Enafto screen 3" },
      { src: "/enafto-page-04.jpg", w: 103, h: 315, label: "Enafto screen 4" },
      { src: "/enafto-page-05.jpg", w: 135, h: 424, label: "Enafto screen 5" },
      { src: "/enafto-page-06.jpg", w: 156, h: 231, label: "Enafto screen 6" },
      { src: "/enafto-page-07.jpg", w: 155, h: 319, label: "Enafto screen 7" },
      { src: "/enafto-page-08.jpg", w: 156, h: 186, label: "Enafto screen 8" },
      { src: "/enafto-page-08.jpg", w: 156, h: 186, label: "Enafto screen 8" },
      { src: "/enafto-page-09.jpg", w: 156, h: 397, label: "Enafto screen 9" },
      { src: "/enafto-page-10.jpg", w: 72, h: 424, label: "Enafto screen 10" },
      { src: "/enafto-page-11.jpg", w: 156, h: 407, label: "Enafto screen 11" },
      { src: "/enafto-page-12.jpg", w: 156, h: 269, label: "Enafto screen 12" },
      { src: "/enafto-page-12.jpg", w: 156, h: 268, label: "Enafto screen 12" },
      { src: "/enafto-page-13.jpg", w: 156, h: 387, label: "Enafto screen 13" },
      { src: "/enafto-page-14.jpg", w: 118, h: 424, label: "Enafto screen 14" },
      { src: "/enafto-page-15.jpg", w: 151, h: 424, label: "Enafto screen 15" },
      { src: "/enafto-page-16.jpg", w: 155, h: 413, label: "Enafto screen 16" },
      { src: "/enafto-page-17.jpg", w: 156, h: 312, label: "Enafto screen 17" },
      { src: "/enafto-page-18.jpg", w: 156, h: 339, label: "Enafto screen 18" },
      { src: "/enafto-page-19.jpg", w: 134, h: 424, label: "Enafto screen 19" },
      { src: "/enafto-page-19.jpg", w: 134, h: 424, label: "Enafto screen 19" },
    ],
    role: {
      intro:
        "As the UI/UX Designer, I was responsible for designing the user experience and interface for the Enafto project. My focus was on understanding project requirements, structuring content, and creating intuitive user journeys that made the platform easy to navigate.",
      responsibilities: [
        "Designed the website's information architecture and page structure.",
        "Created user flows and wireframes to define the overall user journey.",
        "Designed clean, modern, and user-friendly UI screens in Figma.",
        "Developed prototypes to demonstrate interactions and navigation.",
        "Maintained consistent visual styles and reusable UI components.",
        "Focused on responsive layouts for desktop, tablet, and mobile devices.",
        "Collaborated with the team to align design decisions with project requirements.",
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
  {
    slug: "sales-application",
    date: "04 - 2026",
    title: "Sales application",
    client: "Wisbato project (India, Kerala)",
    services: ["UX Design", "UI Design"],
    mockup: {
      brand: "Sales application",
      image: "/sales-app-hero.jpg",
      w: 781,
      h: 704,
      radius: 25,
      position: "50% 44%",
    },
    overview: [
      "The Sales Tracking Application is designed to help sales teams manage their daily activities, track sales performance, monitor leads, and organize customer follow-ups in one place. The goal is to simplify sales workflows and provide a clear view of sales progress through an intuitive and user-friendly interface.",
      "The design focuses on simplifying data-heavy information, improving navigation, and helping sales professionals access important information quickly, manage their tasks efficiently, and make informed decisions.",
    ],
    problemStatement: [
      "Sales teams often need to manage multiple leads, customer interactions, follow-ups, and performance metrics across different tools. This can make it difficult to stay organized, track progress, and prioritize daily activities.",
      "The challenge was to design a centralized application that streamlines sales activities, improves visibility into sales performance, and helps sales professionals manage their workflows more efficiently.",
    ],
    gallery: [{ src: "/sales-app-screens.jpg", w: 545, h: 586, label: "Smart tracking, smarter sales" }],
    role: {
      intro: "UI/UX Designer",
      responsibilitiesTitle: null,
      responsibilities: [
        "Designed the user interface and overall user experience.",
        "Created user flows and information architecture.",
        "Developed wireframes and interactive prototypes in Figma.",
        "Designed dashboards to present sales performance and key metrics clearly.",
        "Structured lead management and customer follow-up workflows.",
        "Focused on intuitive navigation and consistent UI components.",
        "Designed responsive layouts to support usability across devices.",
      ],
    },
    tags: [
      "Product Design",
      "UI/UX Design",
      "Dashboard Design",
      "Mobile App Design",
      "User Flows",
      "Wireframing",
      "Prototyping",
      "Figma",
    ],
    tagSeparator: " · ",
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
