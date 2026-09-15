import { Box, Container, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import { CONTENT_MAX_WIDTH } from "./constants";

/** App shell: fixed nav, routed page, footer. Rendered once, around every route. */
const Layout = () => (
  <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
    <ScrollToTop />
    <NavBar />
    <Container
      component="main"
      maxWidth={false}
      sx={{ maxWidth: CONTENT_MAX_WIDTH, textAlign: "center" }}
    >
      {/* Spacer matching the fixed AppBar. */}
      <Toolbar />
      <Box sx={{ pt: { xs: 4, md: 8 } }}>
        <Outlet />
      </Box>
      <Footer />
    </Container>
  </Box>
);

export { CONTENT_MAX_WIDTH };
export default Layout;
