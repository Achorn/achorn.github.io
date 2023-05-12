import selfie from "../../assets/selfie.jpg";
import { ReactComponent as AcornMedleySvg } from "../../assets/acorn-medley.svg";
import "./Hero.css";
function HeroSection() {
  return (
    <div id="hero" className="Hero-section">
      <TitleWithLine />
      <div className="Image-container">
        <img src={selfie} className="Hero-image" alt="logo" />
      </div>
      <BottomIconContainer />
    </div>
  );
}

function TitleWithLine() {
  return (
    <div className="TitleWithLine">
      <h1 id="title">JOSHUA ACHORN</h1>
      <div class="vl"></div>
      <h2 id="description">music - coding - art</h2>
    </div>
  );
}
function BottomIconContainer() {
  return (
    <div className="Bottom-icon-container">
      <AcornMedleySvg className="Acorn-medley-svg" />
    </div>
  );
}

export default HeroSection;
