
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  java,
  spring,
  gsap,
  framer,
  figma,
  git,
  postman,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from '../assets'


// Import Nalco separately
import nalco from "../assets/company/nalco.png";


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
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Ui/UX Designer",
    icon: creator,
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "framer",
    icon: framer,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Material Ui",
    icon: mui,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "spring",
    icon: spring,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },
  {
    name: "postman",
    icon: postman,
  },
  {
    name: "git",
    icon: git,
  },


];

const experiences = [
  {
    title: "Vocational Trainee",
    company_name: "NALCO (Systems Department)",
    icon: nalco,
    iconBg: "#4f577e",
    date: "May 2025 - June 2025",
    points: [
      "Designed and developed a full-featured Hospital Management System during my internship using React, Node.js, and MySQL.",
      "Implemented modules for patient registration, doctor appointments, billing, and report generation to streamline hospital operations.",
      "Built an intuitive, responsive UI with role-based dashboards for admin, doctors, and staff to manage daily activities efficiently.",
      "Integrated authentication and authorization to ensure secure access and data privacy.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Huzaif proved me wrong.",
    name: "MD Mustaqeem",
    designation: "Ecommerce",
    company: "QuickMart",
    image: firstTestimonial,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Huzaif does.",
    name: "Abdul Raheman",
    designation: "Ecommerce Business",
    company: "justbuyz",
    image: secondTestimonial,
  },
  {
    testimonial:
      "After Huzaif optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "James Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "Blood Buddy (BBMS)",
    description:
      "Blood Buddy is a web-based app for managing donors, recipients, blood inventory, and requests with secure login and role based access, ensuring smooth and efficient blood donation management.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "white-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },

    ],
    image: project2,
    source_code_link: "https://github.com/himanshu-sekher-padhy/bloodbank_management_system/",
  },
  {
    name: "MedCare+ (HMS)",
    description:
      "MedCare+ is a web-based healthcare platform that streamlines patient care, doctor management, appointments, billing, and medical records with secure role-based access.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "springboot",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
      {
        name: "restapi",
        color: "white-text-gradient",
      },
    ],
    image: gearXpert,
    source_code_link: "https://github.com/himanshu-sekher-padhy/hospital-management-system/",
  },
  {
    name: "ChefMate",
    description:
      "ChefMate is an AI-powered recipe assistant that suggests delicious recipes in real-time based on ingredients you have at home, combining ReactJS frontend with Hugging Face NLP for smart recipe generation.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "white-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "huggingfaceapi",
        color: "green-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/himanshu-sekher-padhy/chefmate-recipe-bot/",
  },
];

export { services, technologies, experiences, testimonials, projects };
