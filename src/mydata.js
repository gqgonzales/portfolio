// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import jsIcon from "./images/javascript.svg"
import react_icon_black from "./images/react_icon_black.png"
import django_black_logo from "./images/django_black_logo.png"
import python_black from "./images/pyton_black.png"

// Pictures / Personals
import blue from "./images/blue.jpeg"
import iceland from "./images/3B37E072-4783-498A-9C56-5874393C8A64_1_105_c.jpeg"
import squared from "./images/CD821562-C13F-4FD7-986B-1B4B13AD7CD7_1_105_c.jpeg"
import resume from "./Gabriel-Gonzales-NSS-Technical-Resume-V3.pdf"

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
    "Writing the next chapter",
    //Line 2 For Header
    "of the world wide web.",
    //Line 3 For Header
    "Let's go!",
  ],
  //   Header Paragraph
  headerParagraph:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",

  //Contact Email
  contactEmail: "gq.gonzales1@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "Zorber", //Project Title - Add Your Project Title Here
      para:
        "Finally, a companion app for the competitive zorbing community! Zorber allows users to organize zorb races– which take place in giant, inflatable spheres– including building out a participant list, adding lap times, and leaving comments on past events. Zorber was created with ReactJs, HTML, CSS, Bootstrap, and JSON Server.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:eco%2Cw_700/MTc0NDc5Mjc1MTUwMjg4NTE4/why-zorbing-is-worth-a-try.webp",
      //Project URL - Add Your Project Url Here
      url: "https://zorber.herokuapp.com/",
      github: "https://github.com/gqgonzales/Zorber",
    },
    {
      title: "Blessipe", //Project Title - Add Your Project Title Here
      para:
        "Relive your favorite culinary memories with Blessipe, the Food + Travel Journal. Create entries, upload photos, and find restaurants nearby that serve soemthing similar! Blessipe was built on the foundations of Django / Python, fleshed out in React, and styled with good ol fashioned CSS.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: squared,
      //Project URL - Add Your Project Url Here
      url: "",
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
    "Before finding software development, I created memorable retail experiences for Apple Store guests. While somewhat gratifying, I wanted to challenge myself and build things that would leave even deeper impressions.",
  aboutParaTwo:
    "In learning to code, I've come to appreciate the creativity involved in finding solutions to relevant problems. My aim is to expand my repertoire and learn more languages, work on products that enrich lives, and build software that lasts. I'm learning to write the next chapter of the web and I hope you will join me on my journey!",
  // aboutParaThree: "Testing",
  aboutImage: blue,
  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: htmlIcon,
      para: "The building block of the web. HTML 5.",
    },
    {
      img: cssIcon,
      para: "Perenially in style. CSS 3.",
    },
    {
      img: jsIcon,
      para: "My first lanaguage.",
    },
    {
      img: react_icon_black,
      para: "The fastest growing Javascript framework. React JS.",
    },
    {
      img: python_black,
      para: "Useful for building databases and querying data effectively.",
    },
    {
      img: django_black_logo,
      para: "Framework for even faster querying in Python.",
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "Heading",
  promotionPara:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Let's build beautiful things together",
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
