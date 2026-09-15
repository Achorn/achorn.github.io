import { Box, Button, Card, CardMedia, Grid, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import profile from "../assets/selfie.jpg";
import ProjectCard from "../components/cards/ProjectCard";
import { featuredProjects } from "../data/projects";

const Home = () => (
  <>
    <Grid container spacing={4} alignItems="center">
      <Grid item order={{ xs: 2, md: 1 }} xs={12} md={8} sx={{ textAlign: "left" }}>
        <Typography variant="h4" component="h1" fontWeight={500} sx={{ mb: 3 }}>
          Hello! I'm Joshua — application developer, videogame developer, and
          artist
        </Typography>

        <Typography sx={{ mb: 2, color: "text.secondary" }}>
          I'm a collaborative software engineer with 3 years of experience.
        </Typography>
        <Typography sx={{ mb: 4, color: "text.secondary" }}>
          A founding member of early stage startups, I've worked closely with
          CEOs to build apps from the ground up. Recently I've been enjoying
          making 3D web games with Three.js. You'll likely find me drawing on my
          iPad in Procreate.
        </Typography>

        <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap">
          <Button
            variant="contained"
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/joshua-achorn/"
          >
            View LinkedIn
          </Button>
          <Button
            variant="outlined"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Achorn"
          >
            View GitHub
          </Button>
        </Stack>
      </Grid>

      <Grid item xs={12} md={4} order={{ xs: 1, md: 2 }}>
        <Box display="flex" justifyContent={{ xs: "center", md: "flex-end" }}>
          <Card
            sx={{
              width: { xs: "100%", md: "85%" },
              height: 350,
              borderRadius: { xs: 1, md: 4 },
            }}
          >
            <CardMedia
              component="img"
              height="100%"
              image={profile}
              alt="Joshua Achorn"
            />
          </Card>
        </Box>
      </Grid>
    </Grid>

    <Box sx={{ mt: { xs: 8, md: 15 } }}>
      <Typography variant="h4" component="h2" fontWeight={500} sx={{ mb: 8, textAlign: "left" }}>
        Featured Projects
      </Typography>

      {featuredProjects.map((project, index) => (
        <ProjectCard key={project.id} project={project} reversed={index % 2 === 1} />
      ))}

      <Button component={RouterLink} to="/projects" variant="outlined" size="large">
        See all projects
      </Button>
    </Box>
  </>
);

export default Home;
