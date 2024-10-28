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
  lal10_logo,
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
  lal10Manufacturers,
  lal10Brands,
  brandsDashboard,
  appleLogo,
  websiteLogo,
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
    title: "Software Developer",
    company_name: "Lal10",
    icon: lal10_logo,
    iconBg: "white",
    date: "July 2023 - August 2024",
    points: [
      "Developed a dashboard that enables Brands  to track orders from initiation to delivery. Each order's details, including shipping, payment, and status, are clearly visible.",
      "Led development of IAM, Finance,Super Admin and DPR modules , implementing scalable architecture and improving performance by 30% through code optimization.",
      "Architected and implemented a streamlined deployment pipeline, reducing launch times by 20% and enhancing app stability by 30%.",
      "Refactored legacy codebase to improve maintainability, scalability, and performance.",
      "Enhanced user experience through A/B testing and iterative improvements.",
    ],
  },
  {
    title: "React.js / React Native Developer",
    company_name: "Mobcoder Technologies",
    icon: mobcoderIcon,
    iconBg: "white",
    date: "June 2021 - June 2023",
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
    name: "Brands Dashboard",
    description:
      "Developed a dashboard that enables Brands to track orders from initiation to delivery. Each order's details,including shipping, payment, and status, are clearly visible.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
      {
        name: "Firebase Crashlytics",
        color: "grey-text-gradient",
      },
      {
        name: "DevExpress",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "grey-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Docker",
        color: "pink-text-gradient",
      },
      {
        name: "AWS",
        color: "grey-text-gradient",
      },
    ],
    image: brandsDashboard,
    isOnPlayStore: true,
    actionIcon: websiteLogo,
    source_code_link:
      "https://play.google.com/store/apps/details?id=com.buyerapp&hl=en",
  },
  {
    name: "Lal10 for Manufacturers",
    description:
      "A react native application which allows manufacturers to enquire and purchase fabrics, get finance and can submit daliy production reports within an organisation.",
    tags: [
      {
        name: "React native",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "Redux",
        color: "pink-text-gradient",
      },
      {
        name: "Firebase",
        color: "grey-text-gradient",
      },
      {
        name: "Firebase Cloud Messaging",
        color: "green-text-gradient",
      },
      {
        name: "Firebase Crashlytics",
        color: "grey-text-gradient",
      },
      {
        name: "Sentry",
        color: "blue-text-gradient",
      },
      {
        name: "Moengage",
        color: "pink-text-gradient",
      },

    ],
    image: lal10Manufacturers,
    isOnPlayStore: true,
    actionIcon: googlePlay,
    appStoreIcon:appleLogo,
    source_code_link:
      "https://play.google.com/store/apps/details?id=com.lal10.manufacturerapp&hl=en",
        isOnAppStore:true,
      app_store_link:"https://apps.apple.com/in/app/lal10-for-manufacturers/id6446427548"
  },
  {
    name: "Lal10 for Brands",
    description:
      "A react native application which allows manufacturers to enquire and purchase fabrics, get finance and can submit daliy production reports within an organisation.",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "Redux",
        color: "pink-text-gradient",
      },
      {
        name: "Firebase",
        color: "grey-text-gradient",
      },
      {
        name: "Firebase Cloud Messaging",
        color: "green-text-gradient",
      },
      {
        name: "Firebase Crashlytics",
        color: "grey-text-gradient",
      },
      {
        name: "Sentry",
        color: "blue-text-gradient",
      },
      {
        name: "Moengage",
        color: "pink-text-gradient",
      },
    ],
    image: lal10Brands,
    isOnPlayStore: true,
    actionIcon: googlePlay,
    appStoreIcon:appleLogo,
    source_code_link:
      "https://play.google.com/store/apps/details?id=com.buyerapp&hl=en",
      isOnAppStore:true,
      app_store_link:"https://apps.apple.com/in/app/lal10-for-brands/id6444403900"
  },
  {
    name: "Emami Saathi",
    description:
      "EFR Saathi is an E-Pharmacy app that aims to provide medicine to rural areas through it's volunteers called Saathi",
    tags: [
      {
        name: "React native",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color:"grey-text-gradient",
      },
      {
        name: "Ruby on Rails",
        color: "green-text-gradient",
      },
      {
        name: "Redux",
        color: "pink-text-gradient",
      },
      {
        name: "Algolia",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase Crashlytics",
        color: "grey-text-gradient",
      },
      {
        name: "Stripe",
        color: "green-text-gradient",
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
      "A women fitness application ,Aimed at helping women overcome several physical issues and problems  in their day to day life.",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "Nodejs",
        color: "green-text-gradient",
      },
      {
        name: "Onesignal",
        color: "pink-text-gradient",
      },
      {
        name: "Streamchat",
        color: "white-text-gradient",
      },
      {
        name: "React Query",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase Cloud Messaging",
        color: "green-text-gradient",
      },
      {
        name: "Firebase Crashlytics",
        color: "pink-text-gradient",
      },
    ],
    image: savage,
    isOnPlayStore: false,
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
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "Nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "blue-text-gradient",
      },
      {
        name: "Devexpress",
        color: "green-text-gradient",
      },
      {
        name: "Styled Components",
        color: "blue-text-gradient",
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
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "Nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "white-text-gradient",
      },
      {
        name: "Docker",
        color: "green-text-gradient",
      },
      {
        name: "Styled Components",
        color: "pink-text-gradient",
      },
      {
        name: "BootStrap",
        color: "blue-text-gradient",
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
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "white-text-gradient",
      },
      {
        name: "Redux Toolkit",
        color: "green-text-gradient",
      },
      {
        name: "Shopify Restyle",
        color: "pink-text-gradient",
      },
      {
        name: "Babel Transformer",
        color: "white-text-gradient",
      },
      {
        name: "Zod",
        color: "green-text-gradient",
      },
    ],
    image: reactNative_background,
    isOnPlayStore: true,
    actionIcon: github,
    source_code_link: "https://github.com/singh-026/ArchSetup",
  },
];

export { services, technologies, experiences, testimonials, projects };
