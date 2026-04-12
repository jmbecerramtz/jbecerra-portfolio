import nauScreen from "../../../assets/nau-screen.png";
import emailScreen from "../../../assets/email-screen.png";
import localLoveScreen from "../../../assets/locallove-screen.png";
import epicurenScreen from "../../../assets/epicuren-screen.png";
import sheaHomesScreen from "../../../assets/sheahomes-screen.png";
import sdccuScreen from "../../../assets/sdccu-screen.png";

export const projects = [
  {
    name: "NAU Degrees",
    role: "Front-End Developer",
    description:
      "Developed a high-impact university microsite with a fast turnaround, building responsive front-end components and ensuring accessibility compliance across devices.",
    tech: ["Next.js", "Bootstrap", "Node.js", "Accessibility"],
    image: nauScreen,
    link: "https://degrees.nau.edu",
    category: "Enterprise / Education",
  },

  {
    name: "Email Development",
    role: "Lead Email Developer",
    description:
      "Designed and developed custom email templates optimized for 100+ clients, ensuring accessibility compliance and consistent rendering across platforms for brands like Shea Homes.",
    tech: ["HTML Email", "Accessibility", "Email Testing"],
    image: emailScreen,
    link: null,
    category: "Email / Marketing",
  },

  {
    name: "The Local Love Club",
    role: "Development Lead",
    description:
      "Customized a Shopify theme with advanced product display features, integrating custom galleries and plugins to enhance the shopping experience.",
    tech: ["Shopify", "Liquid", "JavaScript"],
    image: localLoveScreen,
    link: "https://thelocalloveclub.com",
    category: "E-commerce",
  },

  {
    name: "Epicuren",
    role: "DevOps / Shopify Support",
    description:
      "Provided ongoing Shopify support including theme customization, performance optimization, accessibility improvements, and feature development under a monthly retainer model.",
    tech: ["Shopify", "Performance", "Accessibility", "GitHub"],
    image: epicurenScreen,
    link: "https://epicuren.com",
    category: "E-commerce",
  },

  {
    name: "Shea Homes",
    role: "Front-End Developer / QA",
    description:
      "Contributed to a large-scale real estate platform by developing modular front-end components, maintaining a pattern library, and supporting QA and backend integration workflows.",
    tech: ["Node.js", "Zurb Foundation", "QA", "Azure DevOps"],
    image: sheaHomesScreen,
    link: "https://www.sheahomes.com",
    category: "Enterprise",
  },

  {
    name: "SDCCU",
    role: "Front-End Developer / QA",
    description:
      "Delivered production-ready front-end modules for a financial platform, ensuring high-quality standards through QA testing and close collaboration with backend teams.",
    tech: ["Kentico", "Zurb Foundation", "Node.js", "QA"],
    image: sdccuScreen,
    link: "https://www.sdccu.com",
    category: "Finance",
  },
];