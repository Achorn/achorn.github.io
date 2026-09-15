import { Grid } from "@mui/material";
import PageHeader from "../components/layout/PageHeader";
import Figure from "../components/Figure";
import AlbumCard from "../components/cards/AlbumCard";
import albums from "../data/albums";
import musicImage from "../assets/josh-with-guitar.webp";

const Music = () => (
  <>
    <PageHeader
      title="music"
      subtitle="My first and longest lasting passion. Most of the time it's just me and my guitar, but I always enjoy playing with friends."
    />

    <Figure
      src={musicImage}
      alt="Joshua playing guitar"
      ratio="21 / 9"
      position="50% 30%"
      sx={{ mb: { xs: 7, md: 10 } }}
    />

    <Grid container spacing={{ xs: 5, md: 6 }}>
      {albums.map((album) => (
        <Grid item xs={12} sm={6} md={4} key={album.id}>
          <AlbumCard album={album} />
        </Grid>
      ))}
    </Grid>
  </>
);

export default Music;
