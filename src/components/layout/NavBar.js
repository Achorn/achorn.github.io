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

const DRAWER_WIDTH = 240;

/** One nav entry, as either a router link or an outbound link. */
const navLinkProps = (item) =>
  item.external
    ? { component: "a", href: item.href, target: "_blank", rel: "noreferrer" }
    : { component: NavLink, to: item.to };

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeDrawer = () => setMobileOpen(false);

  const drawer = (
    <Box onClick={closeDrawer} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Joshua Achorn
      </Typography>
      <Divider />
      <List>
        {navigation.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              {...navLinkProps(item)}
              sx={{
                textAlign: "center",
                "&.active": { fontWeight: 700 },
              }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        component="header"
        elevation={0}
        sx={{
          bgcolor: "background.default",
          color: "text.secondary",
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <Toolbar sx={{ maxWidth: CONTENT_MAX_WIDTH, width: "100%", mx: "auto" }}>
          <IconButton
            aria-label="open navigation"
            edge="start"
            color="inherit"
            onClick={() => setMobileOpen((open) => !open)}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{
              flexGrow: 1,
              textAlign: "left",
              color: "inherit",
              textDecoration: "none",
              display: { xs: "none", sm: "block" },
            }}
          >
            Joshua Achorn
          </Typography>

          <Box
            component="nav"
            aria-label="Main"
            sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
          >
            {navigation.map((item) => (
              <Button
                key={item.label}
                {...navLinkProps(item)}
                sx={{
                  color: "text.secondary",
                  "&.active": { color: "text.primary", fontWeight: 700 },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          <ColorModeToggle sx={{ ml: { xs: "auto", md: 1 } }} />
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
