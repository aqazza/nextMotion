import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

export const title = {
  plainText: "",
  glowText: "nextMotion",
  subTitle: "A sleek UI starter for an unforgettable portfolio",
  highlight: ["unforgettable"],
};

export const profileCard = {
  title: "Anas Qazza",
  subTitle: "Fullstack Software Developer",
  body: `Hey, I’m Anas Qazza! I’m a full-stack developer who loves diving into code, building scalable web apps, 
  and occasionally breaking things just to fix them again. When I’m not glued to my screen, you’ll probably find 
  me exploring the latest tech trends`,
  socialUrls: [
    {
      url: "https://www.linkedin.com/in/anas-qazza",
      icon: <FaLinkedinIn size={20} />,
    },
    {
      url: "https://github.com/aqazza",
      icon: <IoLogoGithub size={20} />,
    },
  ],
  tooltip: {
    imagePath: "/images/about.jpeg",  // Path to your local image
    title: "Hey...",
    subTitle: "That's me!",
  },
};
