import "./Main.css";
import HeroSection from "./hero/Hero";
import JoshWithGuitar from "../assets/josh-with-guitar.jpg";

import Topic from "./topic/Topic";
import SelectableUnderline from "../components/functional/Selectable-underline-button";
import { ReactComponent as Acorn } from "../assets/acorn.svg";

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
      <TopicSection
        id="music"
        child={
          <Topic
            Icon={Acorn}
            image={JoshWithGuitar}
            title={"MUSIC"}
            description={
              "My first and longest lasting passion! Music has been a great way for me to express myself through writing and performing. Being on stage and sharing my music is always an uplifting experience but at the heart of it all, I write for myself. Most of the time its me and my guitar, but I always enjoy playing with friends."
            }
          />
        }
      />
      <TopicSection
        id="coding"
        child={
          <Topic
            Icon={Acorn}
            title={"CODING"}
            description={
              "The cross section between computer science and art. As someone who loves both creating, and solving sudoku puzzles, coding scratches both of these itches. I'm primarily a front end developer with some experience in backend. I enjoy writing clean, readable and maintainable code, while using the MVVM pattern to separate the business logic, models, and the views. Languages and frameworks I’ve used professionally are Flutter, Dart, React, Javascript."
            }
          />
        }
      />
      <TopicSection
        id="design"
        child={
          <Topic
            Icon={Acorn}
            title={"DESIGN"}
            description={
              "I love working with my hands, whether it be, drawing, painting, analog, digital, building . restoring, etc. This topic is pretty broad so I'm going to be dumping a hodgepodge of my interest in this link. I’ll keep the professional pieces at the top though ;)"
            }
          />
        }
      />
    </header>
  );
}

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

function TopicSection({ id, child }) {
  return (
    <div id={id} className="Topic-section">
      {child}
    </div>
  );
}

export default Main;
