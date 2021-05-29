// Change website animations
const animation = {
  // make it false to switch off fade-up animation
  animate: true,
  // animation playing duration
  duration: 750,
  // if false, animation plays everytime element comes on screen
  once: true,
};
// Change your display name on tha landing display
const header = {
  name: "Saksham Srivastava",
};
const background = {
  // Options: Snow or Particle
  type: "Snow",
};
// Write a para about yourself here
// To update your image, go to './styles/images.css'
const section2title = "About Me";
const about = {
  paragraph:
    "A 21 years engineer student who loves to learn new skills and grow. Competetive Coding | Development | Management",
};
// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma
const skillsBar = [
  {
    name: "HTML5",
    faClass: "fab fa-html5",
  },
  {
    name: "CSS3",
    faClass: "fab fa-css3",
  },
  {
    name: "Javascript",
    faClass: "fab fa-js",
  },
  {
    name: "Node",
    faClass: "fab fa-node",
  },
  {
    name: "Python",
    faClass: "fab fa-python",
  },
  {
    name: "Java",
    faClass: "fab fa-java",
  },
  {
    name: "Database",
    faClass: "fas fa-database",
  },
  {
    name: "AWS",
    faClass: "fab fa-aws",
  },
  {
    name: "NPM",
    faClass: "fab fa-npm",
  },
  {
    name: "Linux",
    faClass: "fab fa-linux",
  },
];
// Edit your projects, its name, your skills used to make it, and the url.
// You can omit freely anything if you dont have it
// To Add a Project, copy any one below and paste it after the last comma and increment the id's project number
const section3Title = "My Projects";
const projects = [
  {
    // Add image in './styles/images.css' in #project1
    id: "project1",
    name: "Covid Tracker",
    skills: ["HTML, CSS, REACT"],
    url: "covid.s-loop.me",
  },
  {
    // Add image in './styles/images.css' in #project2
    id: "project2",
    name: "Blog Website",
    skills: ["HTML, CSS, NODE, MONGODB, EJS"],
    url: "https://github.com/saksham02112000/blogwebsite",
  },
  {
    // Add image in './styles/images.css' in #project3
    id: "project3",
    name: "Human Face Detection Model",
    skills: ["AI ,ML, Tensorflow, OpenCV, MatplotLib"],
    url: "https://github.com/saksham02112000/Humanfacedetection",
  },
  {
    // Add image in './styles/images.css' in #project4
    id: "project4",
    name: "Clone of Google Keep",
    skills: ["HTML, CSS, REACTJS"],
    url: "https://github.com/saksham02112000/keeperapp",
  },
];
// Edit your Miscellaneous Activities, its name and the url.
// You can omit freely anything if you dont have it
// To Add a Activity, copy any one below and paste it after the last comma and increment the id's Miscellaneous number

// Contact form text, and Jotforms link
// To get your own jotform link, go to https://www.jotform.com/
// If you hacve the link already, paste it in the contactUrl below
const section5Title = "Get in Touch";
const contact = {
  pitch:
    "Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you. Simply fill the from and send me an email.",
  copyright: "Saksham Srivastava",
  contactUrl: "s-loop.me",
};
// Paste your respective social media links. You can omit any if you dont have it
// Upload your resume in your drive, get the shaareable link and paste it in the resume section
const social = {
  github: "https://github.com/saksham02112000",
  facebook: "https://www.facebook.com/saksham.srivastava.583",
  linkedin: "https://www.linkedin.com/in/saksham-srivastava-5aa12b185/",
  instagram: "https://www.instagram.com/saksham.22/",
  resume:
    "https://www.canva.com/design/DAEfhPfVXQI/vVI7gbdJl839SHvU6Zuv6w/view?utm_content=DAEfhPfVXQI&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton",
};
// Dont change anything here
export {
  animation,
  header,
  background,
  about,
  skillsBar,
  projects,
  contact,
  social,
  section2title,
  section3Title,
  section5Title,
};
