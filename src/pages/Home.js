import { Box, Grid, Stack, Typography } from "@mui/material";
import ArrowLink from "../components/ArrowLink";
import Figure from "../components/Figure";
import ProjectCard from "../components/cards/ProjectCard";
import profile from "../assets/selfie.webp";
import { featuredProjects } from "../data/projects";
import { MEASURE } from "../theme/tokens";
import { experiencePhrase } from "../data/profile";

const Home = () => (
  <>
    <Grid container spacing={{ xs: 4, md: 7 }} alignItems="start">
      <Grid item order={{ xs: 2, md: 1 }} xs={12} md={7}>
        <Typography variant="overline" component="p" sx={{ color: "text.secondary", mb: 2 }}>
          application developer · game developer · artist
        </Typography>

        <Typography variant="h1" component="h1" sx={{ mb: 3 }}>
          hello, i'm joshua
        </Typography>

        <Typography sx={{ mb: 2, color: "text.secondary", maxWidth: MEASURE }}>
          I'm a collaborative software engineer with {experiencePhrase()} of
          experience.
        </Typography>
        <Typography sx={{ mb: 4, color: "text.secondary", maxWidth: MEASURE }}>
          A founding member of early stage startups, I've worked closely with
          CEOs to build apps from the ground up. Recently I've been enjoying
          making 3D web games with Three.js. You'll likely find me drawing on my
          iPad in Procreate.
        </Typography>

        <Stack direction="row" spacing={3} useFlexGap flexWrap="wrap">
          <ArrowLink href="https://www.linkedin.com/in/joshua-achorn/">linkedin</ArrowLink>
          <ArrowLink href="https://github.com/Achorn">github</ArrowLink>
          <ArrowLink to="/about">more about me</ArrowLink>
        </Stack>
      </Grid>

      <Grid item xs={12} md={5} order={{ xs: 1, md: 2 }}>
        <Figure src={profile} alt="Joshua Achorn" ratio="4 / 5" priority />
      </Grid>
    </Grid>

    <Box sx={{ mt: { xs: 9, md: 14 } }}>
      <Stack
        direction="row"
        alignItems="baseline"
        justifyContent="space-between"
        spacing={2}
        sx={{ mb: { xs: 5, md: 7 } }}
      >
        <Typography
          variant="h2"
          component="h2"
          sx={{ "&::before": { content: '"// "', color: "text.secondary" } }}
        >
          featured work
        </Typography>
        <ArrowLink to="/projects">all projects</ArrowLink>
      </Stack>

      {featuredProjects.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          reversed={index % 2 === 1}
        />
      ))}
    </Box>
  </>
);

export default Home;
