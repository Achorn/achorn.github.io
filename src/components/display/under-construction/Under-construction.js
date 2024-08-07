import { ReactComponent as AcornSvg } from "../../../assets/acorn.svg";
import "./Under-construction.css";

function UnderConstruction({ description = "" }) {
  return (
    <div className="Under-construction">
      <h2
        id="under-construction-text"
        style={{ fontweight: 600, fontSize: "40Px" }}
      >
        {description}
      </h2>
      <div className="Construction-stamp">
        <h3 id="under-construction-text">UNDER </h3>
        <AcornSvg className="Acorn-logo" />
        <h3 id="under-construction-text"> CONSTRUCTION</h3>
      </div>
    </div>
  );
}

export default UnderConstruction;
