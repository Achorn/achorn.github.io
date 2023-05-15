import "./Footer.css";
import { ReactComponent as AcornIcon } from "../../../assets/acorn.svg";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="Footer">
      <hr />
      <div className="Footer-header">WHAT'S LEFT?</div>
      <div className="Social-media-container">
        <SocialButton
          Icon={FaInstagram}
          link={"https://www.instagram.com/vanachorn/"}
        />
        <SocialButton
          Icon={FaLinkedin}
          link={"https://www.linkedin.com/in/joshua-achorn/"}
        />
        <SocialButton
          Icon={FaSpotify}
          link={
            "https://open.spotify.com/artist/2I7bTFn5ntjzJvDhzHnaWp?si=lhLz0-gJShmtsLvEZRq9RQ"
          }
        />
        {/* Instagram - linkedIn - Spotify */}
      </div>
      <AcornIcon className="Footer-logo" />
      <div className="Footer-bottom-text">
        this website was made with | React | JavaScript | All 10 of my fingers
      </div>
    </div>
  );
}

function SocialButton({ Icon, link }) {
  return (
    <div className="Social-media-button">
      <a href={link} target="_blank" rel="noreferrer">
        <Icon />
      </a>
    </div>
  );
}
