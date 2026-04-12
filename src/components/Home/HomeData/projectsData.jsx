// src/data/homeProjects.js

import sheaHomesScreen from "../../../assets/sheahomes-screen.png";
import sunBumScreen from "../../../assets/sunbum-screen.png";
import sdccuScreen from "../../../assets/sdccu-screen.png";
import epicurenScreen from "../../../assets/epicuren-screen.png";

export const projects = [
  {
    id: "shea-homes",
    title: "Shea Homes",
    description:
      "Enterprise real estate platform with large-scale content and performance requirements.",
    contribution:
      "Developed modular front-end components, maintained a pattern library, and supported QA and backend integrations.",
    tech: ["Node.js", "Zurb Foundation", "CMS", "APIs"],
    url: "https://www.sheahomes.com",
    image: sheaHomesScreen,
    category: "Enterprise",
    highlight: "Large-scale platform",
    featured: true,
  },
  {
    id: "sun-bum",
    title: "Sun Bum",
    description:
      "High-traffic e-commerce platform with a strong brand and global audience.",
    contribution:
      "Built and optimized UI components, improving performance and maintaining brand consistency.",
    tech: ["Shopify", "Liquid", "JavaScript"],
    url: "https://www.sunbum.com",
    image: sunBumScreen,
    category: "E-commerce",
    highlight: "High-traffic store",
    featured: true,
  },
  {
    id: "sdccu",
    title: "SDCCU",
    description:
      "Financial platform with strict accessibility and compliance requirements.",
    contribution:
      "Implemented accessible front-end modules and ensured cross-browser compatibility across critical user flows.",
    tech: ["HTML", "CSS", "JavaScript", "WCAG"],
    url: "https://www.sdccu.com",
    image: sdccuScreen,
    highlight: "Accessibility focus",
    featured: true,
  },
  {
    id: "epicuren",
    title: "Epicuren",
    description:
      "E-commerce platform focused on performance and user experience.",
    contribution:
      "Delivered ongoing enhancements, performance optimizations, and accessibility improvements under a retainer model.",
    tech: ["Shopify", "JavaScript", "Performance", "Accessibility"],
    url: "https://www.epicuren.com",
    image: epicurenScreen,
    category: "E-commerce",
    highlight: "Ongoing support",
  },
];

export default projects;