// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import jsIcon from "./images/javascript.svg"
import react_icon_black from "./images/react_icon_black.png"
import django_black_logo from "./images/django_black_logo.png"
import python_black from "./images/pyton_black.png"

// Pictures / Personals
import blue from "./images/blue.jpeg"
import iceland from "./images/CD821562-C13F-4FD7-986B-1B4B13AD7CD7_1_105_c.jpeg"
import resume from "./Gabriel Gonzales Resume.pdf"

// Social Icon
import githubIcon from "./images/github.svg"
import linkedinlogo from "./images/linkedinlogo.png"
import lilcv from "./images/resume.svg"

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Gabriel",
  headerTagline: [
    //Line 1 For Header
    "Full Stack Developer",
    //Line 2 For Header
    "& student of the web.",
    //Line 3 For Header
    "Delighted to meet you!",
  ],
  //   Header Paragraph
  headerParagraph:
    "Full Stack Software Developer with a passion for creating interesting, memorable web experiences. Delighted to meet you!",

  //Contact Email
  contactEmail: "gq.gonzales1@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "Zorber", //Project Title - Add Your Project Title Here
      para:
        "Finally, a companion app for the competitive zorbing community! Zorber allows users to organize zorb races– which take place in giant, inflatable spheres– including building out a participant list, adding lap times, and crowning winners for maximum bragging rights. This project was instrumental in my understanding of React hooks and state. Zorber was created with ReactJs, HTML, CSS, Bootstrap, and JSON Server.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:eco%2Cw_700/MTc0NDc5Mjc1MTUwMjg4NTE4/why-zorbing-is-worth-a-try.webp",
      //Project URL - Add Your Project Url Here
      url: "https://zorber-gwsbg.ondigitalocean.app",
      github: "https://github.com/gqgonzales/Zorber",
    },
    {
      title: "Blessipe", //Project Title - Add Your Project Title Here
      para:
        "Relive your favorite culinary memories with Blessipe, the Food + Travel Journal. Create entries, upload photos, and find restaurants nearby that serve something similar! Blessipe was built on the foundations of Django / Python, fleshed out in React, and styled with good ol fashioned CSS.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: iceland,
      //Project URL - Add Your Project Url Here
      // url: "",
      github: "https://github.com/gqgonzales/blessipe-client",
    },
    /*
    If You Want To Add More Project just Copy and Paste This At The End
    ,{
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: '',
        github: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "Before finding software development, I created memorable retail journeys for Apple Store guests. While somewhat gratifying, I wanted to challenge myself and build experiences that would leave even deeper impressions.",
  aboutParaTwo:
    "My background in administration and sales makes me an excellent team player and facilitator. I keep communication and honesty at the forefront of my approach to projects, with the belief that the more dialogue we foster, the more agreeable the outcome.",
  aboutParaThree:
    "I’ve come to equally appreciate the creativity involved in finding solutions to relevant problems, as well as the gratification of a feature coming to life on screen. My aim is to expand my repertoire and learn more languages, work with teams that nurture growth, and help build software that makes a lasting impact.",
  aboutParaFour:
    "Outside of work, I am a fútbol fanatic, crossword connoisseur, and noodle enthusiast. Let's connect over our favorite authors, obscure sports stats, and travel bucket lists.",
  aboutImage: blue,
  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: htmlIcon,
      para: "HTML 5, for basic construction of the web",
    },
    {
      img: jsIcon,
      para: "Javascript, for powering elements that make websites engaging",
    },
    {
      img: cssIcon,
      para:
        "CSS 3, for organizing and executing on design strategies for projects",
    },
    {
      img: react_icon_black,
      para:
        "ReactJS, for rapid creation of functioning, fleshed-out applications",
    },
    {
      img: python_black,
      para: "Python, for simple and efficient means to structure data",
    },
    {
      img: django_black_logo,
      para: "Django, for even faster querying and orginization within Python",
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "Heading",
  promotionPara:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Let's build wonderful things together",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/gqgonzales" },
    // {
    //   img: codepenIcon,
    //   url: "https://www.codepen.com/",
    // },
    {
      img: linkedinlogo,
      url: "https://www.linkedin.com/in/gabriel-gonzales-webdev/",
    },
    {
      img: lilcv,
      url: resume,
    },
  ],

  // End Contact Section ---------------
}
