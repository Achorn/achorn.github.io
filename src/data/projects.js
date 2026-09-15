import ballPhysicsRacerImg from "../assets/img/projectImg/ball-physics-racer.png";
import brikBrekImg from "../assets/img/projectImg/brik-brek.jpg";
import sfQuizImg from "../assets/img/sf-guessing-image.png";
import spaceShipImg from "../assets/img/projectImg/space_game.jpg";
import toadImg from "../assets/img/projectImg/toad.jpg";

/**
 * The single source of truth for everything shown on /projects and the
 * featured strip on the home page.
 *
 * Fields:
 *   id          stable slug, used as the React key
 *   featured    surfaced on the home page as well as /projects
 *   tech        stack chips, lowercase, in the order they should read
 *   links       omit a link entirely rather than pointing it at null
 *   image       omit for projects with no screenshot yet
 */
const projects = [
  {
    id: "fallow-reader",
    title: "Fallow Reader",
    year: "2026",
    tech: ["react native", "expo", "typescript", "sqlite"],
    description:
      "A local-first reading app for articles and books that works fully with the network off. Everything a reader owns lives in a SQLite database on the device — an account is optional and buys sync and social, never access, so there is no sign-in gate anywhere in the app.",
    links: {},
    privateRepo: true,
  },
  {
    id: "fallow-watcher",
    title: "Fallow Watcher",
    year: "2026",
    tech: [],
    description: "",
    links: {},
    privateRepo: true,
  },
  {
    id: "second-screen",
    title: "Second Screen",
    year: "2026",
    tech: ["swift", "webrtc", "macos"],
    description:
      "Turns an iMac into a second display for a MacBook Air with far less delay than AirPlay — 28.5 ms measured from a frame being composed on the Air to being painted on the iMac. Open the app, open the address it shows on the other machine, and that is the whole setup.",
    links: {},
    privateRepo: true,
  },
  {
    id: "ball-physics-racer",
    title: "Ball Physics Racer",
    year: "2025",
    featured: true,
    tech: ["javascript", "three.js", "react"],
    description:
      "A 3D ball-rolling racing game built while following Bruno Simon's Three.js Journey course. Includes physics and full game mechanics.",
    image: ballPhysicsRacerImg,
    links: {
      live: "https://66-create-a-game-with-r3f-five.vercel.app/",
      github: "https://github.com/Achorn/Ball-physics-racer",
    },
  },
  {
    id: "my-little-spaceship",
    title: "My Little Spaceship",
    year: "2025",
    featured: true,
    tech: ["javascript", "three.js"],
    description:
      "A web-based game built from scratch, applying what I learned from Three.js lessons and game pattern books to write a custom object-oriented game engine.",
    image: spaceShipImg,
    links: {
      live: "https://space-ship-game-delta.vercel.app/",
      github: "https://github.com/Achorn/space-ship-game",
    },
  },
  {
    id: "brik-brek",
    title: "Brik Brek",
    year: "2025",
    featured: true,
    tech: ["javascript", "html", "css", "canvas"],
    description:
      "A classic brick breaker — a small project for working through game design patterns and the math behind them without following a step-by-step tutorial.",
    image: brikBrekImg,
    links: {
      live: "https://brick-brek.vercel.app/",
      github: "https://github.com/Achorn/brik-brek",
    },
  },
  {
    id: "sf-neighborhood-quiz",
    title: "SF Neighborhood Quiz",
    year: "2024",
    tech: ["mongodb", "node", "express", "javascript"],
    description:
      "A fun and easy way to test your knowledge of one of the greatest cities in the US. Includes map selections and review.",
    image: sfQuizImg,
    links: {
      live: "https://joshuaachorn.com/sf-geography-quiz/",
      github: "https://github.com/Achorn/sf-geography-quiz",
    },
  },
  {
    id: "toad-agotchi",
    title: "Toad-agotchi",
    year: "2024",
    tech: ["mongodb", "node", "express", "react", "material ui"],
    description:
      "A pet project where I get to try out new technologies — mostly an excuse to experiment with CSS animations and SVGs.",
    image: toadImg,
    links: {
      live: "https://joshuaachorn.com/toad-app/#/",
      github: "https://github.com/Achorn/toad-app",
    },
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export default projects;
