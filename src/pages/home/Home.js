import React from "react";
import FlexBetween from "../../components/FlexBetween";

const Home = () => {
  return (
    <div>
      {/* Nav section */}
      <FlexBetween>
        <div>Joshua Achorn</div>
        <FlexBetween gap={"10px"}>
          <div>About</div>
          <div>Projects</div>
          {/* <div>Blog</div> */}
          <div>Contact</div>
        </FlexBetween>
      </FlexBetween>

      {/* hero section */}
      <div>HERO</div>

      {/* About section */}
      <div>ABOUT</div>

      {/* Project section */}
      <div>PROJECTS</div>

      <div>CONTACT</div>
    </div>
  );
};

export default Home;
