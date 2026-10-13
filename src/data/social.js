import { FaInstagram, FaLinkedin, FaSpotify, FaGithub } from "react-icons/fa";
import { SiKofi } from "react-icons/si";

const social = [
  {
    id: "instagram",
    label: "Instagram",
    Icon: FaInstagram,
    href: "https://www.instagram.com/vanachorn/",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    Icon: FaLinkedin,
    href: "https://www.linkedin.com/in/joshua-achorn/",
  },
  {
    id: "spotify",
    label: "Spotify",
    Icon: FaSpotify,
    href: "https://open.spotify.com/artist/2I7bTFn5ntjzJvDhzHnaWp?si=lhLz0-gJShmtsLvEZRq9RQ",
  },
  {
    id: "github",
    label: "GitHub",
    Icon: FaGithub,
    href: "https://github.com/Achorn",
  },
  {
    id: "kofi",
    label: "Buy me a coffee on Ko-fi",
    Icon: SiKofi,
    href: "https://ko-fi.com/vanachorn",
  },
];

export default social;
