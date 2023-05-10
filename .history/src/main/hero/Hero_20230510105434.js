import selfie from "../assets/selfie.jpg";

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

export default HeroSection;
