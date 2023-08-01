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
        "Worked within a globally distributed scrum team to streamline the co-branding process by using a combination of Strategy and Factory pattern to make the code scalable and to brand new merchants with no extra code changes.",
        "Successfully architected and implemented a comprehensive multilingual system, increasing global accessibility and usability for users across Asia, Europe, and LATAM, while supporting various international date/time formats.",
        "Mentored and helped promote Junior Engineers. Provided guidance in TypeScript and Angular, covering advanced concepts such as RxJS, Dependency Injection, Unit Testing, Modules etc.",
        "Acted as a liaison between the design and engineering teams to set realistic design expectations for both sides.",
      ],
      location: "Tampa, FL (Remote)",
      duration: "Feb 2022 - Present",
    },
    {
      title: "Fullstack Software Engineer",
      subtitle: "GreenLight IoT",
      subtitleLink: "https://www.greenlightiot.com/",
      details: [
        "Single-handedly orchestrated the design and end-to-end implementation of IOT building management dashboard, utilizing Angular, NgRX, Nestjs, MongoDB, Google Maps API and external geolocation API for address verification.",
        "Optimized app performance by 90% via Angular router guards and improved data fetching efficiency using NgRx.",
        "Revamped the codebase responsible for displaying IOT devices on HTML canvas by utilizing decorator and strategy patterns, simplifying the process for adding new device variants, mouse interactions, and animations.",
        "Lead code reviews, and established and enforced standardized coding practices, including adopting the AirBnb Style guide, leveraging Prettier and ESLint. Introduced Figma into the SDLC, promoting a design-first approach.",
        "Demonstrated expertise in RXJS, NGRX, Nestjs, and UI design, emerging as the go-to resource in the team.",
      ],
      location: "Tampa, FL (Remote)",
      duration: "Sep 2020 - Feb 2022",
    },
  ],
  projects: [
    {
      title: "FlockPad",
      subtitle: "Demo",
      subtitleLink: "https://github.com/zabibabar/events/",
      details: [
        "Designed database diagrams on LucidChart for an event management site.",
        "Created an API using Nestjs and Mongoose (MongoDB).",
        "Secured the application using Auth0 in React, and JWT token validation in API.",
        "Implemented the UI in Angular using Material, RxJS, and NgRx.",
        "Technologies Used: MongoDB, Nodejs, Nestjs, React, Redux, Material-UI, Redux-Observables, RxJS.",
      ],
    },
    {
      title: "COVID-19 Tracker",
      subtitle: "GitHub",
      subtitleLink: "https://github.com/zabibabar/covid-tracker/",
      details: [
        "Created a MERN web application to graphically and numerically display the time series of coronavirus cases per country.",
        "Developed a REST API integrated with MongoDB to fetch JHU's coronavirus data.",
        "Technologies Used: MongoDB, Express, React, Node, Redux, Material-UI, Recharts.",
      ],
    },
    {
      title: "Personal Site (This Website)",
      subtitle: "Link",
      subtitleLink: "https://zabibabar.com/",
      details: [
        "I used React, Next.js, and Material UI for this project.",
        "Deployed using Github Action and Github Pages.",
      ],
    },
    {
      title: "Tampa Volunteers",
      subtitle: "Link",
      subtitleLink: "https://tampavolunteers.com/",
      details: [
        "This website is for my Meetup Tampa Volunteers. https://www.meetup.com/tampa-volunteers/.",
        "I used React, Next.js, and Material UI for this project.",
        "Deployed using Github Action and Github Pages.",
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
        "Next.js",
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
      details: [
        "Node.js",
        "Nestjs",
        "MongoDB",
        "Mongoose",
        "SQL",
        "AWS S3",
        "AWS Lambda",
      ],
    },
    {
      title: "Others",
      details: ["Github Actions", "AWS CDK", "Figma", "Git", "Kanban", "Scrum"],
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
      duration: "2016 - 2019",
    },
  ],
};

export default profile;
