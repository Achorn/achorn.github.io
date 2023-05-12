import SelectableUnderline from "../../../components/functional/Selectable-underline-button";
import "./Navbar.css";

export default function NavBar({ handleClick }) {
  return (
    <div className="Nav-bar">
      <div className="Nav-bar-container">
        <SelectableUnderline
          title={"home"}
          handleClick={() => handleClick("hero")}
        />
        <p>-</p>
        <SelectableUnderline
          title={"music"}
          handleClick={() => handleClick("music")}
        />
        <p>-</p>
        <SelectableUnderline
          title={"coding"}
          handleClick={() => handleClick("coding")}
        />
        <p>-</p>
        <SelectableUnderline
          title={"art"}
          handleClick={() => handleClick("art")}
        />
      </div>
    </div>
  );
}
