import selfie from "../assets/selfie.jpg";
import { ReactComponent as AcornMedleySvg } from "../assets/acorn-medley.svg";

function HeroSection() {
  return (
    <div className="Hero-section">
      <TitleWithLine />
      <div className="Image-container">
        <img src={selfie} className="App-logo" alt="logo" />
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
      <h2 id="description">music - coding - design</h2>
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
