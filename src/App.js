import { Route, Routes } from "react-router-dom";
import { ColorModeProvider } from "./theme/ColorModeContext";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Music from "./pages/Music";
import Art from "./pages/Art";
import NotFound from "./pages/NotFound";

const App = () => (
  <ColorModeProvider>
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="experience" element={<Experience />} />
        <Route path="music" element={<Music />} />
        <Route path="art" element={<Art />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </ColorModeProvider>
);

export default App;
