import { Box, Card, CardMedia, Grid, Typography } from "@mui/material";
import PageHeader from "../components/layout/PageHeader";
import artwork from "../data/artwork";

const EmptyState = () => (
  <Box
    sx={{
      py: 10,
      px: 3,
      border: 1,
      borderStyle: "dashed",
      borderColor: "divider",
      borderRadius: 3,
      color: "text.secondary",
    }}
  >
    <Typography>The gallery is being hung — pieces going up soon.</Typography>
  </Box>
);

const Art = () => (
  <>
    <PageHeader
      title="Art"
      subtitle="I love working with my hands, whether it's drawing or painting, analog or digital, building or restoring."
    />

    {artwork.length === 0 ? (
      <EmptyState />
    ) : (
      <Grid container spacing={3}>
        {artwork.map((piece) => (
          <Grid item xs={12} sm={6} md={4} key={piece.id}>
            <Card sx={{ borderRadius: 3 }}>
              <CardMedia
                component="img"
                height="300"
                image={piece.image}
                alt={piece.title}
                sx={{ objectFit: "cover" }}
              />
            </Card>
            <Box sx={{ mt: 1, textAlign: "left" }}>
              <Typography fontWeight={500}>{piece.title}</Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {[piece.medium, piece.year].filter(Boolean).join(" · ")}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    )}
  </>
);

export default Art;
