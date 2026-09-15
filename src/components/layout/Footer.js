import { Box, Divider, IconButton, Stack, Typography } from "@mui/material";
import { ReactComponent as AcornIcon } from "../../assets/acorn.svg";
import social from "../../data/social";

const Footer = () => (
  <Box component="footer" sx={{ mt: 12, pb: 6 }}>
    <Divider />
    <Typography
      variant="overline"
      component="p"
      sx={{ mt: 4, letterSpacing: 2, color: "text.secondary" }}
    >
      What's left?
    </Typography>

    <Stack direction="row" spacing={1} justifyContent="center" sx={{ my: 2 }}>
      {social.map(({ id, label, Icon, href }) => (
        <IconButton
          key={id}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          sx={{ color: "text.primary" }}
        >
          <Icon size="24px" />
        </IconButton>
      ))}
    </Stack>

    <AcornIcon
      aria-hidden="true"
      style={{ height: 40, width: "auto", opacity: 0.6 }}
    />

    <Typography variant="body2" sx={{ mt: 2, color: "text.secondary" }}>
      this website was made with | React | JavaScript | All 10 of my fingers
    </Typography>
  </Box>
);

export default Footer;
