import { Box, Card, CardMedia, Grid, Stack, Typography } from "@mui/material";
import ArrowLink from "../ArrowLink";
import { MEASURE } from "../../theme/tokens";

/** Shown for projects that do not have a screenshot yet. */
const ImagePlaceholder = ({ title }) => (
  <Box
    sx={{
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "flex-end",
      p: 2,
    }}
  >
    <Typography variant="overline" sx={{ color: "text.secondary" }}>
      {title} — screenshot to come
    </Typography>
  </Box>
);

const ProjectCard = ({ project }) => {
  const { title, year, description, tech, image, links = {}, privateRepo } = project;

  return (
    <Box
      component="article"
      sx={{
        py: { xs: 5, md: 7 },
        borderTop: 1,
        borderColor: "divider",
        "&:first-of-type": { borderTop: 0, pt: 0 },
      }}
    >
      <Grid container spacing={{ xs: 3, md: 6 }} alignItems="start">
        <Grid item xs={12} md={7}>
          <Stack
            direction="row"
            alignItems="baseline"
            justifyContent="space-between"
            spacing={2}
            sx={{ mb: 1 }}
          >
            <Typography variant="h3" component="h2">
              {title}
            </Typography>
            {year && (
              <Typography
                variant="overline"
                sx={{ color: "text.secondary", fontVariantNumeric: "tabular-nums" }}
              >
                {year}
              </Typography>
            )}
          </Stack>

          {tech.length > 0 && (
            <Typography
              variant="body2"
              sx={{ color: "text.secondary", mb: 2.5, letterSpacing: "0.02em" }}
            >
              {tech.join(" · ")}
            </Typography>
          )}

          <Typography sx={{ color: "text.secondary", maxWidth: MEASURE }}>
            {description}
          </Typography>

          <Stack direction="row" spacing={3} useFlexGap flexWrap="wrap" sx={{ mt: 3 }}>
            {links.github && <ArrowLink href={links.github}>source</ArrowLink>}
            {links.live && <ArrowLink href={links.live}>live demo</ArrowLink>}
            {privateRepo && !links.github && (
              <Typography variant="overline" sx={{ color: "text.secondary" }}>
                private source
              </Typography>
            )}
          </Stack>
        </Grid>

        <Grid item xs={12} md={5}>
          <Card sx={{ position: "relative", width: "100%", aspectRatio: "16 / 10" }}>
            {image ? (
              <CardMedia
                component="img"
                image={image}
                alt={`${title} screenshot`}
                sx={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            ) : (
              <ImagePlaceholder title={title} />
            )}
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProjectCard;
