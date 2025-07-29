
import portfolio from "../assets/projects/portfolio.png";
import property from "../assets/projects/property.png";
import club from "../assets/projects/club.png";
import crud  from "../assets/projects/crud.png";

import socially from "../assets/projects/socially.png";
import budget_app from "../assets/projects/budget_app.png";
import tower_defence from "../assets/projects/Tower_defence.png";

//export const HERO_CONTENT = `I'm a front-end developer that is passionate about creating online applications that are both responsive and easy to use. with a strong foundation in JavaScript, HTML, and CSS as well as practical React experience. I also adore creating efficient and user-friendly internet interfaces, and I'm devoted and adaptable. I've worked with technologies like React, HTML, CSS, and JavaScript for a year now, gaining experience from educational projects. My fascination in front-end programming began as a simple curiosity about how websites are created, and it has grown into a fulfilling professional path where I like always learning new skills and taking on new challenges.`;
export const HERO_CONTENT = `I'm a recent Computer Science graduate from BRAC University with a strong interest in front-end development. I'm passionate about creating responsive and user-friendly web applications. I have a good understanding in JavaScript, HTML, and CSS, along with hands-on experience in React gained through academic projects over the past year. I enjoy building clean and efficient user interfaces and am always eager to learn and grow in this field. My journey into front-end development began with a simple curiosity about how websites are built, which has now evolved into a fulfilling pursuit where I constantly challenge myself and embrace new technologies.
`;

export const ABOUT_TEXT = `I'm a front-end developer that is committed and flexible, and I have a love for making effective and user-friendly online interfaces. I have a year of experience working with technologies like React, HTML, CSS, and JavaScript, which I got from academic projects. My interest in front-end programming started as a curiosity about how websites are made, and it has developed into a rewarding career path where I welcome taking on new challenges and learning new things all the time.`;

export const EXPERIENCES = [
  {
    year: "June 2025 - Present",
    role: "VR Developer Intern",
    company: "Bakoony LTD.",
    description: `VR Developer at Bakoony LTD. specializing in creating immersive virtual reality experiences.`,
    // technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
    technologies: ["Unreal Engine", "C++", "VR Development"],
  },
  {
    year: "January 2024 - January 2025",
    role: "Student Tutor",
    company: "BRAC University.",
    description: `Student Tutor at Department of Mathematics and Natural Sciences (MNS)`,
    // technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
    technologies: ["Teaching"],
    
  },
  
];

export const PROJECTS = [
  {
    title: "Property Management System",
    image: property,
    description:
      "Developed a Property Management System project, serving as a practical implementation of database design. Utilized Django REST API for the backend, ensuring efficient database management, and integrated React for the frontend, enhancing user interaction and experience.",
    technologies: ["HTML", "CSS", "Django","React","Bootstrap", "Mysql"],
    frontendLink: "https://github.com/Sajida-18/471_Frontend",
    backendLink: "https://github.com/ZabirRamiz/471_Backend"
  },
  {
    title: "Club Management system",
    image: club,
    description:
      "Developed a University Club Management system project Using MERN Stack.",
    technologies: ["HTML",  "React", "Express","Node js","Tailwind" ,"Mongo DB"],
    projectLink: "https://github.com/ZabirRamiz/Club-Mangement-System" ,
  },
  {
    title: "Portfolio Website",
    image: portfolio,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind", "Framer Motion"],
    projectLink: "https://github.com/Sajida-18/React-Portfolio-Sajida" ,
  },
  {
    title: "Daily Budget Calculation",
    image: budget_app,
    description:
      "A full-stack budget management web application built with React, Express.js, and MySQL (via XAMPP). Users can: Set a budget, Add expense items (name, price, quantity), View total spent and remaining budget, Track purchase history (Expense Summary).",
    technologies: ["React","Express","Node js","MySQL", "Tailwind","XAMPP"],
    projectLink: "https://github.com/Sajida-18/Daily-Budget-Calculation-App" ,
  },
  {
    title: "Basic CRUD",
    image: crud,
    description:
      "Basic CRUD project using MERN stack.",
    technologies: ["HTML",  "React", "Express","Node js","Tailwind" ,"Mongo DB"],
    projectLink: "https://github.com/Sajida-18/BASIC-CRUD-",
  },
  {
    title: "Tower Defence Game",
    image: tower_defence,
    description:
      "Computer graphics project implemented with midpoint line and circle drawing algo using python.",
    technologies: ["Python"],
    projectLink: "https://github.com/Sajida-18/Tower_Defence-CSE423_project" ,
  },
  {
    title: "Simple landing page",
    image: socially,
    description:
      "A social media-themed landing page built with HTML and CSS",
    technologies: ["HTML", "CSS"],
    projectLink: "https://github.com/Sajida-18/Simple-Website-" ,
  },
  // {
  //   title: "Blogging Platform",
  //   image: project4,
  //   description:
  //     "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
  //   technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  // },
];

export const CONTACT = {
  // address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "Contact: 01971132942",
  email: "Email: sajda.rifat99@gmail.com",
};