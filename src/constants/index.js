// import {
//   web,
//   frontend,
//   design,
//   backend,
//   fullStack,
//   cloud,
//   html,
//   css,
//   javascript,
//   reactjs,
//   formik,
//   redux,
//   mui,
//   tailwind,
//   scss,
//   nodejs,
//   expressjs,
//   mongodb,
//   mongoose,
//   git,
//   github,
//   EC2,
//   S3,
//   vscode,
//   ChatGPT,
//   chrome,
//   mongodbCompass,
//   postman,
//   ubuntu,
//   Impress,
//   e_commerce,
//   proConnectup,
//   portfolio,
// } from "../assets";

const navLinks = [
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
    icon: "./web.png",
  },
  {
    title: "React Developer",
    icon: "./frontend.png",
  },
  {
    title: "Backend Developer",
    icon: "./backend.png",
  },
  {
    title: "Full Stack Developer",
    icon: "./fullStack.png",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: "./html.png",
  },
  {
    name: "CSS 3",
    icon: "./css.png",
  },
  {
    name: "JavaScript",
    icon: "./javascript.png",
  },
  {
    name: "Tailwind CSS",
    icon: "./tailwind.png",
  },
  {
    name: "Bootstrap CSS",
    icon: "./bootstrap.png",
  },
  {
    name: "Matirial UI",
    icon: "./material-ui.png",
  },
  {
    name: "React JS",
    icon: "./reactjs.png",
  },
  {
    name: "Redux",
    icon: "./redux.png",
  },
  {
    name: "Next",
    icon: "./next.png",
  },
  {
    name: "Typescript",
    icon: "./typescript.png",
  },
  {
    name: "Jest",
    icon: "./jest.png",
  },
  {
    name: "Formik",
    icon: "./formik-icon.png",
  },
  {
    name: "Scss",
    icon: "./scss.png",
  },
  {
    name: "Node JS",
    icon: "./nodejs.png",
  },
  {
    name: "Express JS",
    icon: "./expressjs.png",
  },
  {
    name: "Nest JS",
    icon: "./nest.png",
  },
  {
    name: "MongoDB",
    icon: "./mongodb.png",
  },
  {
    name: "Socket.io JS",
    icon: "./socket.png",
  },
  {
    name: "Mongoose",
    icon: "./mongoose.png",
  },
  {
    name: "Git",
    icon: "./git.png",
  },
  {
    name: "GitHup",
    icon: "./github.png",
  },
  {
    name: "EC2",
    icon: "./ec2.png",
  },
  {
    name: "S3",
    icon: "./Amazon-S3.png",
  },
];

const tools = [
  {
    name: "VS Code",
    icon: "./vscode.png",
  },
  {
    name: "ChatGPT",
    icon: "./ChatGPT.png",
  },
  {
    name: "Chrome",
    icon: "./chrome.png",
  },
  {
    name: "Impress",
    icon: "./Impress.png",
  },
  {
    name: "Mongodb Compass",
    icon: "./mongodbCompass.png",
  },
  {
    name: "Postman",
    icon: "./postman.png",
  },
  {
    name: "Ubuntu",
    icon: "./ubuntu.png",
  },
];

const experiences = [
  {
    title: "Frontend Development",
    company_name: "React.js, Redux, Formik with Yup",
    icon: "./frontend.png",
    iconBg: "#383E56",
    date: "Jun 2022 - Present",
    points: [
      "Advanced skills in React.js for building dynamic web applications.",
      "Expertise in Redux for efficient state management.",
      "Experience with Formik and Yup for seamless form handling and validation.",
      "Applied Flux architecture to enhance data flow and maintainability.",
      "Implemented advanced architectural patterns for scalable applications.",
      "These are just a few of the many libraries",
    ],
  },
  {
    title: "UI Designing",
    company_name: "Material UI, Framer motion, Tailwind CSS, SCSS",
    icon: "./design.png",
    iconBg: "white",
    date: "Sep 2022 - Present",
    points: [
      "Proficient in Material UI for creating modern and responsive user interfaces.",
      "Expertise in Framer Motion for crafting smooth and interactive animations.",
      "Skillful use of Tailwind CSS to streamline and enhance UI styling.",
      "Leveraged SCSS to seamlessly integrate Tailwind CSS utility classes, optimizing code and enabling custom class creation when required.",
      "Ability to create responsive layouts for diverse screen sizes and devices.",
      "Prioritizing user experience and usability in UI design projects.",
    ],
  },
  {
    title: "Backend Development",
    company_name: "Node js, Express js, Mongoose, S3",
    icon: "./backend.png",
    iconBg: "#383E56",
    date: "Dec 2022 - Present",
    points: [
      "Proficient in Node.js for building robust and scalable server-side applications.",
      "Strong command of Express.js for creating RESTful APIs and routing.",
      "Experience in using MongoDB and Mongoose, including the strategic use of indexing, for efficient data modeling, storage, and retrieval.",
      "Strategies for optimizing application performance and scalability.",
      "Integration of AWS S3 for secure and scalable file storage and retrieval",
      "Skillful use of Postman for API testing, validation, and documentation",
      "Familiarity with the Model-View-Controller (MVC) pattern for structured and maintainable code",
      "Application of Clean Architecture principles for modular and testable codebases",
      "Implementation of security measures, including authorization, and authentication mechanisms to protect data.",
      "Expertise in error handling, debugging, and performance optimization.",
    ],
  },
  {
    title: "AWS and other ",
    company_name: "EC2, S3, IAM, DSA",
    icon: "./cloud.png",
    iconBg: "black",
    date: "Jun 2023 - Present",
    points: [
      "Proficiency in managing AWS Elastic Compute Cloud (EC2) instances for scalable computing.",
      "Skillful use of AWS S3 for secure and scalable object storage.",
      "Experience in configuring AWS Identity and Access Management (IAM) for user and resource access control.",
      "Strong understanding of fundamental data structures and algorithms for efficient problem-solving. Knowledge of Big O notation for analyzing algorithmic complexity and performance.",
      "Eager to expand cloud service expertise and contribute to cloud-based solutions.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rajesh proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients success like Rajesh does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rajesh optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Wedding App",
    description:
      "Introducing our Wedding Planner app, designed to bring your dream wedding to life. This user-friendly platform offers all the tools you need for a stress-free and memorable planning experience.",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "Material UI",
        color: "pink-text-gradient",
      },
    ],
    image:
      "weddingapp.png",
    alt: "Wedding-App",
    source_code_link: "https://github.com/Amitmaddheshiya/eventfesto.com-amit",
    live_link: "https://eventfesto-com-amit.vercel.app/",
  },
  {
    name: "Pro Connect Up",
    description:
      "A web application that enables users to find people with the same interest in their career, find a person for freelance work, search for job openings, and locate available jobs based on their current location.",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image:
      "./proConnectup.png",
    alt: "Pro Connect Up",

    source_code_link: "https://github.com/Amitmaddheshiya/admin-panel-reactjs",
    live_link: "https://admin-panel-lilac-theta.vercel.app/",
  },
  {
    name: "My Portfolio",
    description:
      "My portfolio features a collection of projects that reflect my commitment to delivering top-tier web solutions. I take pride in developing user-friendly and efficient applications.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "framer-motion",
        color: "pink-text-gradient",
      },
    ],
    image:
      "portfolio.png",
    alt: "Portfolio",
    source_code_link: "https://github.com/Amitmaddheshiya/MyPortfolio",
    live_link: "https://mern-rajesh-portfolio.web.app/",
  },
  // {
  //   name: "PG Management",
  //   description:
  //     "A comprehensive PG Management platform that allows Admin to manage people who are staying in their PG and provide them with the best possible service.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "scss",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: 'https://rajesh-mern-stack-portfolio-images.s3.ap-south-1.amazonaws.com/assets/portfolio.png',
  //   source_code_link: "https://github.com/Rajeshesh",
  //   live_link: "http://3.82.129.40:8000/",
  // },
];

export {
  navLinks,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  tools,
};
