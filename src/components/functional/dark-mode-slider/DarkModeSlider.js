import { useTheme } from "../../../context/ThemeContext";
import "./DarkModeSlider.css";

function DarkModeSlider() {
  const { dark, toggleTheme } = useTheme();

  return (
    <div>
      <div>
        <label className="switch">
          <input
            type="checkbox"
            onChange={(e) => toggleTheme(e.target.checked)}
            checked={dark}
          />
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  );
}

export default DarkModeSlider;
