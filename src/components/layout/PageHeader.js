import { Box, Typography } from "@mui/material";

/** The title block every page opens with, so spacing stays consistent. */
const PageHeader = ({ title, subtitle }) => (
  <Box sx={{ mb: { xs: 5, md: 8 }, textAlign: "left" }}>
    <Typography variant="h4" fontWeight={500} component="h1">
      {title}
    </Typography>
    {subtitle && (
      <Typography variant="body1" sx={{ mt: 2, color: "text.secondary" }}>
        {subtitle}
      </Typography>
    )}
  </Box>
);

export default PageHeader;
