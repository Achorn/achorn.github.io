import fallowIcon from "../assets/img/icons/fallow.webp";
import secondScreenIcon from "../assets/img/icons/second-screen.webp";
import fallowReaderImg from "../assets/img/projectImg/fallow-reader.webp";
import fallowWatcherImg from "../assets/img/projectImg/fallow-watcher.webp";
import secondScreenImg from "../assets/img/projectImg/second-screen.webp";
import ballPhysicsRacerImg from "../assets/img/projectImg/ball-physics-racer.webp";
import brikBrekImg from "../assets/img/projectImg/brik-brek.webp";
import sfQuizImg from "../assets/img/sf-guessing-image.webp";
import spaceShipImg from "../assets/img/projectImg/space_game.webp";
import toadImg from "../assets/img/projectImg/toad.webp";

/**
 * The single source of truth for everything shown on /projects and the
 * featured strip on the home page.
 *
 * Fields:
 *   id          stable slug, used as the React key
 *   featured    surfaced on the home page as well as /projects
 *   hidden      kept in this file but rendered nowhere — for work that is
 *               not ready to show, without losing the entry
 *   tech        stack chips, lowercase, in the order they should read
 *   links       omit a link entirely rather than pointing it at null
 *   image       omit for projects with no screenshot yet
 *   icon        the app's own icon, shown beside the title
 *   illustrated drawn artwork rather than a screenshot. It carries its own
 *               background, so it is shown without a plate behind it and does
 *               not change between light and dark.
 */
const allProjects = [
  {
    id: "fallow-reader",
    // Held back until there are real screenshots to replace the illustration.
    hidden: true,
    title: "Fallow Reader",
    year: "2026",
    tech: ["react native", "expo", "typescript", "sqlite"],
    description:
      "A local-first reading app for articles and books — highlights, bookmarks, a dictionary, read-aloud and seven reading themes, with public-domain books built in and your own epubs welcome. Everything lives in a SQLite database on the device, and an account buys sync and the social half rather than access, so it is never a gate in front of your own library. No telemetry, no streaks, no unread badge.",
    icon: fallowIcon,
    image: fallowReaderImg,
    illustrated: true,
    links: {},
    privateRepo: true,
  },
  {
    id: "fallow-watcher",
    // Held back until there are real screenshots to replace the illustration.
    hidden: true,
    title: "Fallow Watcher",
    year: "2026",
    tech: ["typescript", "react", "youtube iframe api"],
    description:
      "The video half of Fallow. A saved video opens into its own page instead of a feed: played through the narrowest embed YouTube offers, paused before the end screen so the up-next grid never draws, and resumed where you left it. Marks made on the phone are places you can press here.",
    icon: fallowIcon,
    image: fallowWatcherImg,
    illustrated: true,
    links: {},
    privateRepo: true,
  },
  {
    id: "second-screen",
    // Held back until there are real screenshots to replace the illustration.
    hidden: true,
    title: "Second Screen",
    year: "2026",
    tech: ["swift", "videotoolbox", "webcodecs", "websockets"],
    description:
      "Turns an iMac into a second display for a MacBook Air with far less delay than AirPlay — 28.5 ms measured from a frame being composed on the Air to being painted on the iMac. Frames are encoded with VideoToolbox, pushed over a WebSocket and decoded with WebCodecs, so the receiver is any modern browser with nothing installed.",
    icon: secondScreenIcon,
    image: secondScreenImg,
    illustrated: true,
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
    hidden: true,
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

/** Everything not explicitly hidden, newest first. */
const projects = allProjects.filter((project) => !project.hidden);

export const featuredProjects = projects.filter((project) => project.featured);

export default projects;
