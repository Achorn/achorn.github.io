import { useTheme } from "../../../context/ThemeContext";
import "./DarkModeSlider.css";

function DarkModeSlider() {
  const { dark, toggleTheme } = useTheme();
  return (
    <div>
      <div>
        <label class="switch">
          <input
            value={dark}
            type="checkbox"
            onChange={(e) => toggleTheme(e.target.checked)}
          />{" "}
          <span class="slider round"></span>
        </label>
      </div>
    </div>
  );
}

export default DarkModeSlider;
