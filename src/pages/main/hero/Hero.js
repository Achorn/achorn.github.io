import { useEffect, useRef } from "react";
import "./Hero.css";

function HeroSection({ description, image, bottomIcon }) {
  var img = new Image();
  img.onload = function () {};
  img.src = image;
  const pictureRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
    observer.observe(pictureRef.current);
  }, []);
  return (
    <div id="hero" className="Hero-section">
      <TitleWithLine description={description} />
      <div ref={pictureRef} className="Image-container hidden">
        <img src={image} className="Hero-image" alt="logo" loading="lazy" />
      </div>
      <BottomIconContainer Icon={bottomIcon} />
    </div>
  );
}

function TitleWithLine({ description }) {
  return (
    <div className="TitleWithLine">
      <h1 id="title">JOSHUA ACHORN</h1>
      <div className="vl"></div>
      <h2 id="description">{description}</h2>
    </div>
  );
}
function BottomIconContainer({ Icon }) {
  return (
    <div className="Bottom-icon-container">
      <Icon className="Icon-svg" />
    </div>
  );
}

export default HeroSection;
