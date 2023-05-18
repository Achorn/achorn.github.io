import "./App.css";
import "./pages/main/Main";
import ScrollToTop from "./ScrollToTop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/main/Main";
import Music from "./pages/music/Music";
import Coding from "./pages/coding/Coding";
import Art from "./pages/art/Art";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/music" element={<Music />} />
          <Route path="/coding" element={<Coding />} />
          <Route path="/art" element={<Art />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
