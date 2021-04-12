import emoji from "react-easy-emoji";

export const greetings = {
  name: "Fakhreddine_Messaoudi",
  title: "Hi all, I'm Fakhreddine Messaoudi",
  description:
    "Hello world! I am Fakhreddine Messaoudi from Tunisia and I am currently Graduated as a Full stack JS developer from RBK, a Coding RebootKamp powered by Hack Reactor. I create content in design and development using different libraries and frameworks such as React, Vue.js, Node.js, Nest.js, etc.I have a background in Civil Engineering so I enjoy working with Autocad and Autodesk Robot. When I am not developing, you can find me learning things on YouTube, writing articles .., watching series. But most of my days are spent working on projects",
  resumeLink:
    "https://www.linkedin.com/in/97Fakhreddine/detail/overlay-view/urn:li:fsd_profileTreasuryMedia:(ACoAACz1L2MBrjZ0PpSsnrw7MiDcBZ-hwMtGU50,1635453773709)/",
};

export const openSource = {
  githubUserName: "97Fakhreddine",
};

export const contact = {};

export const socialLinks = {
  facebook: "https://www.facebook.com/Fakhri.Shaarawy/",
  instagram: "https://www.instagram.com/fakhreddine_messaoudi/",
  github: "https://github.com/97Fakhreddine",
  linkedin: "https://www.linkedin.com/in/97Fakhreddine/",
};

export const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop  interactive Front end / User Interfaces for your web  applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA )"),
    emoji(
      "⚡ Integration of third party services such as Mysql/ MongoDB / Digital Ocean/ heruko"
    ),
  ],

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "vscode-icons:file-type-html",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "vscode-icons:file-type-css",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "logos:javascript",
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "logos:typescript-icon",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "vscode-icons:file-type-reactjs",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "logos:nodejs-icon",
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "vscode-icons:file-type-npm",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "vscode-icons:file-type-sql",
    },
    {
      skillName: "mongoDB",
      fontAwesomeClassname: "vscode-icons:file-type-mongo",
    },
    {
      skillName: "NestJs",
      fontAwesomeClassname: "logos:nestjs",
    },
    {
      skillName: "git",
      fontAwesomeClassname: "logos:git-icon",
    },
    {
      skillName: "swagger",
      fontAwesomeClassname: "logos:swagger",
    },
    {
      skillName: "bootstrap",
      fontAwesomeClassname: "logos:bootstrap",
    },
  ],
};

export const SkillBars = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "50", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "50",
  },
  {
    Stack: "Programming",
    progressPercentage: "60",
  },
];

export const educationInfo = [
  {
    schoolName: "RBK Rebootkamp",
    subHeader: "Full Stack JS Developer",
    duration: "5 Months",
    desc: "Rebootkamp powered by HACK REACTOR",
    descBullets: [
      "Fundamental of Javascript",
      "Frameworks, Libraries, Agile Methodology",
    ],
  },
  {
    schoolName: "Higher Insitute of Technological studies Tozeur",
    subHeader: "Civil engineering Technician",
    duration: "September 2017 - jully 2020",
    // desc: "",
    // descBullets: [""],
  },
];

export const experience = [
  {
    role: "civil engineering technician",
    company: "Hajjar BECHIR",
    date: "02/2020  04/2020",
    desc:
      "Complete study of the BERNING project of a factory for the production and marketing of jeans buttons",
  },
  {
    role: "Civil engineering Technician",
    company: "Hajjar BECHIR",
    // companylogo: "",
    date: "11/01/2020  02/2020",
    desc:
      "Quantity survey, Price study, Foundations, Materials, Adaptability Structural calculations, Planning, Resistance of Materials, Draw up formwork plans, draw up plans Architectures, drawing",
  },
  {
    role:
      "Introductory internship in laboratory service, industrial concrete company glouglou “ S.O.B.I.G “, M’saken",
    company: "Gloulou",
    date: "08/01/2018  03/02/2018",
    desc:
      "Planning, Resistance of Materials, Draw up formwork plans, draw up plans",
  },
];

export const projects = [
  {
    name: "Eventiny Tn",
    desc: `Platform that allows users to participate in events, to be upgraded to
      an event planner and to achieve online payment.
      • Tasks: Social login with google, login with JWT Athentication,
      comment’s section, Landing page, Full part of Admin side, Event
      history, list of events.
      • Technologies: Scrum methodology, Vue3, Sementic ui, Axios,
      Bootstrap, cloudinary, NestJs, TypeOrm, NodeMailer, Express.js,
      JWT, google-OAuth-Passport, Passport.js, bcrypt.js, google-map API,
      konnect API, Mysql, Digital oceans, Git Workflow`,
  },
  {
    name: "Catwalk",
    desc: `Team Projec
      • Scrum Master
      • Product detail page of Amazon
      • Allows users to see the details of the product, overview service,
      related product service, Questions and answers service, Rating and
      reviews service.
      • Tasks: Created the Questions and Answers service
      • Technologies:Agile methodology, Service Oriented Architecture
      React, Redux, Hooks, Sementic ui, Axios, Bootstrap, cloudinary,
      Node.js, Express, Proxy, HACK REACTOR API, Digital oceans, Git
      Workflow`,
  },
  {
    name: "RBK Blogs",
    desc: `Team Project
    • Scrum Master
    • Platform that allows student to post and share their blogs.
    • Tasks: feed of blogs, profiles, JWT Athentication.
    • Technologies: React, Sementic ui, Axios, Bootstrap, cloudinary,
    Node.js, Express,JWT Auth, Git Workflow.`,
  },
];
