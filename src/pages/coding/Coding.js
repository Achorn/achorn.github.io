import React from "react";
import Footer from "../../components/display/footer/Footer";
import "./Coding.css";
import aircoverImg from "../../assets/img/aircover.png";
import myadcenterImg from "../../assets/img/myadcenter.jpg";
import nighTechnologiesImg from "../../assets/img/nigh-technologies.png";
import cuBoulderImg from "../../assets/img/cu-boulder.png";
import cleanCodeCover from "../../assets/img/clean-code-cover.jpg";
import HeroSection from "../main/hero/Hero";
import { ReactComponent as KeyboardSvg } from "../../assets/keyboard-icon.svg";
import codingImg from "../../assets/img/red-blue-coding.JPG";
import NavBar from "../main/nav/Navbar";
import UnderConstruction from "../../components/display/under-construction/Under-construction";
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
        navList={["inspiration", "skills", "job history", "projects"]}
        handleClick={(value) => handleClick(value)}
      />
      <Inspo />
      <Skills id="skills" />
      <JobHistory id="job history" />
      <Projects />
      <Footer />
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
      <div>Flutter, Dart, React, JavaScript, Go, AWS</div>
    </div>
  );
}

function JobHistory() {
  return (
    <div className="Section-container" id="job history">
      <SectionDivider />
      <div className="Section-title">JOB HISTORY</div>
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
        <div style={{ padding: "40px", margin: "10px" }}>
          <UnderConstruction />
        </div>
      </div>
    </div>
  );
}

function SectionDivider() {
  return (
    <div style={{ marginTop: "30px", marginBottom: "40px" }}>
      <hr style={{ width: "65vw" }} />
    </div>
  );
}

export default Coding;
