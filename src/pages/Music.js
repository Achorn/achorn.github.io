import { Card, CardMedia, Grid } from "@mui/material";
import PageHeader from "../components/layout/PageHeader";
import AlbumCard from "../components/cards/AlbumCard";
import albums from "../data/albums";
import musicImage from "../assets/josh-with-guitar.jpg";

const Music = () => (
  <>
    <PageHeader
      title="music"
      subtitle="My first and longest lasting passion. Most of the time it's just me and my guitar, but I always enjoy playing with friends."
    />

    <Card sx={{ width: "100%", aspectRatio: "21 / 9", mb: { xs: 7, md: 10 } }}>
      <CardMedia
        component="img"
        image={musicImage}
        alt="Joshua playing guitar"
        sx={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 30%" }}
      />
    </Card>

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
