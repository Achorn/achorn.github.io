import React from "react";
import FlexBetween from "../../components/FlexBetween";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";

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
          <Typography
            variant="h4"
            align="left"
            fontWeight={500}
            sx={{ mb: "20px", fontWeight: 500 }}
          >
            Hello! I'm Joshua, a full stack developer based in SF.
          </Typography>
          <Typography variant="body1" align="left" sx={{ mb: "10px" }}>
            I've had 3 years of working
          </Typography>
          <Typography variant="body1" align="left" sx={{ mb: "10px" }}>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna
          </Typography>
          <Typography variant="body1" align="left" sx={{ mb: "30px" }}>
            nisi ut culpa qui officia deserunt mollit anim id est laborum."
          </Typography>

          <Button variant="contained">View Linkedin</Button>
          <Button variant="outlined" sx={{ ml: "10px" }}>
            View Github
          </Button>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          lg={4}
          order={{ xs: 1, md: 2 }}
          justifyContent={"right"}
          alignItems={"center"}
        >
          <Box display="flex" justifyContent="flex-end">
            <Card
              sx={{
                width: { sm: "100%", md: "85%" },
                height: 350,
                borderRadius: { sm: 1, md: 4 },
              }}
            >
              <CardMedia
                component="img"
                height="100%"
                image={require("../../assets/selfie.jpg")} // require image
                alt="profile photo"
              />
            </Card>
          </Box>
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
