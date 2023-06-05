import React from "react";
import "./Music.css";
import Album from "./components/Album";
import musicImage from "../../assets/josh-with-guitar.jpg";
import HeroSection from "../main/hero/Hero";
import { ReactComponent as GuitarSvg } from "../../assets/guitar-icon.svg";

const Music = () => {
  let album1 = {
    vinyl: require("../../assets/img/albums/redVinyl.png"),
    cover: require("../../assets/img/albums/tourguide.jpg"),
    link: "https://open.spotify.com/album/597CokgLwfbNduqCmb5WRD?si=jpjmjznJRDGkkXZsbYjUog",
  };
  let album2 = {
    vinyl: require("../../assets/img/albums/vinyl.png"),
    cover: require("../../assets/img/albums/top.jpeg"),
    link: "https://open.spotify.com/album/0hd6tcy3eXIruVQ1T4mXA0?si=IWtPffkeSDCzNEL2VeZYiw",
  };
  let album3 = {
    vinyl: require("../../assets/img/albums/vinyl.png"),
    cover: require("../../assets/img/albums/fallingDown.png"),
    link: "https://open.spotify.com/album/2lXw9UDPCJFWSD0aHyeYOI?si=zMKUG1apR6OXw-yMRRsxrQ",
  };
  return (
    <div className="Music-page">
      <HeroSection
        description={"music"}
        image={musicImage}
        bottomIcon={GuitarSvg}
      />
      <div className="Album-section">
        <Album vinyl={album1.vinyl} cover={album1.cover} link={album1.link} />
        <Album vinyl={album2.vinyl} cover={album2.cover} link={album2.link} />
        <Album vinyl={album3.vinyl} cover={album3.cover} link={album3.link} />
      </div>
    </div>
  );
};

export default Music;
