import { Box, Stack, Typography } from "@mui/material";

const JobCard = ({ job }) => (
  <Stack
    component="article"
    direction={{ xs: "column", sm: "row" }}
    spacing={3}
    sx={{ textAlign: "left", width: "100%" }}
  >
    {job.image && (
      <Box
        sx={{
          flexShrink: 0,
          width: 72,
          height: 72,
          borderRadius: 2,
          overflow: "hidden",
          bgcolor: "background.paper",
        }}
      >
        <Box
          component="img"
          src={job.image}
          alt={`${job.company} logo`}
          sx={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </Box>
    )}

    <Stack spacing={1}>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 0.5, sm: 2 }}
        alignItems={{ sm: "baseline" }}
      >
        <Typography fontWeight={700}>{job.company.toUpperCase()}</Typography>
        <Typography>{job.title}</Typography>
      </Stack>
      <Typography variant="body2" sx={{ color: "text.secondary" }}>
        {job.date}
      </Typography>
      <Typography sx={{ color: "text.secondary" }}>{job.description}</Typography>
    </Stack>
  </Stack>
);

export default JobCard;
