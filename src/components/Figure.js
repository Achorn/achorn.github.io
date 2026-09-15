import { Box, Typography } from "@mui/material";

/**
 * An image on the page, unframed.
 *
 * There is deliberately no border and no background tint: a border means
 * "separate object", which earns its keep around a logo sitting on white and
 * does nothing around a photo that already has its own edges. What separates
 * one image from another here is the crop, so `ratio` is the important prop.
 *
 * Pass `priority` for anything above the fold — currently only the home
 * portrait, which is the largest-contentful-paint element.
 *
 * `plate` fills the box behind the image. Photographs want it, because it
 * covers the frame while they load. Artwork drawn on a transparent ground does
 * not: the page itself should show through, so the drawing reads as sitting on
 * the page rather than inside a picture.
 */
const Figure = ({
  src,
  alt,
  ratio = "16 / 10",
  position,
  priority = false,
  plate = true,
  sx,
}) => (
  <Box
    sx={{
      aspectRatio: ratio,
      width: "100%",
      overflow: "hidden",
      ...(plate ? { bgcolor: "action.hover" } : null),
      ...sx,
    }}
  >
    <Box
      component="img"
      src={src}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      {...(priority ? { fetchpriority: "high" } : {})}
      sx={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: plate ? "cover" : "contain",
        objectPosition: position,
      }}
    />
  </Box>
);

/**
 * Stands in for a screenshot that does not exist yet. This one *does* get a
 * rule, because without it there is nothing to see — it is a placeholder
 * announcing itself, not a picture.
 */
export const FigurePlaceholder = ({ label, ratio = "16 / 10" }) => (
  <Box
    sx={{
      aspectRatio: ratio,
      width: "100%",
      border: 1,
      borderStyle: "dashed",
      borderColor: "divider",
      display: "flex",
      alignItems: "flex-end",
      p: 2,
    }}
  >
    <Typography variant="overline" sx={{ color: "text.secondary" }}>
      {label}
    </Typography>
  </Box>
);

export default Figure;
