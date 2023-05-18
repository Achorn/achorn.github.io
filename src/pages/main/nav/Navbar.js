import SelectableUnderline from "../../../components/functional/Selectable-underline-button";
import "./Navbar.css";

export default function NavBar({ navList, handleClick }) {
  return (
    <div className="Nav-bar">
      <div className="Nav-bar-container">
        {navList.map((item, index) => (
          // <div>
          // {index === 0 ? <div /> : <p>-</p>}
          <SelectableUnderline
            title={item}
            handleClick={() => handleClick(item)}
          />
          // </div>
        ))}
        {/* <SelectableUnderline
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
        /> */}
      </div>
    </div>
  );
}
