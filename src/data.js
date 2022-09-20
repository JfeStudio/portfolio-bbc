import { BsPatchCheckFill } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { BiErrorCircle } from "react-icons/bi";

export const frontend = [
  {
    id: 1,
    vektor: <BsPatchCheckFill />,
    language: "HTML",
    level: "Experienced",
  },
  {
    id: 2,
    vektor: <BsPatchCheckFill />,
    language: "CSS",
    level: "Experienced",
  },
  {
    id: 3,
    vektor: <BsPatchCheckFill />,
    language: "JavaScript",
    level: "Experienced",
  },
  {
    id: 4,
    vektor: <BsPatchCheckFill />,
    language: "Bootstrap",
    level: "Experienced",
  },
  {
    id: 5,
    vektor: <BsPatchCheckFill />,
    language: "Tailwind",
    level: "Experienced",
  },
  {
    id: 5,
    vektor: <BsPatchCheckFill />,
    language: "React",
    level: "Intermediate",
  },
];

// ==========

export const backend = [
  {
    id: 1,
    vektor: <BsPatchCheckFill />,
    language: "Node JS",
    level: "Intermediate",
  },
  {
    id: 2,
    vektor: <BsPatchCheckFill />,
    language: "MongoDB",
    level: "Intermediate",
  },
  {
    id: 3,
    vektor: <BsPatchCheckFill />,
    language: "PHP",
    level: "Experienced",
  },
  {
    id: 4,
    vektor: <BsPatchCheckFill />,
    language: "MySQL",
    level: "Intermediate",
  },
  {
    id: 5,
    vektor: <BsPatchCheckFill />,
    language: "Laravel",
    level: "Intermediate",
  },
  {
    id: 5,
    vektor: <BsPatchCheckFill />,
    language: "Python",
    level: "Intermediate",
  },
];

// =========

export const services = [
  {
    id: 1,
    vektor: <BiErrorCircle />,
    title: "Design",
    description: "---------------------------------------------------",
    btn: "Coming Soon",
  },
  {
    id: 2,
    vektor: <BiErrorCircle />,
    title: "UI/UX",
    description: "---------------------------------------------------",
    btn: "Coming Soon",
  },
  {
    id: 3,
    vektor: <BiErrorCircle />,
    title: "Developer",
    description: "---------------------------------------------------",
    btn: "Coming Soon",
  },
  {
    id: 4,
    vektor: <BiErrorCircle />,
    title: "Animation",
    description: "---------------------------------------------------",
    btn: "Coming Soon",
  },
];

// =======

// ======== data card
export const portfolio = [
  {
    id: 1,
    image: require("./assets/images/project-1.png"),
    title: "Brand Service Landing Page",
    category: "Web Design",
    link: "https://jfestudio.github.io/responsive-brand-service-landingpage/",
    repo: "https://github.com/JfeStudio/responsive-brand-service-landingpage",
  },
  {
    id: 2,
    image: require("./assets/images/project-2.png"),
    title: "TooTravel Modern Website",
    category: "Web Design",
    link: "https://tootravel.vercel.app/",
    repo: "https://github.com/JfeStudio/tootravel",
  },
  {
    id: 3,
    image: require("./assets/images/project-3.png"),
    title: "ioTm Mentor",
    category: "Web Design",
    link: "https://jfestudio.github.io/iotm-mentor-demo/",
    repo: "https://github.com/JfeStudio/iotm-mentor-demo",
  },
  {
    id: 4,
    image: require("./assets/images/project-4.png"),
    title: "Social Media Tools",
    category: "Web Design",
    link: "https://jfestudio.github.io/social-media-tools-landing-page/",
    repo: "https://github.com/JfeStudio/social-media-tools-landing-page",
  },
  {
    id: 5,
    image: require("./assets/images/project-5.png"),
    title: "Digital Agency",
    category: "Web Design",
    link: "https://jfestudio.github.io/responsive-digital-agency/",
    repo: "https://github.com/JfeStudio/responsive-digital-agency",
  },
  {
    id: 6,
    image: require("./assets/images/project-6.png"),
    title: "Hefa Store",
    category: "Web Design",
    link: "https://jfestudio.github.io/ecommerce-jfeStore/",
    repo: "https://github.com/JfeStudio/ecommerce-jfeStore",
  },
];

// ========

export const contact = [
  {
    id: 1,
    vektor: <MdOutlineEmail />,
    info: "Email",
    desc: "abdur.rohman@citiasiainc.id",
    link: "mailto:abdur.rohman@citiasiainc.id",
  },
  {
    id: 2,
    vektor: <RiMessengerLine />,
    info: "Messenger",
    desc: "--------",
    link: "/",
  },
  {
    id: 3,
    vektor: <BsWhatsapp />,
    info: "WhatsApp",
    desc: "+62 666-999-0",
    link: "https://api.whatsapp.com/send?phone=+082246454048",
  },
];
