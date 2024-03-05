import React from "react";
import FlexBetween from "../../components/FlexBetween";
import { Button, Container, Grid, Typography } from "@mui/material";

const Home = () => {
  return (
    <Container>
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
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <div>
            <Typography variant="h3">Title </Typography>
            <Typography>description </Typography>
            <Button>View Linkedin</Button>
            <Button>View Github</Button>
          </div>
        </Grid>
        <Grid item xs={6}>
          Photo
        </Grid>
      </Grid>

      {/* About section */}
      {/* <div>ABOUT</div> */}

      {/* Project section */}
      {/* <div>PROJECTS</div> */}

      {/* <div>CONTACT</div> */}
    </Container>
  );
};

export default Home;
