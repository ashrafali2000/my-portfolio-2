import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
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
    id: "projects",
    title: "Projects",
  },
  {
    id: "testimonial",
    title: "Testimonial",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front-End Web Dev",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Microsoft Office Expert",
    icon: backend,
  },
  {
    title: "Graphic Designer",
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
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Microsoft",
    icon: shopify,
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Web Development Course",
    company_name: "Saylani Mass IT Training",
    icon: meta,
    iconBg: "#383E56",
    date: "December 2022 - September 2023",
    points: [
      "Learned about basic technologies of Web development",
      "Studied HTML CSS and JS.",
      "Also mentored students of my Batch in JS and HTML.",
      "Developed Blogging Website as Final Project using HTML CSS JS and Firebase.",
    ],
  },
  {
    title: "React Native Development Course",
    company_name: "SMIT",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "September 2023 - December 2023",
    points: [
      "Learned about React native",
      "Studied about development of Native Applications",
      "Developed an Attendance application using React Native as Final Project",
    ],
  },
  {
    title: "Microsoft Office Course",
    company_name: "SMIT",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jun 2022 - September 2022",
    points: [
      "Learned about Microsoft Office",
      "Studeied Microsoft Word Microsoft Excel and Microsoft PowerPoint",
      "Acheive 1st rank in the course and got promoted to Advanced Course",
    ],
  },
  {
    title: "Full stack Development Course",
    company_name: "Saylani mass IT Training",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "December 2022 - Present",
    points: [
      "Learned technologies such as HTML CSS JS ReactJS NextJS and NodeJs",
      "Made projects on MERN Stack 'MongoDb' 'ExpressJS' 'ReactJS' 'NodeJS'",
      "Practiced mordern frontend and Backend Technologies",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but he proved me wrong.",
    name: "Asma Naseer",
    designation: "Head-Mistress",
    company: "ETNS",
    image:
      "https://scontent.fkhi8-1.fna.fbcdn.net/v/t39.30808-1/402652076_891806459220624_8698676722349082204_n.jpg?stp=dst-jpg_p160x160&_nc_cat=107&ccb=1-7&_nc_sid=5740b7&_nc_ohc=nyoIUR-gEG8AX9RLTuH&_nc_ht=scontent.fkhi8-1.fna&oh=00_AfBP_MmXJ4ftmuCCwXV-AT7oSoCkkdATBNOhDBE7IStuTg&oe=65C39679",
  },
  {
    testimonial:
      "You are such a great developer I have ever met. You have all qualities and skills that a developer can have !",
    name: "Anas Asif",
    designation: "Founder",
    company: "Neon Genius",
    image: "https://wow360.pk/wp-content/uploads/2023/09/Anas-Asif.jpg",
  },
  {
    testimonial:
      "His brilliance inspires. Working with him was delightful, ensuring a successful future in tech.",
    name: "Abdul Qadir Azam",
    designation: "Founder",
    company: "Thread verve",
    image: "https://avatars.githubusercontent.com/u/152429961?v=4",
  },
];

const projects = [
  {
    name: "Blogging Website",
    description:
      "This website is made using HTML CSS JS and have functionalities of creating user, posting a blog and editing or deleting your own post",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "JS",
        color: "pink-text-gradient",
      },
      {
        name: "Firebase",
        color: "blue-text-gradient",
      },
    ],
    image: carrent,
    link: "https://bloggup-areeba.netlify.app",
    source_code_link: "https://github.com/AzaanUllah-Khan/BloggUp",
  },
  {
    name: "Ecommerce Website",
    description:
      "This website is a clone of an Ecommerce website Symbios. It made using technologies of HTML CSS JS and firebase as a backend",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JS",
        color: "pink-text-gradient",
      },
      {
        name: "Firebase",
        color: "blue-text-gradient",
      },
    ],
    image: jobit,
    link: "https://ecommerce-areeba.netlify.app",
    source_code_link: "https://github.com/AzaanUllah-Khan/Ecommerce-Website",
  },
  {
    name: "Social Media Website",
    description:
      "This Website is a clone of Twitter and uses Firebase as a back-end. It has functionalities of login signup posting and reading",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JS",
        color: "pink-text-gradient",
      },
      {
        name: "Firebase",
        color: "blue-text-gradient",
      },
    ],
    image: tripguide,
    link: "https://twitter-areeba.netlify.app",
    source_code_link: "https://github.com/AzaanUllah-Khan/Twitter-Clone",
  },
];

export { services, technologies, experiences, testimonials, projects };
