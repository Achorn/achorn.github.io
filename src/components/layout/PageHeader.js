import { Box, Typography } from "@mui/material";
import { MEASURE } from "../../theme/tokens";

/**
 * The title block every page opens with. The "//" prefix is a comment marker —
 * it reads as a section label in a monospace setting without needing a rule.
 */
const PageHeader = ({ title, subtitle }) => (
  <Box sx={{ mb: { xs: 5, md: 8 } }}>
    <Typography
      variant="h1"
      component="h1"
      sx={{ "&::before": { content: '"// "', color: "text.secondary" } }}
    >
      {title}
    </Typography>
    {subtitle && (
      <Typography sx={{ mt: 2.5, maxWidth: MEASURE, color: "text.secondary" }}>
        {subtitle}
      </Typography>
    )}
  </Box>
);

export default PageHeader;
