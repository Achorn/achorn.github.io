import React from "react";
import "./Coding.css";
import aircoverImg from "../../assets/img/aircover.png";
import acornBlogImg from "../../assets/img/acorn-blog.png";
import sfNeighborhoodImg from "../../assets/img/sf-guessing-image.png";
import asciiImg from "../../assets/img/ascii-art-16.png";
import carMap from "../../assets/img/car-map.png";
import myadcenterImg from "../../assets/img/myadcenter.jpg";
import nighTechnologiesImg from "../../assets/img/nigh-technologies.png";
import cuBoulderImg from "../../assets/img/cu-boulder.png";
import cleanCodeCover from "../../assets/img/clean-code-cover.jpg";
import HeroSection from "../main/hero/Hero";
import { ReactComponent as KeyboardSvg } from "../../assets/keyboard-icon.svg";
import codingImg from "../../assets/img/red-blue-coding.JPG";
import NavBar from "../main/nav/Navbar";
import SectionDivider from "../../components/display/section-divider/SectionDivider";
import ProjectCard from "./components/Project";

const Coding = () => {
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
    <div className="Coding-page">
      <HeroSection
        description={"coding"}
        image={codingImg}
        bottomIcon={KeyboardSvg}
      />
      <NavBar
        navList={["inspiration", "skills", "experience", "projects"]}
        handleClick={(value) => handleClick(value)}
      />
      <Inspo />
      <Skills id="skills" />
      <JobHistory id="experience" />
      <Projects />
    </div>
  );
};

function Inspo() {
  return (
    <div id="inspiration">
      <SectionDivider />
      <div className="Inspo-container">
        {/* <div className="Section-title">INSPIRATION</div> */}
        <div className="Inspo-image-container">
          <img src={cleanCodeCover} className="Inspo-image" alt="clean-code" />
        </div>
        <div className="Inspo-written-content">
          <div className="Section-title">INSPIRATION</div>
          {/* <hr style={{ width: "60px" }} /> */}
          <div className="Inspo-description">
            I want to acknowledge this book as it was one of the catalysts in my
            career. These ideas improved my code instantly, and is a great
            starting point for anyone looking make their coding experience
            "smoother". These ideas helped me fix issues that I always dealt
            with, but didn't know how to put a name to them yet. Thanks Robert.
          </div>
        </div>
      </div>
    </div>
  );
}

function Skills() {
  return (
    <div className="Section-container" id="skills">
      <SectionDivider />

      <div className="Section-title">SKILLS</div>
      <div className="Skills">Flutter, Dart, React, JavaScript, Go, AWS</div>
    </div>
  );
}

function JobHistory() {
  return (
    <div className="Section-container" id="experience">
      <SectionDivider />
      <div className="Section-title">EXPERIENCE</div>
      <JobComponent
        date={"Sep 2021 - May 2023 · 1 yr 9 mos"}
        className="Job-component"
        image={aircoverImg}
        company={"Aircover"}
        title={"Junior Software Engineer"}
        description={
          "Translate Figma designs into web pages with reusable maintainable components. Implemented MVVM design pattern on projects to separate the UI, models, and controllers. Wrote unit and integration tests alongside all new features and updates."
        }
      />
      <ConnectorLine />
      <JobComponent
        date={"Jan 2021 - Jun 2021 · 6 mos"}
        className="Job-component"
        image={nighTechnologiesImg}
        company={"Nigh Technologies"}
        title={"Software Developer"}
        description={
          "Designed pages for both web and mobile apps using figma. Developing apps with React (Javascript) for our web app and Flutter (Dart) for our mobile app (iOS and Android). Using Jira and Scrum methodology, I ran weekly sprints and kept our team of 6 on target. "
        }
      />
      <ConnectorLine />
      <JobComponent
        date={"May 2020 - Sep 2020 · 5 mos"}
        className="Job-component"
        image={myadcenterImg}
        company={"Myadcenter"}
        title={"SE Intern"}
        description={
          "Created Reusable Components using React Javascript and Material UI, Including Redux to easily manage out application state. Customized existing HMTL/CSS to match design mocks on Figma."
        }
      />
      <ConnectorLine />
      <JobComponent
        className="Job-component"
        date={"Jan 2019 - May 2019 · 5 mos"}
        image={cuBoulderImg}
        company={"CU Boulder"}
        title={"Data Structures CA"}
        description={
          "A great experience learning how to communicate code in order to help students with their assignments. "
        }
      />
    </div>
  );
}
function JobComponent({ date, image, company, title, description }) {
  return (
    <div>
      <div className="Job-component">
        <div className="Job-image-container">
          <img src={image} className="Job-image" alt="logo" />
        </div>
        <div className="Job-title-description">
          <div className="Job-labels">
            <div className="Job-company">{company.toUpperCase()}</div>
            <div className="Job-title">{title}</div>
          </div>
          <div className="Date">{date}</div>

          <div className="Job-description">{description}</div>
        </div>
      </div>
    </div>
  );
}
function ConnectorLine() {
  return <div className="Connector-line"></div>;
}
function Projects() {
  return (
    <div id="projects">
      <SectionDivider />
      <div>
        <div className="Section-title">PROJECTS</div>
        <div className="Project-container">
          <ProjectCard
            img={sfNeighborhoodImg}
            title={"SF Neighborhood Quiz"}
            description={
              "Challenge your knowledge of SF neighborhoods with this guessing game"
            }
            alt="SF neighborhood guesser"
            link={"https://joshuaachorn.com/sf-geography-quiz/"}
          />
          <ProjectCard
            img={acornBlogImg}
            title={"Acorn Blog"}
            description={
              "An app where users can write their private journal entries, or post them in public"
            }
            alt="acorn blog"
            link={"https://github.com/Achorn/acorn-blog/blob/main/README.md"}
          />
          <ProjectCard
            img={carMap}
            title={"Car/Truck Ownership Map"}
            description={
              "An interactive map to show the shift from majority car ownership to trucks by state"
            }
            alt="vehicle map"
            link={"https://joshuaachorn.com/map-tester/"}
          />
          <ProjectCard
            img={asciiImg}
            title={"ASCII Art Challenge"}
            description={
              "Take home project to test originality and how to handle scaling"
            }
            alt="ascii img"
            link={"https://github.com/Achorn/ascii-art"}
          />
          <ProjectCard
            title={"This Website..."}
            description={
              "My portfolio with simple styling that tells you more about who I am, and what my interests are"
            }
            alt="my website"
            img={
              "https://firebasestorage.googleapis.com/v0/b/personal-website-71391.appspot.com/o/images%2F000005860002.jpg?alt=media&token=b04cf4ea-6d00-4c81-8349-b15c40d8ae6d"
            }
            link={"https://joshuaachorn.com/"}
          />
        </div>
      </div>
    </div>
  );
}

export default Coding;
