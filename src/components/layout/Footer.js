import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import { ReactComponent as AcornIcon } from "../../assets/acorn.svg";
import social, { support } from "../../data/social";

/**
 * One centred column: the mark, the ask, then the socials. The coffee link
 * gets a label and the site's own outlined button rather than a fifth icon,
 * because an unlabelled cup reads as one more profile to follow.
 */
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
      justifyContent: "center",
    }}
  >
    <Stack alignItems="center" spacing={2.25}>
      <AcornIcon
        aria-hidden="true"
        style={{ height: 34, width: "auto", opacity: 0.55 }}
      />

      <Typography variant="body2" sx={{ color: "text.secondary" }}>
        enjoyed something here?
      </Typography>

      <Button
        variant="outlined"
        href={support.href}
        target="_blank"
        rel="noreferrer"
        startIcon={<support.Icon size="17px" />}
      >
        buy me a coffee
      </Button>

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
            <Icon size="22px" />
          </IconButton>
        ))}
      </Stack>
    </Stack>
  </Box>
);

export default Footer;
