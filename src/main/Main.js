import "./Main.css";
import HeroSection from "./hero/Hero";
import Topic from "./topic/Topic";
import SelectableUnderline from "../components/functional/Selectable-underline-button";
import { useState } from "react";

function Main() {
  const [selectedId, setSelectedId] = useState("home");

  const handleClick = (id) => {
    // handle selection change //visible change to selected button
    const element = document.getElementById(id);
    if (element) {
      setSelectedId(id);
      element.scrollIntoView({ behavior: "smooth" });
    }

    console.log("clicked");
  };

  return (
    <header className="Main-header">
      <HeroSection />
      <NavBar
        handleClick={(value) => handleClick(value)}
        selectedId={selectedId}
      />
      <TopicSection id="music" />
      <TopicSection id="coding" />
      <TopicSection id="design" />
    </header>
  );
}
// var selectedId = "coding";

function NavBar({ handleClick, selectedId }) {
  return (
    <div className="Nav-bar">
      <div className="Nav-bar-container">
        <SelectableUnderline
          title={"home"}
          isSelected={selectedId === "home"}
          handleClick={() => handleClick("hero")}
        />
        <p>-</p>
        <SelectableUnderline
          title={"music"}
          isSelected={selectedId === "music"}
          handleClick={() => handleClick("music")}
        />
        <p>-</p>
        <SelectableUnderline
          title={"coding"}
          isSelected={selectedId === "coding"}
          handleClick={() => handleClick("coding")}
        />
        <p>-</p>
        <SelectableUnderline
          title={"design"}
          isSelected={selectedId === "design"}
          handleClick={() => handleClick("design")}
        />
      </div>
    </div>
  );
}

function TopicSection({ id }) {
  return (
    <div id={id} className="Topic-section">
      <Topic />
    </div>
  );
}

export default Main;
