import React from "react";
import FlexBetween from "../../components/FlexBetween";
import { Box, Button, Container, Grid, Typography } from "@mui/material";

const Home = () => {
  return (
    <Container>
      {/* Nav section */}
      <FlexBetween>
        <Typography sx={{ color: "text.secondary" }}>Joshua Achorn</Typography>
        <FlexBetween gap={"20px"}>
          <Typography sx={{ color: "text.secondary" }}>About</Typography>

          <Typography sx={{ color: "text.secondary" }}>Projects</Typography>
          <Typography sx={{ color: "text.secondary" }}>Contact</Typography>
          {/* <Typography sx={{ color: "text.secondary" }}>Blog</Typography> */}
        </FlexBetween>
      </FlexBetween>

      {/* hero section */}
      <Box sx={{ mt: "50px" }} />
      <Grid container spacing={2}>
        <Grid item order={{ xs: 2, md: 1 }} xs={12} md={8} lg={8} align="left">
          <Typography variant="h4" align="left" sx={{ mb: "10px" }}>
            Hello! I'm Joshua, a full stack developer based in SF.
          </Typography>
          <Typography align="left" sx={{ mb: "10px" }}>
            I've had 3 years of working at startups as a founding team member.
          </Typography>
          <Button variant="contained">View Linkedin</Button>
          <Button variant="outlined" sx={{ ml: "10px" }}>
            View Github
          </Button>
        </Grid>
        <Grid item xs={12} md={4} lg={4} order={{ xs: 1, md: 2 }}>
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
