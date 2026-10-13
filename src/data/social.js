import { FaInstagram, FaLinkedin, FaSpotify, FaGithub } from "react-icons/fa";
import { SiKofi } from "react-icons/si";

/**
 * Ko-fi is deliberately not in this list. As a fifth icon it looked like
 * another profile to follow, and nobody would read it as a way to support the
 * work — so the footer gives it a label and a button of its own.
 */
export const support = {
  id: "kofi",
  label: "Buy me a coffee on Ko-fi",
  Icon: SiKofi,
  href: "https://ko-fi.com/vanachorn",
};

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
];

export default social;
