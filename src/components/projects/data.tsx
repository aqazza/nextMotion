import { IoLogoGithub } from "react-icons/io";
import { RiExternalLinkLine } from "react-icons/ri";
import type { TimelineEntry } from "../ui/timeline";

export const sectionHeading = {
  title: "What I'm working on",
  subTitle: "Let's dive into what I've been up to.",
};

export const timelineData: TimelineEntry[] = [
  {
    title: "Marketing Portfolio",
    projectUrls: [
      {
        url: "https://anasqazza.vercel.app/",
        icon: <RiExternalLinkLine size={20} />,
      },
      {
        url: "https://github.com/aqazza/Portfolio2.0",
        icon: <IoLogoGithub size={20} />,
      },
    ],
    videoUrl: "/images/AQPortfolio.mp4",
    description: `The site highlights a variety of projects, demonstrating a commitment 
    to clean design and efficient functionality. Visitors can explore completed projects
     and gain insight into technical expertise and development process while cloning it for themselves.`,
    tech: [
      "TypeScript",
      "Next.js",
      "TailwindCSS",
      "Vercel Postgres",
    ],
    cards: {
      a: {
        title: "Comprehensive Learning Tool",
        text: `Built with TypeScript and Next.js, this app offers a robust
              platform to enhance your development skills. It's
              open-sourced to provide a practical tool and valuable knowledge to
              developers at any stage.`,
      },
      b: {
        title: "Easy Integration with Your DB of Choice",
        text: `Effortlessly integrate with your preferred database, including
              SQLite for local use. Utilizing Prisma and tRPC, this app offers a
              flexible and scalable backend setup, making it easy to adapt and
              manage your data needs as you develop and expand your project.`,
      },
    },
  },
  {
    title: "Photography Portfolio",
    projectUrls: [
      {
        url: "https://saied-ashour.netlify.app/",
        icon: <RiExternalLinkLine size={20} />,
      },
      {
        url: "https://github.com/aqazza/Saied-photography-portfolio",
        icon: <IoLogoGithub size={20} />,
      },
    ],
    videoUrl: "/images/saied.mp4",
    description: `The site features a selection of projects that emphasize technical proficiency, modern design, and practical functionality. It offers an overview of Saied’s skills and approach to delivering high-quality digital experiences.`,
    tech: [
      "TypeScript",
      "Next.js",
      "TailwindCSS",
      "Aceternity UI",
      "Framer Motion",
    ],
    cards: {
      a: {
        title: "Modern Reactive UI",
        text: `This portfolio template offers a clean, modern, and fully responsive design. Built to be sleek and dynamic, it leverages the latest front-end technologies to ensure a smooth and engaging user experience, perfect for showcasing your projects and skills.`,
      },
      b: {
        title: "Easy Customization & Integration",
        text: `Seamlessly customize the portfolio to fit your unique style and preferences. With support for easy integration into various data sources, this opinionated template is designed to simplify the process of building a single-page application (SPA) portfolio that truly reflects your work.`,
      },
    },
  },
  {
    title: "Fiore CRM",
    projectUrls: [
      {
        url: "https://fiore-three.vercel.app/",
        icon: <RiExternalLinkLine size={20} />,
      },
      {
        url: "https://github.com/aqazza/Fiore",
        icon: <IoLogoGithub size={20} />,
      },
    ],
    imageUrl: "/images/fiore.png",
    description: `This website presents Fiore, a fully front-end Customer Relationship Management (CRM) system designed to streamline user interactions and enhance business workflows. Built with a focus on modern web technologies, the site offers an intuitive and efficient front-end interface for managing customer data, tracking engagements, and optimizing client relationships—all.`,
    tech: [
      "TypeScript",
      "Next.js",
      "TailwindCSS",
      "Framer Motion",
      "tRPC",
      "Sanity",
    ],
    cards: {
      a: {
        title: "Fast & Responsive Performance",
        text: `Built with Next.js, this cinematography portfolio ensures lightning-fast page speeds and smooth navigation. High-quality video and image assets load efficiently, offering a seamless viewing experience without compromising on performance.`,
      },
      b: {
        title: "Powered by Sanity.io",
        text: `Leveraging Sanity.io, this portfolio delivers dynamic content and high-resolution assets with ease. Update your work in real-time and enjoy the flexibility of a powerful CMS, ensuring that your portfolio stays current and visually stunning.`,
      },
    },
  },
];
