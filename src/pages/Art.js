import { Box, Grid, Stack, Typography } from "@mui/material";
import PageHeader from "../components/layout/PageHeader";
import Figure from "../components/Figure";
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
            <Figure src={piece.image} alt={piece.title} ratio="4 / 5" />
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
