import { Box, Button, Card, CardMedia, Grid, Typography } from "@mui/material";
import profile from "../../assets/selfie.jpg";
import sfImage from "../../assets/img/sf-guessing-image.png";
import brikBrekImage from "../../assets/img/projectImg/brik-brek.jpg";
import ballRollingImage from "../../assets/img/projectImg/Screenshot 2025-03-29 at 11.52.40 AM.png";
import toadImage from "../../assets/img/projectImg/toad.jpg";
import Project from "../../components/project.js/Project";
import spaceImage from "../../assets/img/projectImg/space_game.jpg";
import Experience from "../../components/Experience/Experience";
import CUImage from "../../assets/img/cu-boulder.jpg";

const projects = [
  {
    title: "Ball Physics Racer",
    techUsed: ["Javascript", "THREEjs", "React"],
    description:
      "A 3D ball rolling racing game I learned how to make following the THREEjs Journey course taught by Bruno Simon. Includes Physics, game mechanics",
    image: ballRollingImage,
    liveLink: "https://66-create-a-game-with-r3f-five.vercel.app/",
    ghLink: "https://github.com/Achorn/Ball-physics-racer",
  },
  {
    title: "My Little Spaceship",
    techUsed: ["Javascript", "THREEjs"],
    description:
      "My web based game I'm currently making from scratch, applying the knowledge I've learned from THREEjs lessons and game pattern books to make a custom game engine with object oriented coding",
    image: spaceImage,
    liveLink: "https://space-ship-game-delta.vercel.app/",
    ghLink: "https://github.com/Achorn/space-ship-game",
  },
  {
    title: "Brik Brek",
    techUsed: ["javascript", "html", "css", "canvas"],
    description:
      "a classic brick breaker. Another simple project to work with game design patters/math without following a step by step turorial",
    image: brikBrekImage,
    liveLink: "https://brick-brek.vercel.app/",
    ghLink: "https://github.com/Achorn/brik-brek",
  },
  {
    title: "SF Neighborhood Quiz",
    techUsed: ["mongoDb", "Node", "Express", "Javascript"],
    description:
      "A fun and easy way to test your knowledge of one of the greatest cities in the US. Includes map selections and review.",
    image: sfImage,
    liveLink: "https://joshuaachorn.com/sf-geography-quiz/",
    ghLink: "https://github.com/Achorn/sf-geography-quiz",
  },
  {
    title: "Toad-agotchi",
    techUsed: ["mongoDb", "Node", "Express", "React", "Material UI"],
    description:
      "A pet project of mine where I get to test out new technologies. mostly for experimenting with css animations and svgs",
    image: toadImage,
    liveLink: "https://joshuaachorn.com/toad-app/#/",
    ghLink: "https://github.com/Achorn/toad-app",
  },
];

const Home = () => {
  return (
    <>
      <Box id={"about"} sx={{ mt: { xs: 0, md: "100px" } }} />
      <Grid container spacing={2} sx={{ pl: "0px" }}>
        <Grid item order={{ xs: 2, md: 1 }} xs={12} md={8} lg={8} align="left">
          <Typography
            variant="h4"
            align="left"
            fontWeight={500}
            sx={{ mb: "20px", fontWeight: 500 }}
          >
            Hello! I'm Joshua - Application developer, videogame developer, and
            artist
          </Typography>

          <Typography variant="body1" align="left" sx={{ mb: "10px" }}>
            I'm a collaborative software engineer with 3 years of experience.
          </Typography>
          <Typography variant="body1" align="left" sx={{ mb: "10px" }}>
            A founding member in early stage startups. I've worked closely with
            CEOs to build apps from the ground up. Recently I've been enjoying
            making 3d web app games with THREEjs. You'll likely find me drawing
            on my ipad using procreate.
          </Typography>
          <Typography
            variant="body1"
            align="left"
            sx={{ mb: "30px" }}
          ></Typography>
          <Button
            variant="contained"
            target="_blank"
            href="https://www.linkedin.com/in/joshua-achorn/"
          >
            View Linkedin
          </Button>
          <Button
            target="_blank"
            href="https://github.com/Achorn"
            variant="outlined"
            sx={{ ml: "10px" }}
          >
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
                image={profile}
                alt="profile photo"
              />
            </Card>
          </Box>
        </Grid>
      </Grid>

      <Box id="projects" sx={{ mt: { xs: "50px", md: "120px" } }} />

      <Typography
        variant="h4"
        fontWeight="500"
        textAlign={"left"}
        sx={{ mb: 10 }}
      >
        Selected Projects
      </Typography>

      {projects.map((project) => (
        <Project key={project.title} project={project} />
      ))}

      <Box id="experience" sx={{ mt: { xs: 0, md: "100px" } }} />
      <Typography
        variant="h4"
        fontWeight="500"
        textAlign={"left"}
        sx={{ mb: 10 }}
      >
        Experience
      </Typography>

      <Typography
        variant="h5"
        fontWeight="500"
        textAlign={"left"}
        sx={{ mb: 5 }}
      >
        Education
      </Typography>
      <Grid container spacing={2} sx={{ mb: 10 }}>
        <Grid item xs={12}>
          <Card
            sx={{
              width: "100%",
              height: 300,
              borderRadius: 3,
            }}
          >
            <CardMedia
              component="img"
              height="100%"
              // width="100%"
              image={CUImage}
              alt="profile photo"
              sx={{ objectPosition: "0 10%" }}
            />
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Grid container textAlign={"left"} sm={12} spacing={2}>
            {/* <Grid container gap={2}> */}
            <Grid item xs={12} sm={6}>
              <Typography fontWeight={700}>
                University of Colorado at Boulder{" "}
              </Typography>
            </Grid>
            <Grid item container gap={1} xs={12} sm={6}>
              <Typography fontWeight={500}>GPA:</Typography>
              <Typography sx={{ color: "text.secondary" }}>3.4</Typography>
            </Grid>
            <Grid item container gap={1} xs={12} sm={6}>
              <Typography fontWeight={500}>Major: </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                Computer Science
              </Typography>
            </Grid>
            <Grid item container gap={1} xs={12} sm={6}>
              <Typography fontWeight={500}> Minor:</Typography>
              <Typography sx={{ color: "text.secondary" }}>
                Technology Arts & Media
              </Typography>
            </Grid>
          </Grid>
          {/* </Grid> */}
        </Grid>
      </Grid>

      <Typography
        variant="h5"
        fontWeight="500"
        textAlign={"left"}
        sx={{ mb: 10 }}
      >
        Professional
      </Typography>

      <Experience />

      <Box sx={{ mt: { xs: "50px", md: "120px" } }} />
    </>
  );
};

export default Home;
