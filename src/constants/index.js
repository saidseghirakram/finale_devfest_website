import {
  Ellipse,
  Ellipse1,
  Ellipse2,
  Ellipse3,
  Ellipse4,
  green,
  blue,
  red,
  yellow,taha_Zerrouki,
  akram,riad,mohamed,hamza,nabil ,
  DjallalBouabdallah, AnasYahya, AhmedBachirCherif, RAOUFRAHICHE, MouhTalks, toumi, boula7ya,abd,Boudegna,
  redAgenda,
  greenAgenda,
  whiteAgenda,
  yellowAgenda,
} from "../assets/index";


import { faBehance } from "@fortawesome/free-brands-svg-icons/faBehance";
import { faTiktok } from "@fortawesome/free-brands-svg-icons/faTiktok";
import { faTelegram } from "@fortawesome/free-brands-svg-icons/faTelegram";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faDiscord } from "@fortawesome/free-brands-svg-icons/faDiscord";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";


export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "agenda",
    title: "Agenda",
   },
  {
    id: "speakers",
    title: "Speakers",
  },
];

export const videos = [
  {
    id: "1",
    title: "Dr.Riyadh Baghdadi's talk in Devfest 2022",
    URL: "https://www.youtube.com/embed/AzDU96Pd-Uw?si=g3Lzcb6ZK1_Oi7Nl",
  },

  {
    id: "2",
    title: "Bilel Medjahed's talk in Devfest 2022",
    URL: "https://www.youtube.com/embed/zCiJpPL2vvA?si=O905Gq-fnV3EFEu-",
  },
  {
    id: "3",
    title: "Abdelmajid's Hayi Talk in DevFest 2022",
    URL: "https://www.youtube.com/embed/6Hr0oVTRXtA?si=SGOSWd6ou5cCNOQ0",
  },
  {
    id: "4",
    title: "Devfest 2022 Recap video by GDG Medea 🎊👨‍💻",
    URL: "https://www.youtube.com/embed/KwbIt3XMa1Y?si=K1IQ9NNZQ2FYg_Dw",
  },
];

export const feedBack = [
  {
    id: "1",
    avatar: riad,
    comment:
      "Devfest is a fantastic opportunity for tech enthusiasts to come together, learn, and network with like-minded individuals. It's a celebration of the vibrant and ever-evolving world of technology.",
    Fname: "Riad Baghdadi",
    occupation: "Professor at NYU; Research Affiliate at MIT",
  },
  {
    id: "2",
    avatar: mohamed,
    comment:
      "The energy at Devfest is contagious. The enthusiasm and dedication of the organizers, speakers, and attendees make it a must-attend event for anyone who wants to stay at the forefront of technology.",
    Fname: "Mohamed Ali Akram Zerarka",
    occupation: "Co-fondateur de techfly",
  },

  {
    id: "3",
    avatar: hamza,
    comment:
      "The community aspect of Devfest is what makes it truly special. You get to meet passionate individuals who are enthusiastic about technology, and the connections you make can lead to exciting collaborations and projects.",
    Fname: "Hentabli Hamza Ph.D",
    occupation: "ML and computer-aided drug design Research Scientis",
  },
  {
    id: "4",
    avatar: akram,
    comment:
      "I love attending Devfest every year. It's a hub of knowledge sharing, where you can explore the latest trends, attend workshops, and hear from industry experts. It's a great place to gain insights into emerging technologies.",
    Fname: "Akram said seghir",
    occupation: "GDG Member & ISWT Student",
  },
];

export const speakers = [
     {
    id: 1,
    name: "Dr. Nabil",
    title: "Partner engineer google cloud at Google PhD in computer science",
    time: " 09:30 -11:00",
    url: nabil,
    shape: yellow,
    color: "#FDB705",
    icons: [
      { icon: faBehance, link: " behance" },
      { icon: faTiktok, link: " behance" },
      { icon: faTelegram, link: " behance" },
    ],
    captions: [
      {
        id: 1,
        caption: "Network administrator",
      },
      {
        id: 2,
        caption: "Full-stack developer",
      },
      {
        id: 3,
        caption: "Graphic designer",
      },
      {
        id: 3,
        caption:
          "Master network administration and security at the Ahmed Ben Bella high school in Oran (ex IGMO)AA",
      },
    ],
  } ,  
   {
    id: 2,
    name: "Abderrahime abdellaoui",
    title: "Content creator in business administration and digital marketing ,  Founder of Moustachir",
    time: " 09:30 -11:00",
    url: abd,
    shape: blue,
    color: "#4285F4",
    icons: [
      {
        icon: faBehance,
        link: " https://www.linkedin.com/in/akram-said-seghir-16357225b/",
      },
      { icon: faTiktok, link: " behance" },
      { icon: faTelegram, link: " behance" },
      { icon: faLinkedin, link: " behance" },
    ],
    captions: [
      {
        id: 1,
        caption: "Network administrator",
      },
      {
        id: 2,
        caption: "Full-stack developer",
      },
      {
        id: 3,
        caption: "Graphic designer",
      },
      {
        id: 3,
        caption:
          "Master network administration and security at the Ahmed Ben Bella high school in Oran (ex IGMO)AA",
      },
    ],
  }, 
  {
    id: 3,
    name: "Zineddine Boudegna",
    title: "Cybersecurity Architect ,Graduated from Washington DC institute of Standards end technology",
    time: " 09:30 -11:00",
    url: Boudegna,
    shape: red,
    color: "#BC2121",
    icons: [
      {
        icon: faBehance,
        link: " https://www.linkedin.com/in/akram-said-seghir-16357225b/",
      },
      { icon: faTiktok, link: " behance" },
      { icon: faTelegram, link: " behance" },
      { icon: faLinkedin, link: " behance" },
    ],
    captions: [
      {
        id: 1,
        caption: "Network administrator",
      },
      {
        id: 2,
        caption: "Full-stack developer",
      },
      {
        id: 3,
        caption: "Graphic designer",
      },
      {
        id: 3,
        caption:
          "Master network administration and security at the Ahmed Ben Bella high school in Oran (ex IGMO)AA",
      },
    ],
  },  
  {
    id: 4,
    name: " Anas Yahya",
    title: "Product Designer , UI/UX Designer",
    time: " 09:30 -11:00",
    url: AnasYahya,
    shape: green,
    color: "#2A7706",
    icons: [
      { icon: faBehance, link: " behance" },
      { icon: faDiscord, link: " behance" },
      { icon: faFacebook, link: " behance" },
    ],
    captions: [
      {
        id: 1,
        caption: "Network administrator",
      },
      {
        id: 2,
        caption: "Full-stack developer",
      },
      {
        id: 3,
        caption: "Graphic designer",
      },
      {
        id: 3,
        caption:
          "Master network administration and security at the Ahmed Ben Bella high school in Oran (ex IGMO)AA",
      },
    ],
  },
  {
    id: 5,
    name: "Ahmed Bachir Cherif",
    title: "Expert at UX,UI design & Visual identity, Founder of TicThink",
    time: " 09:30 -11:00",
    url: AhmedBachirCherif,
    shape: yellow,
    color: "#FDB705",
    icons: [
      { icon: faBehance, link: " behance" },
      { icon: faDiscord, link: " behance" },
      { icon: faFacebook, link: " behance" },
    ],
    captions: [
      {
        id: 1,
        caption: "Network administrator",
      },
      {
        id: 2,
        caption: "Full-stack developer",
      },
      {
        id: 3,
        caption: "Graphic designer",
      },
      {
        id: 3,
        caption:
          "Master network administration and security at the Ahmed Ben Bella high school in Oran (ex IGMO)AA",
      },
    ],
  },
  {
    id: 6,
    name: "Raouf Rahiche",
    title: "Google Flutter developer expert, Flutter and desktop app developer",
    time: " 09:30 -11:00",
    url: RAOUFRAHICHE,
    shape: blue,
    color: "#4285F4",
    icons: [
      { icon: faBehance, link: " behance" },
      { icon: faDiscord, link: " behance" },
      { icon: faFacebook, link: " behance" },
    ],
    captions: [
      {
        id: 1,
        caption: "Network administrator",
      },
      {
        id: 2,
        caption: "Full-stack developer",
      },
      {
        id: 3,
        caption: "Graphic designer",
      },
      {
        id: 3,
        caption:
          "Master network administration and security at the Ahmed Ben Bella high school in Oran (ex IGMO)AA",
      },
    ],
  },
  {
    id: 7,
    name: "Mohammed Mouzaoui",
    title: "Developer, Content creator & Founder of Khadmoney",
    time: " 09:30 -11:00",
    url: MouhTalks,
    shape: red,
    color: "#BC2121",
    icons: [
      { icon: faBehance, link: " behance" },
      { icon: faDiscord, link: " behance" },
      { icon: faFacebook, link: " behance" },
    ],
    captions: [
      {
        id: 1,
        caption: "Network administrator",
      },
      {
        id: 2,
        caption: "Full-stack developer",
      },
      {
        id: 3,
        caption: "Graphic designer",
      },
      {
        id: 3,
        caption:
          "Master network administration and security at the Ahmed Ben Bella high school in Oran (ex IGMO)AA",
      },
    ],
  }, 
];

export const TimeMap = [
  {
    name: "first Day",
    classes: [
      {
        id: 1,
        time: "08:00 - 09:30",
        caption: "Check in ",
        src: greenAgenda,
      },
      {
        id: 2,
        time: "09:30 - 10:00",
        caption: "Open Ceremony ",
        src: yellowAgenda,
      },
      {
        id: 3,
        time: "10:00 - 11:30",
        caption: "Speaker 1 ",
        src: yellowAgenda,
      },
      {
        id: 4,
        time: "11:30 - 13:00",
        caption: "Break - Lunch",
        src: whiteAgenda,
      },
      {
        id: 5,
        time: "13:00 - 14:30",
        caption: "Speaker 2",
        src: yellowAgenda,
      },
      {
        id: 6,
        time: "14:30 - 16:00",
        caption: "Speaker 3",
        src: yellowAgenda,
      },
       {
        id: 7,
        time: "16:00 - 16:30",
        caption: "Quiz",
        src: yellowAgenda,
      },
    ],
  },
  {
    name: "Second Day",
    classes: [
      {
        id: 1,
        time: "09:00 - 10:00",
        caption: "Check in ",
        src: greenAgenda,
      },
      {
        id: 2,
        time: "10:00 - 11:30",
        caption: "Speaker 1",
        src: yellowAgenda,
      },
      {
        id: 3,
        time: "11:30 - 13:00",
        caption: "Break - Lunch",
        src: whiteAgenda,
      },
      {
        id: 4,
        time: "13:00 - 14:30",
        caption: "Speaker 2",
        src: yellowAgenda,
      },
       {
        id: 5,
        time: "14:30 - 16:00",
        caption: "Speaker 3",
        src: yellowAgenda,
      },
       {
        id: 6,
        time: "16:00 - 16:30",
        caption: "Quiz",
        src: yellowAgenda,
      },
    ],
  },
  {
    name: "Third Day",
    classes: [
      {
        id: 1,
        time: "09:00 - 10:00",
        caption: "Check in ",
        src: greenAgenda,
      },
      {
        id: 2,
        time: "10:00 - 11:30",
        caption: "Speaker 1",
        src: yellowAgenda,
      },
      {
        id: 3,
        time: "11:30 - 13:00",
        caption: "Break - Lunch",
        src: whiteAgenda,
      },
      {
        id: 4,
        time: "13:00 - 14:30",
        caption: "Speaker 2",
        src: yellowAgenda,
      },
      {
        id: 6,
        time: "14:30 - 16:00",
        caption: "Speaker 3 ",
        src: yellowAgenda,
      },
       {
        id: 6,
        time: "16:00 - 16:30",
        caption: "Closing ceremony",
        src: redAgenda,
      },
    ],
  },
];

export const footer = [
  { id: 1, src: faDiscord , link:"https://discord.gg/7EYys8Zs" },
  { id: 2, src: faLinkedin  , link:"https://www.linkedin.com/company/88971303/admin/feed/posts/" },
  { id: 3, src: faFacebook , link:"https://web.facebook.com/26gdgmedea" },
  { id: 4, src: faInstagram , link:"https://www.instagram.com/gdgmedea/?hl=fr" },
];
