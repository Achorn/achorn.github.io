import { Box, Card, CardMedia, Grid, Stack, Typography } from "@mui/material";
import PageHeader from "../components/layout/PageHeader";
import profile from "../assets/selfie.jpg";
import education from "../data/education";

/** The longer-form "who is this" page; the home page keeps only the short version. */
const About = () => (
  <>
    <PageHeader
      title="About"
      subtitle="Application developer, videogame developer, and artist."
    />

    <Grid container spacing={4} sx={{ mb: { xs: 8, md: 12 } }}>
      <Grid item xs={12} md={7} sx={{ textAlign: "left" }}>
        <Stack spacing={2}>
          <Typography sx={{ color: "text.secondary" }}>
            I'm a collaborative software engineer with 3 years of experience and
            a founding member of early stage startups, where I worked closely
            with CEOs to build apps from the ground up.
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            The cross section between computer science and art is what keeps me
            here. As someone who loves creating and problem solving, coding
            scratches both itches. I'm primarily a front end developer with some
            backend experience, and I enjoy writing code that's clean and
            readable — separating business logic, models, and views.
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            Lately that's meant 3D web games with Three.js. Away from the
            keyboard I'm usually drawing on my iPad in Procreate, or playing
            guitar and writing songs.
          </Typography>
        </Stack>
      </Grid>

      <Grid item xs={12} md={5}>
        <Card sx={{ width: "100%", height: 340, borderRadius: { xs: 1, md: 4 } }}>
          <CardMedia
            component="img"
            height="100%"
            image={profile}
            alt="Joshua Achorn"
          />
        </Card>
      </Grid>
    </Grid>

    <Box sx={{ textAlign: "left" }}>
      <Typography variant="h5" component="h2" fontWeight={500} sx={{ mb: 4 }}>
        Education
      </Typography>

      <Card sx={{ width: "100%", height: 300, borderRadius: 3, mb: 3 }}>
        <CardMedia
          component="img"
          height="100%"
          image={education.image}
          alt={education.school}
          sx={{ objectPosition: "0 10%" }}
        />
      </Card>

      <Typography fontWeight={700} sx={{ mb: 2 }}>
        {education.school}
      </Typography>

      <Grid container spacing={2}>
        {education.details.map(({ label, value }) => (
          <Grid item xs={12} sm={4} key={label}>
            <Stack direction="row" spacing={1}>
              <Typography fontWeight={500}>{label}:</Typography>
              <Typography sx={{ color: "text.secondary" }}>{value}</Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Box>
  </>
);

export default About;
