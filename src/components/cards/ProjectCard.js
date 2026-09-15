import { Box, Button, Card, CardMedia, Chip, Grid, Stack, Typography } from "@mui/material";

/** Placeholder shown for projects that do not have a screenshot yet. */
const ImagePlaceholder = ({ title }) => (
  <Box
    sx={{
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      bgcolor: "action.hover",
      color: "text.secondary",
      px: 3,
    }}
  >
    <Typography variant="body2">{title}</Typography>
  </Box>
);

const ProjectCard = ({ project, reversed = false }) => {
  const { title, year, description, tech, image, links = {}, privateRepo } = project;

  return (
    <Box component="article" sx={{ mb: { xs: 8, md: 12 } }}>
      <Grid container spacing={4} alignItems="center">
        <Grid
          item
          xs={12}
          sm={6}
          order={{ xs: 2, sm: reversed ? 2 : 1 }}
          sx={{ textAlign: "left" }}
        >
          <Stack spacing={2}>
            <Box>
              <Typography variant="h5" component="h2" fontWeight={500}>
                {title}
              </Typography>
              {year && (
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {year}
                </Typography>
              )}
            </Box>

            {tech.length > 0 && (
              <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                {tech.map((item) => (
                  <Chip key={item} label={item} size="small" variant="outlined" />
                ))}
              </Stack>
            )}

            <Typography sx={{ color: "text.secondary" }}>{description}</Typography>

            <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
              {links.github && (
                <Button variant="outlined" target="_blank" rel="noreferrer" href={links.github}>
                  view github
                </Button>
              )}
              {links.live && (
                <Button variant="outlined" target="_blank" rel="noreferrer" href={links.live}>
                  live example
                </Button>
              )}
              {privateRepo && !links.github && (
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Source is private — happy to walk through it.
                </Typography>
              )}
            </Stack>
          </Stack>
        </Grid>

        <Grid item xs={12} sm={6} order={{ xs: 1, sm: reversed ? 1 : 2 }}>
          <Card sx={{ width: "100%", height: 350, borderRadius: { xs: 1, md: 4 } }}>
            {image ? (
              <CardMedia
                component="img"
                height="100%"
                image={image}
                alt={`${title} screenshot`}
                sx={{ objectFit: "cover" }}
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
