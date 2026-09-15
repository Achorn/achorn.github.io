import { Box, Container, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import { CONTENT_MAX_WIDTH } from "./constants";

/** App shell: fixed nav, routed page, footer. Rendered once, around every route. */
const Layout = () => (
  <Box
    sx={{
      bgcolor: "background.default",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      // Project bands run the full width of the window; clip rather than
      // hide so the sticky app bar keeps working.
      overflowX: "clip",
    }}
  >
    <ScrollToTop />
    <NavBar />
    <Container
      maxWidth={false}
      sx={{ maxWidth: CONTENT_MAX_WIDTH, width: "100%", flexGrow: 1 }}
    >
      {/* Spacer matching the fixed AppBar. */}
      <Toolbar />
      <Box component="main" sx={{ pt: { xs: 6, md: 10 } }}>
        <Outlet />
      </Box>
      <Footer />
    </Container>
  </Box>
);

export { CONTENT_MAX_WIDTH };
export default Layout;
