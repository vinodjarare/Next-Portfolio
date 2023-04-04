import {
  FaGithub,
  FaLinkedinIn,
  FaBootstrap,
  FaCode,
  FaHtml5,
  FaReact,
} from "react-icons/fa";

export const navbarData = [
  {
    id: 1,
    title: "About",
    to: "/",
  },
  {
    id: 2,
    title: "Services",
    to: "/services",
  },
  {
    id: 3,
    title: "Works",
    to: "/works",
  },

  {
    id: 4,
    title: "Contact",
    to: "/contact",
  },
];

export const socials = [
  {
    id: 1,
    icon: <FaGithub />,
    link: "https://github.com/vinodjarare/",
  },
  {
    id: 2,
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/vinod-jarare",
  },
];

export const skillData = [
  {
    id: 1,
    title: "Html, Css, Scss",
    percentage: "90%",
  },
  {
    id: 2,
    title: "Bootstrap",
    percentage: "75%",
  },
  {
    id: 3,
    title: "TailwindCSS",
    percentage: "80%",
  },
  {
    id: 4,
    title: "Javascript",
    percentage: "80%",
  },
  {
    id: 5,
    title: "ReactJS",
    percentage: "80%",
  },
  {
    id: 6,
    title: "Node js",
    percentage: "70%",
  },
  {
    id: 7,
    title: "MongoDB",
    percentage: "70%",
  },
  {
    id: 8,
    title: "Git, Github",
    percentage: "80%",
  },
];

export const serviceData = [
  {
    id: 1,
    icon: <FaCode />,
    title: "Web Design",
    description:
      "We design your website as per your buissness requirment with several features. ",
  },
  {
    id: 2,
    icon: <FaHtml5 />,
    title: "Web Development",
    description:
      "We give web development services are used to design ,build,support web software.",
  },
  {
    id: 3,
    icon: <FaReact />,
    title: "Frontend Development",
    description:
      "Develop your website using React, Redux, and other frontend frameworks",
  },
  {
    id: 4,
    icon: <FaBootstrap />,
    title: "Bootstrap Template",
    description:
      "Develope bootstrap and mobile responsive web pages using trending frontend technology. ",
  },
];

export const portfolioData = [
  {
    id: 1,
    image: "/portfolio/fake-store.png",
    title: "React Cart",
    link: "https://github.com/vinodjarare/",
    description:
      "This is the ecommerce cart in which user can add item to shopping cart . This project made by using  React, Bootstrap, Redux",
  },
  {
    id: 2,
    image: "/portfolio/react-chat.png",
    title: "Chat App",
    link: "https://github.com/vinodjarare/",
    description:
      "This is the messaging website in which  user can interact with other user. This project made by using react,css,firebase",
  },
  {
    id: 3,
    image: "/portfolio/poultry.png",
    title: "Poultry Farming",
    link: "https://github.com/vinodjarare/",
    description:
      "This is poultry site which helps user to improve knowledge about poultry industry. This project made by using HTML, CSS, JavaScript, Express js, Mongodb, Bootstrap",
  },
  {
    id: 4,
    image: "/portfolio/ecommerce.png",
    title: "Ecommerce",
    link: "https://github.com/vinodjarare/",
    description:
      "This is the ecommerce website in which user can bay items from wensite . This project made by using  React, Redux, Material UI, Express, Mongodb,Stripe Payment method",
  },
];

export const certificate = [
  {
    id: 1,
    title: "Front End Development Libraries by freecodecamp",
    link: "https://freecodecamp.org/certification/vinod_jarare/front-end-development-libraries",
  },
  {
    id: 2,
    title: "Back End Development and APIs by freecodecamp",
    link: "https://freecodecamp.org/certification/vinod_jarare/back-end-development-and-apis",
  },
];

export const edu = [
  {
    id: 1,
    year: "2018-21",
    institute: "Deogiri College, Aurangabad",
    percentage: 79.9,
    desc: "Bachelor of science in Information Technology",
  },
];
