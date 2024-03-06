import "./App.css";
import "./pages/main/Main";
import ScrollToTop from "./ScrollToTop";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/display/footer/Footer";
// import { ThemeProvider } from "./context/ThemeContext";
import Home from "./pages/home/Home";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import Nav from "./components/Nav/Nav";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {/* <ScrollToTop /> */}
        {/* <SideNav /> */}
        <Nav>
          <Routes>
            {/* <Route exact path="/" element={<Main />} /> */}

            <Route exact path="/" element={<Home />} />
            {/* <Route path="/music" element={<Music />} /> */}
            {/* <Route path="/coding" element={<Coding />} /> */}
            {/* <Route path="/art" element={<Art />} /> */}
          </Routes>
          {/* <Footer /> */}
        </Nav>
      </div>
    </ThemeProvider>
  );
}

export default App;
