import { Box, Typography } from "@mui/material";
import ArrowLink from "../components/ArrowLink";
import { MEASURE } from "../theme/tokens";

const NotFound = () => (
  <Box sx={{ py: { xs: 6, md: 10 } }}>
    <Typography
      variant="h1"
      component="h1"
      sx={{ "&::before": { content: '"// "', color: "text.secondary" } }}
    >
      404
    </Typography>
    <Typography sx={{ mt: 2.5, mb: 4, color: "text.secondary", maxWidth: MEASURE }}>
      That page doesn't exist — or it moved when the site was reorganized.
    </Typography>
    <ArrowLink to="/">back home</ArrowLink>
  </Box>
);

export default NotFound;
