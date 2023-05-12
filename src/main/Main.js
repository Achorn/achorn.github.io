import "./Main.css";
import HeroSection from "./hero/Hero";
import JoshWithGuitar from "../assets/josh-with-guitar.jpg";

import Topic from "./topic/Topic";
import SelectableUnderline from "../components/functional/Selectable-underline-button";
import { ReactComponent as FlowerIcon } from "../assets/flower-icon.svg";

import { ReactComponent as GuitarIcon } from "../assets/guitar-icon.svg";
import { ReactComponent as KeyboardIcon } from "../assets/keyboard-icon.svg";
// import { useState } from "react";

function Main() {
  // const [selectedId, setSelectedId] = useState("home");

  const handleClick = (id) => {
    // handle selection change //visible change to selected button
    const element = document.getElementById(id);
    if (element) {
      // setSelectedId(id);
      element.scrollIntoView({ behavior: "smooth" });
    }

    console.log("clicked");
  };

  return (
    <header className="Main-header">
      <HeroSection />
      <NavBar handleClick={(value) => handleClick(value)} />
      <TopicSection
        id="music"
        child={
          <Topic
            Icon={<GuitarIcon style={{ height: 90, width: "auto" }} />}
            image={JoshWithGuitar}
            title={"MUSIC"}
            description={
              "My first and longest lasting passion! Music has been a great way for me to express myself through writing and performing. Being on stage and sharing my music is always an uplifting experience but at the heart of it all, I write for myself. Most of the time it’s just me and my guitar, but I always enjoy playing with friends."
            }
          />
        }
      />
      <TopicSection
        id="coding"
        child={
          <Topic
            Icon={<KeyboardIcon style={{ height: 50, width: "auto" }} />}
            title={"CODING"}
            description={
              "The cross section between computer science and art. As someone who loves creating and problem solving, coding scratches both of these itches. I'm primarily a front end developer with some backend experience. I enjoy writing code that’s clean and readable while using the MVVM pattern to separate the business logic, models, and views."
            }
          />
        }
      />
      <TopicSection
        id="art"
        child={
          <Topic
            Icon={<FlowerIcon style={{ height: 120, width: "auto" }} />}
            title={"ART"}
            description={
              "I love working with my hands, whether it be drawing or painting, analog or digital, building or restoring. This topic is pretty broad so I'm going to be dumping a hodgepodge of my interest in this link. I’ll keep the professional pieces at the top though ;)"
            }
          />
        }
      />
    </header>
  );
}

function NavBar({ handleClick }) {
  return (
    <div className="Nav-bar">
      <div className="Nav-bar-container">
        <SelectableUnderline
          title={"home"}
          handleClick={() => handleClick("hero")}
        />
        <p>-</p>
        <SelectableUnderline
          title={"music"}
          handleClick={() => handleClick("music")}
        />
        <p>-</p>
        <SelectableUnderline
          title={"coding"}
          handleClick={() => handleClick("coding")}
        />
        <p>-</p>
        <SelectableUnderline
          title={"art"}
          handleClick={() => handleClick("art")}
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
