import React from "react";
import FlexBetween from "../../components/FlexBetween";
import {
  AppBar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  CssBaseline,
  Divider,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const drawerWidth = 240;
const navItems = ["About", "projects", "Blog", "Contact"];

const Home = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Joshua Achorn
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  // return (

  return (
    <Box sx={{ display: "flex", maxWidth: "1020px" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        elevation={0}
        sx={{
          background: "white",
          color: "primary",
        }}
      >
        <Toolbar
          sx={{
            maxWidth: "1020px",
            width: "100%",
            margin: "auto",
          }}
        >
          <IconButton
            // color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" }, ml: 0 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              color: "text.secondary",
              flexGrow: 1,
              textAlign: "left",
              display: { xs: "none", sm: "block" },
            }}
          >
            Joshua Achorn
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "text.secondary" }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />

        {/* Nav section */}

        {/*

     <FlexBetween>
       <Typography sx={{ color: "text.secondary" }}>Joshua Achorn</Typography>
       <FlexBetween gap={"20px"}>
         <Typography sx={{ color: "text.secondary" }}>About</Typography>

         <Typography sx={{ color: "text.secondary" }}>Projects</Typography>
         <Typography sx={{ color: "text.secondary" }}>Contact</Typography>
         {/* <Typography sx={{ color: "text.secondary" }}>Blog</Typography> */}
        {/* </FlexBetween> */}
        {/* </FlexBetween> */}

        {/* hero section */}
        <Box sx={{ mt: { xs: 0, md: "100px" } }} />
        <Grid container spacing={2} sx={{ pl: "0px" }}>
          <Grid
            item
            order={{ xs: 2, md: 1 }}
            xs={12}
            md={8}
            lg={8}
            align="left"
          >
            <Typography
              variant="h4"
              align="left"
              fontWeight={500}
              sx={{ mb: "20px", fontWeight: 500 }}
            >
              Hello! I'm Joshua, a full stack developer based in SF.
            </Typography>
            <Typography variant="body1" align="left" sx={{ mb: "10px" }}>
              I've had 3 years of working
            </Typography>
            <Typography variant="body1" align="left" sx={{ mb: "10px" }}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
            </Typography>
            <Typography variant="body1" align="left" sx={{ mb: "30px" }}>
              nisi ut culpa qui officia deserunt mollit anim id est laborum."
            </Typography>

            <Button variant="contained">View Linkedin</Button>
            <Button variant="outlined" sx={{ ml: "10px" }}>
              View Github
            </Button>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            lg={4}
            order={{ xs: 1, md: 2 }}
            justifyContent={"right"}
            alignItems={"center"}
          >
            <Box display="flex" justifyContent="flex-end">
              <Card
                sx={{
                  width: { sm: "100%", md: "85%" },
                  height: 350,
                  borderRadius: { sm: 1, md: 4 },
                }}
              >
                <CardMedia
                  component="img"
                  height="100%"
                  image={require("../../assets/selfie.jpg")}
                  alt="profile photo"
                />
              </Card>
            </Box>
          </Grid>
        </Grid>

        {/* About section */}
        {/* <div>ABOUT</div> */}

        {/* Project section */}
        {/* <div>PROJECTS</div> */}

        {/* <div>CONTACT</div> */}
      </Box>
    </Box>
  );
};

export default Home;
