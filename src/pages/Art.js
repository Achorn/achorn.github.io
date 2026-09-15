import { Box, Card, CardMedia, Grid, Stack, Typography } from "@mui/material";
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
    }}
  >
    <Typography variant="overline" sx={{ color: "text.secondary" }}>
      gallery being hung — pieces going up soon
    </Typography>
  </Box>
);

const Art = () => (
  <>
    <PageHeader
      title="art"
      subtitle="I love working with my hands, whether it's drawing or painting, analog or digital, building or restoring."
    />

    {artwork.length === 0 ? (
      <EmptyState />
    ) : (
      <Grid container spacing={{ xs: 3, md: 4 }}>
        {artwork.map((piece) => (
          <Grid item xs={12} sm={6} md={4} key={piece.id}>
            <Card sx={{ width: "100%", aspectRatio: "4 / 5" }}>
              <CardMedia
                component="img"
                image={piece.image}
                alt={piece.title}
                sx={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Card>
            <Stack
              direction="row"
              alignItems="baseline"
              justifyContent="space-between"
              spacing={2}
              sx={{ mt: 1.5 }}
            >
              <Typography variant="h5" component="h2">
                {piece.title}
              </Typography>
              <Typography variant="overline" sx={{ color: "text.secondary" }}>
                {[piece.medium, piece.year].filter(Boolean).join(" · ")}
              </Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
    )}
  </>
);

export default Art;
