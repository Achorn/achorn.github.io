import { Box, IconButton, Stack, Typography } from "@mui/material";
import social from "../../data/social";

const Footer = () => (
  <Box
    component="footer"
    sx={{
      mt: { xs: 10, md: 16 },
      pt: 4,
      pb: 6,
      borderTop: 1,
      borderColor: "divider",
      display: "flex",
      flexDirection: { xs: "column", sm: "row" },
      alignItems: { xs: "flex-start", sm: "center" },
      justifyContent: "space-between",
      gap: 3,
    }}
  >
    <Box>
      <Typography variant="overline" component="p" sx={{ color: "text.secondary" }}>
        joshua achorn
      </Typography>
      <Typography variant="body2" sx={{ color: "text.secondary", mt: 0.5 }}>
        built with react. all ten fingers.
      </Typography>
    </Box>

    <Stack direction="row" spacing={0.5}>
      {social.map(({ id, label, Icon, href }) => (
        <IconButton
          key={id}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          sx={{
            color: "text.secondary",
            "&:hover": { color: "primary.main", bgcolor: "transparent" },
          }}
        >
          <Icon size="17px" />
        </IconButton>
      ))}
    </Stack>
  </Box>
);

export default Footer;
