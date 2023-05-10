import "./Main.css";
import HeroSection from "./hero/Hero";
import UnderConstruction from "../components/display/under-construction/Under-construction";
import SelectableUnderline from "../components/functional/Selectable-underline-button";
function Main() {
  return (
    <header className="Main-header">
      <HeroSection />
      <NavBar />
      <TopicSection id="music" />
      <TopicSection id="coding" />
      <TopicSection id="design" />
    </header>
  );
}

const handleClick = (id) => {
  // handle selection change //visible change to slected button

  const element = document.getElementById(id);
  if (element) {
    // 👇 Will scroll smoothly to the top of the next section
    element.scrollIntoView({ behavior: "smooth" });
  }

  console.log("clicked");
};

function NavBar() {
  return (
    <div className="Nav-bar">
      <div className="Nav-bar-container">
        <SelectableUnderline
          title={"home"}
          handleClick={() => handleClick("hero")}
        />
        {"-"}
        <SelectableUnderline
          title={"music"}
          handleClick={() => handleClick("music")}
        />
        {"-"}
        <SelectableUnderline
          title={"coding"}
          handleClick={() => handleClick("coding")}
        />
        {"-"}
        <SelectableUnderline
          title={"design"}
          handleClick={() => handleClick("design")}
        />
      </div>
    </div>
  );
}

function TopicSection({ id }) {
  return (
    <div id={id} className="Topic-section">
      <UnderConstruction />
    </div>
  );
}

export default Main;
