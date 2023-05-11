import {
  mobile,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  figma,
  mobcoderIcon,
  shopify,
  emamiSaathi,
  savage,
  dingWeb,
  threejs,
  hrm,
  zod,
  rctquery,
  styledComp,
  googlePlay,
  github,
  reactNative_background,
  hietIcon,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Zod",
    icon: zod,
  },
  {
    name: "React Query",
    icon: rctquery,
  },
  {
    name: "Shopify Restyle",
    icon: shopify,
  },
  {
    name: "Styled Components",
    icon: styledComp,
  },
];

const experiences = [
  {
    title: "React.js / React Native Developer",
    company_name: "Mobcoder Technologies",
    icon: mobcoderIcon,
    iconBg: "white",
    date: "June 2021 - Present",
    points: [
      "Developing and maintaining web and mobile  applications using React.js / React Native and other related technologies.",
      "Designing Architectures for several projects in react native.",
      "Reviewing Codes and providing constructive feedbacks to other devs.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Employee of the month (June 2022)",
      "Bright Beginner of the Year Award(2022) ",
    ],
  },
  {
    title: "Student (Computer Science and Engineering)",
    company_name: "HIET Ghaziabad",
    icon: hietIcon,
    iconBg: "white",
    date: "June 2017 -August 2021",
    points: [
      "Developed an android food delivering application called MAA in the final year.",
      "Developed an app PROTUTOR which was an android application which helped students to learn coding in 6 different languages.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Emami Saathi",
    description:
      "EFR Saathi is an E-Pharmacy app that aims to provide medicine to rural areas through it's volunteers called Saathi",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "ror",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
      {
        name: "firebase-crashlytics",
        color: "grey-text-gradient",
      },
    ],
    image: emamiSaathi,
    isOnPlayStore: true,
    actionIcon: googlePlay,
    source_code_link:
      "https://play.google.com/store/search?q=frankross%20saathi&c=apps",
  },
  {
    name: "Savage",
    description:
      "Savage is a women fitness application , which aims at helping women overcome several physical issues and problems they have in their daily life.",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "one-signal",
        color: "pink-text-gradient",
      },
      {
        name: "streamchat",
        color: "white-text-gradient",
      },
      {
        name: "react-query",
        color: "blue-text-gradient",
      },
      {
        name: "firebase cloud messaging",
        color: "green-text-gradient",
      },
      {
        name: "firebase-crashlytics",
        color: "pink-text-gradient",
      },
    ],
    image: savage,
    isOnPlayStore: true,
    actionIcon: googlePlay,
    source_code_link:
      "https://play.google.com/store/apps/details?id=com.nativehealth.savage",
  },
  {
    name: "DING Web",
    description:
      "Ding is an Event Management application where people can register themselves as Users and Businesses in order to book and avail venues for the various events respectively.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: dingWeb,
  },
  {
    name: "HRM Web",
    description:
      "HRM handles all the HR approaches, i.e. from onboarding to attendance control, to time monitoring and task management.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: hrm,
  },
  {
    name: "React Native Architecture",
    description:
      "A sample react native architecture in typescript with the following requirements",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "redux-toolkit",
        color: "green-text-gradient",
      },
      {
        name: "shopify-restyle",
        color: "pink-text-gradient",
      },
      {
        name: "babel-transformer",
        color: "white-text-gradient",
      },
    ],
    image: reactNative_background,
    isOnPlayStore: true,
    actionIcon: github,
    source_code_link: "https://github.com/singh-026/ArchSetup",
  },
];

export { services, technologies, experiences, testimonials, projects };
