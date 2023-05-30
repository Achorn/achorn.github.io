import "./Hero.css";

function HeroSection({ description, image, bottomIcon }) {
  return (
    <div id="hero" className="Hero-section">
      <TitleWithLine description={description} />
      <div className="Image-container">
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
      {/* {icon} */}
      <Icon className="Icon-svg" />
    </div>
  );
}

export default HeroSection;
