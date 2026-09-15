import { Box, IconButton, Stack } from "@mui/material";
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
      justifyContent: "flex-end",
    }}
  >
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
