import { Box, Grid, Stack, Typography } from "@mui/material";
import PageHeader from "../components/layout/PageHeader";
import Figure from "../components/Figure";
import profile from "../assets/selfie.webp";
import education from "../data/education";
import { MEASURE } from "../theme/tokens";
import { experiencePhrase } from "../data/profile";

const About = () => (
  <>
    <PageHeader
      title="about"
      subtitle="Application developer, videogame developer, and artist."
    />

    <Grid container spacing={{ xs: 4, md: 6 }} sx={{ mb: { xs: 8, md: 12 } }}>
      <Grid item xs={12} md={7}>
        <Stack spacing={2.5}>
          <Typography sx={{ color: "text.secondary", maxWidth: MEASURE }}>
            I'm a collaborative software engineer with {experiencePhrase()} of
            experience and a founding member of early stage startups, where I
            worked closely with CEOs to build apps from the ground up.
          </Typography>
          <Typography sx={{ color: "text.secondary", maxWidth: MEASURE }}>
            The cross section between computer science and art is what keeps me
            here. As someone who loves creating and problem solving, coding
            scratches both itches. I'm primarily a front end developer with some
            backend experience, and I enjoy writing code that's clean and
            readable — separating business logic, models, and views.
          </Typography>
          <Typography sx={{ color: "text.secondary", maxWidth: MEASURE }}>
            Lately that's meant 3D web games with Three.js. Away from the
            keyboard I'm usually drawing on my iPad in Procreate, or playing
            guitar and writing songs.
          </Typography>
        </Stack>
      </Grid>

      <Grid item xs={12} md={5}>
        <Figure src={profile} alt="Joshua Achorn" ratio="4 / 5" />
      </Grid>
    </Grid>

    <Box sx={{ borderTop: 1, borderColor: "divider", pt: { xs: 5, md: 7 } }}>
      <Typography
        variant="h2"
        component="h2"
        sx={{ mb: 4, "&::before": { content: '"// "', color: "text.secondary" } }}
      >
        education
      </Typography>

      <Grid container spacing={{ xs: 3, md: 6 }} alignItems="start">
        <Grid item xs={12} md={7}>
          <Figure
            src={education.image}
            alt={education.school}
            ratio="21 / 9"
            position="0 20%"
          />
        </Grid>

        <Grid item xs={12} md={5}>
          <Typography variant="h4" component="h3" sx={{ mb: 2.5 }}>
            university of colorado at boulder
          </Typography>
          <Stack spacing={1.25}>
            {education.details.map(({ label, value }) => (
              <Stack
                key={label}
                direction="row"
                justifyContent="space-between"
                spacing={2}
                sx={{ borderBottom: 1, borderColor: "divider", pb: 1.25 }}
              >
                <Typography variant="overline" sx={{ color: "text.secondary" }}>
                  {label}
                </Typography>
                <Typography variant="body2">{value}</Typography>
              </Stack>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  </>
);

export default About;
