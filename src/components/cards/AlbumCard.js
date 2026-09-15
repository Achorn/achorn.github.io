import { Box, Link, Stack, Typography } from "@mui/material";

/**
 * Album cover with the vinyl sliding out from behind it on hover.
 * The sleeve is a fixed square; the wrapper widens on hover to reveal the disc.
 */
const AlbumCard = ({ album }) => (
  <Stack spacing={2}>
    <Link
      href={album.link}
      target="_blank"
      rel="noreferrer"
      aria-label={`${album.title} on Spotify`}
      sx={{ display: "block" }}
    >
      <Box
        sx={{
          position: "relative",
          height: 200,
          aspectRatio: "1 / 1",
          transition: "aspect-ratio 450ms ease, transform 450ms ease",
          "&:hover": { aspectRatio: "570 / 400", transform: "translateY(-8px)" },
          "@media (prefers-reduced-motion: reduce)": { transition: "none" },
        }}
      >
        <Box
          component="img"
          src={album.vinyl}
          alt=""
          aria-hidden="true"
          loading="lazy"
          sx={{ height: "100%", float: "right" }}
        />
        <Box
          component="img"
          src={album.cover}
          alt={`${album.title} album cover`}
          loading="lazy"
          sx={{ position: "absolute", left: 0, top: 0, height: "100%" }}
        />
      </Box>
    </Link>

    <Stack direction="row" alignItems="baseline" justifyContent="space-between" spacing={2}>
      <Typography variant="h5" component="h2">
        {album.title}
      </Typography>
      <Typography variant="overline" sx={{ color: "text.secondary" }}>
        {album.year}
      </Typography>
    </Stack>
  </Stack>
);

export default AlbumCard;
