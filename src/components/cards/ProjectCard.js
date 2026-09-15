import { Box, Grid, Stack, Typography } from "@mui/material";
import ArrowLink from "../ArrowLink";
import Figure, { FigurePlaceholder } from "../Figure";
import { MEASURE } from "../../theme/tokens";
import bandInk from "../../theme/bandInk";

/**
 * Widens a block from the content column to the full window, then pads the
 * same amount back so its contents stay on the column's grid. Percentages
 * resolve against the container, so (100vw - 100%) / 2 is exactly the gutter.
 */
const FULL_BLEED = "calc((100% - 100vw) / 2)";
const GUTTER = "calc((100vw - 100%) / 2)";

const ProjectCard = ({ project, reversed = false }) => {
  const {
    title, year, description, tech, icon, image, illustrated, tint, bleed, type,
    links = {}, privateRepo,
  } = project;

  // The band is sampled from the artwork, so it can be anything from a pale
  // sky to near-black. Text takes its colours from the band, not the theme.
  const band = tint ? bandInk(tint) : null;

  // Each project speaks in its own typeface. Falling back to the site's mono
  // is deliberate for anything without one, rather than inventing a voice.
  const voice = type
    ? {
        fontFamily: type.font,
        fontWeight: type.weight,
        textTransform: type.transform,
        letterSpacing: type.transform === "uppercase" ? "0.04em" : "-0.01em",
      }
    : null;
  const ink = band ? band.ink : "text.primary";
  const muted = band ? band.muted : "text.secondary";
  const accent = band ? band.accent : "primary.main";

  return (
    <Box
      component="article"
      sx={{
        py: { xs: 7, md: 11 },
        position: "relative",
        overflow: "hidden",
        // Each project sits on its own band, edge to edge. The bands abut, so
        // the colour change is what separates one project from the next and
        // there is no rule to draw.
        ...(tint
          ? { bgcolor: tint, mx: FULL_BLEED, px: GUTTER }
          : { borderTop: 1, borderColor: "divider" }),
      }}
    >
      {bleed && image && (
        // Out of the flow entirely, so the text column keeps its normal width
        // and the picture can be two thirds of the window behind it.
        <Box
          sx={{
            display: { xs: "none", md: "block" },
            position: "absolute",
            top: 0,
            bottom: 0,
            [reversed ? "left" : "right"]: "calc((100% - 100vw) / 2 - 6vw)",
            width: "66vw",
            zIndex: 0,
          }}
        >
          <Box
            component="img"
            src={image}
            alt={`${title} screenshot`}
            loading="lazy"
            sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        </Box>
      )}

      <Grid container spacing={{ xs: 3, md: 6 }} alignItems="start">
        <Grid
          item
          xs={12}
          md={6}
          order={{ xs: 2, md: reversed ? 2 : 1 }}
          sx={{
            position: "relative",
            zIndex: 1,
            // On a bleeding row the picture is out of the flow, so the text is
            // the only item in the grid and `order` cannot place it. Push it
            // across by hand when the picture is on the left.
            ...(bleed && reversed ? { ml: { md: "auto" } } : null),
          }}
        >
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
                    borderColor: band ? "transparent" : "divider",
                  }}
                />
              )}
              <Typography
                variant="h3"
                component="h2"
                sx={{ color: ink, ...voice }}
              >
                {title}
              </Typography>
            </Stack>
            {year && (
              <Typography
                variant="overline"
                sx={{ color: muted, fontVariantNumeric: "tabular-nums" }}
              >
                {year}
              </Typography>
            )}
          </Stack>

          {tech.length > 0 && (
            <Typography
              variant="body2"
              sx={{ color: muted, mb: 2.5, letterSpacing: "0.02em" }}
            >
              {tech.join(" · ")}
            </Typography>
          )}

          <Typography sx={{ color: "text.secondary", maxWidth: MEASURE }}>
            {description}
          </Typography>

          <Stack direction="row" spacing={3} useFlexGap flexWrap="wrap" sx={{ mt: 3 }}>
            {links.github && (
              <ArrowLink href={links.github} sx={{ color: accent }}>
                source
              </ArrowLink>
            )}
            {links.live && (
              <ArrowLink href={links.live} sx={{ color: accent }}>
                live demo
              </ArrowLink>
            )}
            {privateRepo && !links.github && (
              <Typography variant="overline" sx={{ color: muted }}>
                private source
              </Typography>
            )}
          </Stack>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          order={{ xs: 1, md: reversed ? 1 : 2 }}
          sx={bleed ? { display: { md: "none" } } : undefined}
        >
          {image ? (
            <Figure
              src={image}
              alt={`${title} screenshot`}
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
