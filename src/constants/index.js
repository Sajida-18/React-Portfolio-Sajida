import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import portfolio from "../assets/projects/portfolio.png";
import property from "../assets/projects/property.png";
import club from "../assets/projects/club.png";
import crud  from "../assets/projects/crud.png";
// import project4 from "../assets/projects/project-4.jpg";
import socially from "../assets/projects/socially.png";
import budget_app from "../assets/projects/budget_app.png";
import tower_defence from "../assets/projects/tower_defence.png";

// export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;
//export const HERO_CONTENT = `I'm a front-end developer that is passionate about creating online applications that are both responsive and easy to use. with a strong foundation in JavaScript, HTML, and CSS as well as practical React experience. I also adore creating efficient and user-friendly internet interfaces, and I'm devoted and adaptable. I've worked with technologies like React, HTML, CSS, and JavaScript for a year now, gaining experience from educational projects. My fascination in front-end programming began as a simple curiosity about how websites are created, and it has grown into a fulfilling professional path where I like always learning new skills and taking on new challenges.`;
export const HERO_CONTENT = `I'm a recent Computer Science graduate from BRAC University with a strong interest in front-end development. I'm passionate about creating responsive and user-friendly web applications. I have a good understanding in JavaScript, HTML, and CSS, along with hands-on experience in React gained through academic projects over the past year. I enjoy building clean and efficient user interfaces and am always eager to learn and grow in this field. My journey into front-end development began with a simple curiosity about how websites are built, which has now evolved into a fulfilling pursuit where I constantly challenge myself and embrace new technologies.
`;
// export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;
export const ABOUT_TEXT = `I'm a front-end developer that is committed and flexible, and I have a love for making effective and user-friendly online interfaces. I have a year of experience working with technologies like React, HTML, CSS, and JavaScript, which I got from academic projects. My interest in front-end programming started as a curiosity about how websites are made, and it has developed into a rewarding career path where I welcome taking on new challenges and learning new things all the time.`;

export const EXPERIENCES = [
  {
    year: "2024 - 2025",
    role: "Student Tutor",
    company: "BRAC University.",
    description: `Student Tutor at Department of Mathematics and Natural Sciences (MNS)`,
    // technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
    technologies: ["Teaching"],
    
  },
  // {
  //   year: "2023 - Present",
  //   role: "Senior Full Stack Developer",
  //   company: "Google Inc.",
  //   description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
  //   technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  // },
  // {
  //   year: "2022 - 2023",
  //   role: "Frontend Developer",
  //   company: "Adobe",
  //   description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
  //   technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  // },
  // {
  //   year: "2021 - 2022",
  //   role: "Full Stack Developer",
  //   company: "Facebook",
  //   description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
  //   technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  // },
  // {
  //   year: "2020 - 2021",
  //   role: "Software Engineer",
  //   company: "Paypal",
  //   description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
  //   technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  // },
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
    technologies: ["python"],
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