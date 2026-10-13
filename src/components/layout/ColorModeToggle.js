import { IconButton, Tooltip } from "@mui/material";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { useColorMode } from "../../theme/ColorModeContext";

const ColorModeToggle = (props) => {
  const { mode, toggleColorMode } = useColorMode();
  const nextMode = mode === "light" ? "dark" : "light";

  return (
    <Tooltip title={`Switch to ${nextMode} mode`}>
      <IconButton
        onClick={toggleColorMode}
        aria-label={`Switch to ${nextMode} mode`}
        color="inherit"
        {...props}
      >
        {mode === "light" ? (
          <DarkModeOutlinedIcon fontSize="small" />
        ) : (
          <LightModeOutlinedIcon fontSize="small" />
        )}
      </IconButton>
    </Tooltip>
  );
};

export default ColorModeToggle;
