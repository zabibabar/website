import { CardProps } from "./components/Card";

type Profile = {
  experience: CardProps[];
  projects: CardProps[];
  skills: CardProps[];
  education: CardProps[];
};

const profile: Profile = {
  experience: [
    {
      title: "Software Engineer",
      subtitle: "SquareTrade, Inc.",
      subtitleLink: "https://www.squaretrade.com/",
      details: [
        "Worked on the website team to streamline the co-branding process for Softbank, Telenor and other merchants.",
        "Refactored the codebase to avoid making new changes for each new merchant added.",
        "Bridged the gap between design and frontend team by being a point of contact for the design team.",
        "Mentored junior developers by teaching Angular concepts, reviewing code, and providing feedback.",
      ],
      location: "Tampa, FL (Remote)",
      duration: "Feb 2022 - Feb 2023",
    },
    {
      title: "Fullstack Software Engineer",
      subtitle: "GreenLight IoT",
      subtitleLink: "https://www.greenlightiot.com/",
      details: [
        "Worked in a small startup to create dashboards for IoT deployments and IoT building management.",
        "Improved the number of requests on app load by 90% by only fetching the data/state when needed and efficiently using NgRx and router guards in Angular.",
        "Created REST API endpoints for different applications using Nestjs, MondoDB, and AWS S3.",
        "Created reusable components for toasts, modals, forms, dialogs to create a consistent design.",
        "Encouraged developers to write smaller, cleaner and reusable code by writing such code. The number of components increased by 3x for the same business logic after refactoring the codebase into a scalable and deterministic folder structure.",
        "Created dashboard designs in Figma and implemented them in Angular.",
        "Integrated linting and testing into CI/CD pipeline to homogenize and test the code before pushing",
      ],
      location: "Tampa, FL (Remote)",
      duration: "Sep 2020 - Feb 2022",
    },
  ],
  projects: [
    {
      title: "FlockPad",
      subtitle: "Demo",
      subtitleLink: "https://events-ui-zabibabar.vercel.app/",
      details: [
        "Designed database diagrams on LucidChart for an event management site.",
        "Created an API using Nestjs and Mongoose (MongoDB).",
        "Secured the application using Auth0 in React, and JWT token validation in API",
        "Implemented the UI in Angular using Material, RxJS, and NgRx.",
        "Technologies Used: MongoDB, Nodejs, Nestjs, React, Redux, Material-UI, Redux-Observables, RxJS",
      ],
    },
    {
      title: "COVID-19 Tracker",
      subtitle: "GitHub",
      subtitleLink: "https://github.com/zabibabar/covid-tracker/",
      details: [
        "Created a MERN web application to graphically and numerically display the time series of coronavirus cases per country",
        "Developed a REST API integrated with MongoDB to fetch JHU's coronavirus data",
        "Technologies Used: MongoDB, Express, React, Node, Redux, Material-UI, Recharts",
      ],
    },
  ],
  skills: [
    {
      title: "Frontend",
      details: [
        "JavaScript",
        "TypeScript",
        "Angular",
        "React",
        "Nextjs",
        "NgRx",
        "RxJS",
        "Redux",
        "HTML",
        "CSS",
        "Sass",
        "Material UI",
      ],
    },
    {
      title: "Backend",
      details: ["Node.js", "Nestjs", "MongoDB", "Mongoose", "SQL"],
    },
    {
      title: "Others",
      details: ["Github Actions", "Figma", "Git", "Kanban", "Scrum"],
    },
  ],
  education: [
    {
      title: "University of South Florida",
      details: [
        "B.S. Computer Science",
        "Minor: Mathematics",
        "Honors College",
        "Summa Cum Laude",
        "GPA: 3.94/4.00",
      ],
      location: "Tampa, Florida",
      duration: "Aug 2016 - Dec 2019",
    },
  ],
};

export default profile;
