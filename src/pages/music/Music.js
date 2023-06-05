import React from "react";
import "./Music.css";
import Album from "./components/Album";
const Music = () => {
  let album2 = {
    vinyl: require("../../assets/img/albums/redVinyl.png"),
    cover: require("../../assets/img/albums/tourguide.jpg"),
  };
  return (
    <div className="Music-page">
      music page
      <Album vinyl={album2.vinyl} cover={album2.cover} />
    </div>
  );
};

export default Music;
