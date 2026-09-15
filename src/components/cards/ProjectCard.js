import { Box, Grid, Stack, Typography } from "@mui/material";
import ArrowLink from "../ArrowLink";
import Figure, { FigurePlaceholder } from "../Figure";
import { MEASURE } from "../../theme/tokens";

const ProjectCard = ({ project, reversed = false }) => {
  const {
    title, year, description, tech, icon, image, illustrated,
    links = {}, privateRepo,
  } = project;

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
        <Grid item xs={12} md={6} order={{ xs: 2, md: reversed ? 2 : 1 }}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            spacing={2}
            sx={{ mb: 1 }}
          >
            <Stack direction="row" alignItems="center" spacing={1.75}>
              {icon && (
                <Box
                  component="img"
                  src={icon}
                  alt=""
                  aria-hidden="true"
                  sx={{
                    width: 52,
                    height: 52,
                    flexShrink: 0,
                    // App icons are squircles, so they keep their corners
                    // where the rest of the site is square. The hairline is
                    // structural, not decoration: Fallow's icon is cream on a
                    // cream page and would have no edge without it.
                    borderRadius: "23%",
                    border: 1,
                    borderColor: "divider",
                  }}
                />
              )}
              <Typography variant="h3" component="h2">
                {title}
              </Typography>
            </Stack>
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

        <Grid item xs={12} md={6} order={{ xs: 1, md: reversed ? 1 : 2 }}>
          {image ? (
            <Figure
              src={image}
              alt={illustrated ? `${title} illustration` : `${title} screenshot`}
              ratio="16 / 10"
              plate={!illustrated}
            />
          ) : (
            <FigurePlaceholder label={`${title} — screenshot to come`} ratio="16 / 10" />
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProjectCard;
