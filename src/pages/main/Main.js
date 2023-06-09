import "./Main.css";
import HeroSection from "./hero/Hero";
import Navbar from "./nav/Navbar";
import Topic from "./topic/Topic";
import { ReactComponent as AcornMedleySvg } from "../../assets/acorn-medley.svg";
import { ReactComponent as FlowerIcon } from "../../assets/flower-icon.svg";
import { ReactComponent as GuitarIcon } from "../../assets/guitar-icon.svg";
import { ReactComponent as KeyboardIcon } from "../../assets/keyboard-icon.svg";

function Main() {
  const handleClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    console.log("clicked");
  };

  return (
    <header className="Main-header">
      <TopicSection
        id="home"
        child={
          <HeroSection
            image={
              "https://firebasestorage.googleapis.com/v0/b/personal-website-71391.appspot.com/o/images%2F000005860002.jpg?alt=media&token=b04cf4ea-6d00-4c81-8349-b15c40d8ae6d"
            }
            description={"music - coding - art"}
            bottomIcon={AcornMedleySvg}
          />
        }
      />

      <Navbar
        navList={["home", "music", "coding", "art"]}
        handleClick={(value) => handleClick(value)}
      />
      <TopicSection
        id="music"
        child={
          <Topic
            Icon={
              <GuitarIcon
                className="Topic-icon"
                style={{ height: 90, width: "auto" }}
              />
            }
            image={
              "https://firebasestorage.googleapis.com/v0/b/personal-website-71391.appspot.com/o/images%2Fjosh-with-guitar.jpg?alt=media&token=5aaf468b-dac3-48be-bcc7-f12d79ac1dc2"
            }
            title={"music"}
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
            Icon={
              <KeyboardIcon
                className="Topic-icon"
                style={{ height: 50, width: "auto" }}
              />
            }
            title={"coding"}
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
            Icon={
              <FlowerIcon
                className="Topic-icon"
                style={{ height: 120, width: "auto" }}
              />
            }
            image={
              "https://firebasestorage.googleapis.com/v0/b/personal-website-71391.appspot.com/o/images%2FUntitled_Artwork.png?alt=media&token=84d6ae5f-e696-499d-8888-39cb8a0560b8"
            }
            title={"art"}
            description={
              "I love working with my hands, whether it be drawing or painting, analog or digital, building or restoring. This topic is pretty broad so I'm going to be dumping a hodgepodge of my interest in this link. I’ll keep the professional pieces at the top though ;)"
            }
          />
        }
      />
    </header>
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
