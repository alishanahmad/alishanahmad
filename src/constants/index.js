import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I'm a Full Stack Developer with expertise in the MERN stack, passionate about creating seamless user experiences and solving real-world problems through technology. Currently pursuing a BS in Computer Science at GCU Lahore, I've completed numerous projects, including social media apps, Doctor Appointment Systems, and more.`;

export const ABOUT_TEXT = `I’m a developer who thrives on solving challenges through web technology. With experience in MERN stack development, I've built projects that range from social platforms to real-world applications. I'm always learning and pushing boundaries to improve both my technical skills and the impact of my work. My vision is to create solutions that leave a lasting impression while working toward my long-term financial goals.`;

export const EXPERIENCE = [
  {
    year: "Apr 2024 -  Jul 2024 (4 mos)",
    role: "Trainee",
    company: "Knowledge Streams - Full-time",
    description: `Developed a Doctor Appointment System and an eCommerce backend while enhancing my skills in full stack development using the MERN stack and PostgreSQL. Gained hands-on experience in building robust applications and managing both frontend and backend operations`,
    technologies: ["mongoDB", "Express", "React.js", "Node.js", "Postgresql"],
  },
  {
    year: "Oct 2022 - Sep 2023  (1 yr)",
    role: "PR Squad Core Team",
    company: "GDSC GCU Lahore - Part-time",
    description: `Led public relations efforts, organizing virtual events via Zoom and Google Meet. Managed communications and outreach through Gmail, enhancing the club's visibility and engagement.`,
    technologies: ["Zoom", "Google Meet", "Gmail"],
  },
  // {
  //   year: "2021 - 2022",
  //   role: "Full Stack Developer",
  //   company: "Facebook",
  //   description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
  //   technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  // },
  {
    year: "Dec 2021 - Oct 2022 (11 mos)",
    role: "Stage Team",
    company: "IEEE GCU Student Branch - Part-time",
    description: `Supported event coordination, managed stage setup, and handled multimedia presentations using PowerPoint. Maintained event data in Excel and documented plans with Word, enhancing my organizational and teamwork skills.`,
    technologies: ["PowerPoint", "Excel", "Word"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "Govt. College University Lahore",
  phoneNo: "+92 3000000000",
  email: "xyz@gmail.com",
};
