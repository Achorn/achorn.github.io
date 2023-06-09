import { useTheme } from "../../../context/ThemeContext";

function DarkModeSlider() {
  const { dark, toggleTheme } = useTheme();
  return (
    <div>
      <div>
        Dark Mode
        <input
          value={dark}
          type="checkbox"
          onChange={(e) => toggleTheme(e.target.checked)}
        />
      </div>
    </div>
  );
}

export default DarkModeSlider;
