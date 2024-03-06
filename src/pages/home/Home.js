import { Box, Button, Card, CardMedia, Grid, Typography } from "@mui/material";
import profile from "../../assets/selfie.jpg";
import sfImage from "../../assets/img/sf-guessing-image.png";
import photoAppImage from "../../assets/img/projectImg/sociopedia.jpg";
import toadImage from "../../assets/img/projectImg/toad.jpg";
import Project from "../../components/project.js/Project";
import Experience from "../../components/Experience/Experience";

const projects = [
  {
    title: "SF Neighborhood Quiz",
    techUsed: ["mongoDb", "Node", "Express", "Javascript"],
    description:
      "A fun and easy way to test your knowledge of the greatest city in the US. includes map selections and review.",
    image: sfImage,
    liveLink: "https://joshuaachorn.com/sf-geography-quiz/",
    ghLink: "https://github.com/Achorn/sf-geography-quiz",
  },
  {
    title: "Photo Sharing App",
    techUsed: ["mongoDb", "Node", "Express", "React", "Material UI"],
    description: "A full-stack app for sharing your photography with others.",
    image: photoAppImage,
    ghLink: "https://github.com/Achorn/photo-app",
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
            Hello! I'm Joshua, a full-stack developer based in SF.
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

      <Experience />

      <Box sx={{ mt: { xs: "50px", md: "120px" } }} />
    </>
  );
};

export default Home;
