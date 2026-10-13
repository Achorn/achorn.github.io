import { Box, Stack, Typography } from "@mui/material";
import { MEASURE } from "../../theme/tokens";
import { formatTenure } from "../../data/tenure";

const JobCard = ({ job }) => (
  <Box
    component="article"
    sx={{
      display: "grid",
      gridTemplateColumns: { xs: "1fr", sm: job.image ? "48px 1fr" : "1fr" },
      gap: { xs: 2, sm: 4 },
      py: { xs: 4, md: 5 },
      borderTop: 1,
      borderColor: "divider",
      "&:first-of-type": { borderTop: 0, pt: 0 },
    }}
  >
    {job.image && (
      <Box
        sx={{
          width: 48,
          height: 48,
          border: 1,
          borderColor: "divider",
          // Always white: several marks are dark artwork on a transparent
          // ground and would disappear against the dark theme.
          bgcolor: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 0.75,
        }}
      >
        <Box
          component="img"
          src={job.image}
          alt=""
          aria-hidden="true"
          loading="lazy"
          sx={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
        />
      </Box>
    )}

    <Box>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        alignItems={{ sm: "baseline" }}
        justifyContent="space-between"
        spacing={{ xs: 0.5, sm: 2 }}
        sx={{ mb: 1 }}
      >
        <Typography variant="h4" component="h2">
          {job.title}
        </Typography>
        <Typography
          variant="overline"
          sx={{ color: "text.secondary", whiteSpace: "nowrap" }}
        >
          {formatTenure(job)}
        </Typography>
      </Stack>

      <Typography variant="body2" sx={{ color: "text.secondary", mb: 1.5 }}>
        {job.company}
      </Typography>

      {job.description && (
        <Typography sx={{ color: "text.secondary", maxWidth: MEASURE }}>
          {job.description}
        </Typography>
      )}
    </Box>
  </Box>
);

export default JobCard;
