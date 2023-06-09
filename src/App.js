import "./App.css";
import "./pages/main/Main";
import ScrollToTop from "./ScrollToTop";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/main/Main";
import Music from "./pages/music/Music";
import Coding from "./pages/coding/Coding";
import Art from "./pages/art/Art";
import SideNav from "./components/functional/side-nav-bar/SideNavBar";
import Footer from "./components/display/footer/Footer";
import { ThemeProvider } from "./context/ThemeContext";
function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <ScrollToTop />
        <SideNav />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/music" element={<Music />} />
          <Route path="/coding" element={<Coding />} />
          <Route path="/art" element={<Art />} />
        </Routes>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
