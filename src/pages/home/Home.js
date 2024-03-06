import { Box, Button, Card, CardMedia, Grid, Typography } from "@mui/material";
import profile from "../../assets/selfie.jpg";
import sfImage from "../../assets/img/sf-guessing-image.png";
import blogImage from "../../assets/img/acorn-blog.png";

const projects = [
  {
    title: "SF Neighborhood Quiz",
    techUsed: ["mongoDb", "Node", "Express", "Javascript"],
    description:
      "a fun and easy way to test your knowledge of the greatest city in the US",
    image: sfImage,
    githubLink: "",
    learnMoreLink: "",
  },
  {
    title: "Acorn Blog",
    techUsed: ["mongoDb", "Node", "Express", "React"],
    description: "for sharing your photography with a like-minded community",
    image: blogImage,
    githubLink: "",
    learnMoreLink: "",
  },
];

const Home = () => {
  return (
    <>
      {/* hero section */}
      <Box sx={{ mt: { xs: 0, md: "100px" } }} />
      <Grid container spacing={2} sx={{ pl: "0px" }}>
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
                image={profile}
                alt="profile photo"
              />
            </Card>
          </Box>
        </Grid>
      </Grid>

      {/* About section */}
      {/* <div>ABOUT</div> */}
      <Box sx={{ mt: { xs: "50px", md: "120px" } }} />

      <Typography
        variant="h4"
        fontWeight="500"
        textAlign={"left"}
        sx={{ mb: 5 }}
      >
        Selected Projects
      </Typography>

      {projects.map((project) => (
        <Box sx={{ mb: 5 }}>
          <Grid container spacing={4}>
            <Grid
              container
              item
              xs="12"
              sm="6"
              gap={2}
              // justifyContent={"start"}
              // alignItems={"start"}
              alignContent={"start"}
            >
              <Typography variant="h5" textAlign={"left"}>
                {project.title}
              </Typography>

              <Grid container spacing={0} gap={1}>
                {project.techUsed.map((tech) => (
                  <Button sx={{ textTransform: "none" }} size="small">
                    {tech}
                  </Button>
                ))}
              </Grid>
              <Typography textAlign={"left"}>{project.description}</Typography>
              <Button variant="outlined">live example</Button>

              <Button variant="outlined">view github</Button>
            </Grid>
            <Grid item xs="12" sm="6">
              <Card
                sx={{
                  width: "100%",
                  height: 350,
                  borderRadius: { sm: 1, md: 4 },
                }}
              >
                <CardMedia
                  component="img"
                  height="100%"
                  image={project.image}
                  sx={{ objectFit: "cover" }}
                  alt="project image"
                />
              </Card>
              {/* </Box> */}
            </Grid>
          </Grid>
        </Box>
      ))}

      {/* <div>CONTACT</div> */}
    </>
  );
};

export default Home;
