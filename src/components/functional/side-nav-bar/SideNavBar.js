import { navData } from "./navData";
import "./SideNavBar.css";
import { FiMenu, FiArrowLeft } from "react-icons/fi";
import { useState } from "react";
import { NavLink as Link } from "react-router-dom";

export default function SideNav() {
  const [open, setopen] = useState(false);
  const toggleOpen = () => {
    setopen(!open);
  };

  return (
    <div>
      <div className="Side-nav-button-container">
        <FiMenu size="25px" className="Menu-btn" onClick={toggleOpen} />
      </div>
      <div className={open ? "Nav-menu" : "Nav-menu-closed"}>
        <FiArrowLeft
          size="25px"
          className="Close-menu=btn"
          onClick={toggleOpen}
        />
        {navData.map((item) => {
          return (
            <div key={item.id} className="Nav-item">
              <Link to={`${item.link}`}>{item.text}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
