import React from "react";
import "./Music.css";
import Album from "./components/Album";
import musicImage from "../../assets/josh-with-guitar.jpg";
import HeroSection from "../main/hero/Hero";
import { ReactComponent as GuitarSvg } from "../../assets/guitar-icon.svg";

const Music = () => {
  let album2 = {
    vinyl: require("../../assets/img/albums/redVinyl.png"),
    cover: require("../../assets/img/albums/tourguide.jpg"),
  };
  let album1 = {
    vinyl: require("../../assets/img/albums/vinyl.png"),
    cover: require("../../assets/img/albums/fallingDown.png"),
  };
  let album3 = {
    vinyl: require("../../assets/img/albums/vinyl.png"),
    cover: require("../../assets/img/albums/top.jpeg"),
  };
  return (
    <div className="Music-page">
      <HeroSection
        description={"music"}
        image={musicImage}
        bottomIcon={GuitarSvg}
      />
      <div className="Album-section">
        <Album vinyl={album2.vinyl} cover={album2.cover} />
        <Album vinyl={album1.vinyl} cover={album1.cover} />
        <Album vinyl={album3.vinyl} cover={album3.cover} />
      </div>
    </div>
  );
};

export default Music;
