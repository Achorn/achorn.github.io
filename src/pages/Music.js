import { Box, Card, CardMedia, Grid, Typography } from "@mui/material";
import PageHeader from "../components/layout/PageHeader";
import AlbumCard from "../components/cards/AlbumCard";
import albums from "../data/albums";
import musicImage from "../assets/josh-with-guitar.jpg";

const Music = () => (
  <>
    <PageHeader
      title="Music"
      subtitle="My first and longest lasting passion. Most of the time it's just me and my guitar, but I always enjoy playing with friends."
    />

    <Card sx={{ width: "100%", height: 340, borderRadius: { xs: 1, md: 4 }, mb: { xs: 8, md: 12 } }}>
      <CardMedia
        component="img"
        height="100%"
        image={musicImage}
        alt="Joshua playing guitar"
        sx={{ objectPosition: "50% 30%" }}
      />
    </Card>

    <Box sx={{ textAlign: "left" }}>
      <Typography variant="h5" component="h2" fontWeight={500} sx={{ mb: 6 }}>
        Albums
      </Typography>
    </Box>

    <Grid container spacing={6} justifyContent="center">
      {albums.map((album) => (
        <Grid item xs={12} sm={6} md={4} key={album.id}>
          <AlbumCard album={album} />
        </Grid>
      ))}
    </Grid>
  </>
);

export default Music;
