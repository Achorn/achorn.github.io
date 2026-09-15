import { useState } from "react";
import { Link as RouterLink, NavLink } from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import navigation from "../../data/navigation";
import ColorModeToggle from "./ColorModeToggle";
import { CONTENT_MAX_WIDTH } from "./constants";

const DRAWER_WIDTH = 260;

/** One nav entry, as either a router link or an outbound link. */
const navLinkProps = (item) =>
  item.external
    ? { component: "a", href: item.href, target: "_blank", rel: "noreferrer" }
    : { component: NavLink, to: item.to };

/** Heavier and tighter than the nav links, which is all it needs to lead. */
const wordmarkSx = {
  fontSize: "clamp(0.875rem, 0.85rem + 0.12vw, 0.9375rem)",
  fontWeight: 700,
  letterSpacing: "-0.01em",
  color: "text.primary",
  textDecoration: "none",
};

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeDrawer = () => setMobileOpen(false);

  const drawer = (
    <Box onClick={closeDrawer} sx={{ py: 2 }}>
      <Typography sx={{ ...wordmarkSx, display: "block", px: 3, pb: 2 }}>
        joshua achorn
      </Typography>
      <Divider />
      <List sx={{ pt: 1 }}>
        {navigation.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              {...navLinkProps(item)}
              sx={{
                px: 3,
                color: "text.secondary",
                "&.active": { color: "text.primary" },
                "&.active .MuiTypography-root": { fontWeight: 600 },
              }}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{ fontSize: 15.5 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar component="header" position="fixed">
        <Toolbar
          disableGutters
          sx={{
            maxWidth: CONTENT_MAX_WIDTH,
            width: "100%",
            mx: "auto",
            px: { xs: 2, sm: 3 },
            minHeight: { xs: 62, md: 74 },
            gap: 2,
          }}
        >
          <IconButton
            aria-label="open navigation"
            edge="start"
            onClick={() => setMobileOpen((open) => !open)}
            sx={{ display: { md: "none" }, color: "text.primary", ml: -1 }}
          >
            <MenuIcon fontSize="small" />
          </IconButton>

          <Typography
            component={RouterLink}
            to="/"
            sx={{ ...wordmarkSx, flexGrow: 1 }}
          >
            joshua achorn
          </Typography>

          <Box
            component="nav"
            aria-label="Main"
            sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 0.5 }}
          >
            {navigation.map((item) => (
              <Button
                key={item.label}
                {...navLinkProps(item)}
                variant="text"
                sx={{
                  color: "text.secondary",
                  "&.active": { color: "text.primary", fontWeight: 600 },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          <ColorModeToggle sx={{ color: "text.secondary", mr: -1 }} />
        </Toolbar>
      </AppBar>

      <Box component="nav" aria-label="Mobile">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={closeDrawer}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: DRAWER_WIDTH,
              bgcolor: "background.default",
              backgroundImage: "none",
              borderRight: 1,
              borderColor: "divider",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};

export default NavBar;
