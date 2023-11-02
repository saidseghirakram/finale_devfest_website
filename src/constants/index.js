import {
  Ellipse,
  Ellipse1,
  Ellipse2,
  Ellipse3,
  Ellipse4,
  green,
  blue,
  red,
  yellow,
  akram,
  hamza,
  riad,
  mohamed,
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
    title: "DR.Riyadh Baghdadi’s Talk About Ai in Devfest 2022  03/11/2022",
    URL: "/videos/video.mp4",
  },
  {
    id: "2",
    title: "DR.Riyadh Baghdadi’s Talk About Ai in Devfest 2022  03/11/2022",
    URL: "/videos/video.mp4",
  },
  {
    id: "3",
    title: "DR.Riyadh Baghdadi’s Talk About Ai in Devfest 2022  03/11/2022",
    URL: "/videos/video.mp4",
  },
  {
    id: "4",
    title: "DR.Riyadh Baghdadi’s Talk About Ai in Devfest 2022  03/11/2022",
    URL: "/videos/video.mp4",
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
    Fname: "akram said seghir",
    occupation: "GDG Member & ISWT Student",
  },
];

export const speakers = [
  {
    id: 1,
    name: "Name Speaker",
    title: "Conference Title",
    time: " 09:30 -11:00",
    url: Ellipse,
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
  },
  {
    id: 2,
    name: "Name Speaker",
    title: "Conference Title",
    time: " 09:30 -11:00",
    url: Ellipse1,
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
    name: "Name Speaker",
    title: "Conference Title",
    time: " 09:30 -11:00",
    url: Ellipse2,
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
    name: "Name Speaker",
    title: "Conference Title",
    time: " 09:30 -11:00",
    url: Ellipse3,
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
    name: "Name Speaker",
    title: "Conference Title",
    time: " 09:30 -11:00",
    url: Ellipse4,
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
];

export const TimeMap = [
  {
    name: "first Day",
    classes: [
      {
        id: 1,
        time: "08:00 - 09:00",
        caption: "Check in ",
        src: greenAgenda,
      },
      {
        id: 2,
        time: "09:00 - 09:30",
        caption: "Open Ceremony ",
        src: yellowAgenda,
      },
      {
        id: 3,
        time: "09:30 - 12:00",
        caption: "Deep Learning ",
        src: yellowAgenda,
      },
      {
        id: 4,
        time: "12:00 - 13:30",
        caption: "Break - Lunch",
        src: whiteAgenda,
      },
      {
        id: 5,
        time: "13:30 - 15:00",
        caption: "Dev-Ops",
        src: yellowAgenda,
      },
    ],
  },
  {
    name: "Second Day",
    classes: [
      {
        id: 1,
        time: "08:00 - 09:00",
        caption: "Check in ",
        src: greenAgenda,
      },
      {
        id: 2,
        time: "09:00 - 10:30",
        caption: "Could",
        src: yellowAgenda,
      },
      {
        id: 3,
        time: "10:30 - 12:00",
        caption: "E-Commerce",
        src: yellowAgenda,
      },
      {
        id: 4,
        time: "12:00 - 13:30",
        caption: "Break - Lunch",
        src: whiteAgenda,
      },
      {
        id: 5,
        time: "13:00 - 15:00",
        caption: "Web-Dev",
        src: yellowAgenda,
      },
    ],
  },
  {
    name: "Third Day",
    classes: [
      {
        id: 1,
        time: "08:00 - 09:00",
        caption: "Check in ",
        src: greenAgenda,
      },
      {
        id: 2,
        time: "09:00 - 09:30",
        caption: "Content Creation",
        src: yellowAgenda,
      },
      {
        id: 3,
        time: "09:30 - 12:00",
        caption: "Startups",
        src: yellowAgenda,
      },
      {
        id: 4,
        time: "12:00 - 13:30",
        caption: "Break - Lunch",
        src: whiteAgenda,
      },
      {
        id: 5,
        time: "13:30 - 15:00",
        caption: "AI-Tools",
        src: yellowAgenda,
      },
      {
        id: 6,
        time: "15:00 - 16:00",
        caption: "Close Ceremony",
        src: redAgenda,
      },
    ],
  },
];

export const footer = [
  { id: 1, src: faDiscord },
  { id: 2, src: faBehance },
  { id: 3, src: faFacebook },
  { id: 4, src: faGithub },
];
