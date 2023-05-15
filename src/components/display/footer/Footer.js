import "./Footer.css";
import { ReactComponent as AcornIcon } from "../../../assets/acorn.svg";

export default function Footer() {
  return (
    <div className="Footer">
      <hr />
      <div className="Footer-header">WHAT'S NEXT</div>
      <AcornIcon className="Footer-logo" />
      <div className="Footer-bottom-text">
        this website was made with | React | JavaScript | All 10 of my fingers
      </div>
    </div>
  );
}
