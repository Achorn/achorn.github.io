import { Button, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const NotFound = () => (
  <Stack spacing={3} alignItems="center" sx={{ py: 10 }}>
    <Typography variant="h4" component="h1" fontWeight={500}>
      Nothing here
    </Typography>
    <Typography sx={{ color: "text.secondary" }}>
      That page doesn't exist — or it moved when the site was reorganized.
    </Typography>
    <Button component={RouterLink} to="/" variant="outlined">
      Back home
    </Button>
  </Stack>
);

export default NotFound;
