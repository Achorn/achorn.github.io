import "./Main.css";
import HeroSection from "./hero/Hero";
import UnderConstruction from "../components/display/under-construction/Under-construction";
function Main() {
  return (
    <header className="Main-header">
      <HeroSection />
      <TopicSection />
      <TopicSection />
      <TopicSection />
    </header>
  );
}

function TopicSection() {
  return (
    <div className="Topic-section">
      <UnderConstruction />
    </div>
  );
}

export default Main;
