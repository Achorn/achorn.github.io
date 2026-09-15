import { Box, Link, Stack, Typography } from "@mui/material";

/**
 * Album cover with the vinyl sliding out from behind it on hover.
 * The sleeve is a fixed square; the wrapper widens on hover to reveal the disc.
 */
const AlbumCard = ({ album }) => (
  <Stack spacing={2} alignItems="center">
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
          height: 220,
          aspectRatio: "1 / 1",
          transition: "aspect-ratio 450ms ease, transform 450ms ease",
          "&:hover": {
            aspectRatio: "570 / 400",
            transform: "translateY(-10px)",
          },
        }}
      >
        <Box
          component="img"
          src={album.vinyl}
          alt=""
          aria-hidden="true"
          sx={{ height: "100%", float: "right" }}
        />
        <Box
          component="img"
          src={album.cover}
          alt={`${album.title} album cover`}
          sx={{
            position: "absolute",
            left: 0,
            top: 0,
            height: "100%",
            borderRadius: "3px",
          }}
        />
      </Box>
    </Link>

    <Box sx={{ textAlign: "center" }}>
      <Typography fontWeight={700}>{album.title.toUpperCase()}</Typography>
      <Typography variant="body2" sx={{ color: "text.secondary" }}>
        {album.year}
      </Typography>
    </Box>
  </Stack>
);

export default AlbumCard;
