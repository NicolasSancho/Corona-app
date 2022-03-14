import { useState } from "react";
import "./App.css";
import IconButton from "@mui/material/IconButton";
import { AppBar } from "@mui/material";
import ChartsContainer from "./containers/chartsCointarner/ChartsCotainer";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { dark } from "@mui/material/styles/createPalette";
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  const changeMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <ThemeProvider theme={darkTheme}>
      <header className="app-header">
        <AppBar position="static">
          <IconButton sx={{ ml: 1 }} onClick={changeMode} color="inherit">
            {dark ? <Brightness4Icon /> : <Brightness7Icon />}
          </IconButton>
        </AppBar>
      </header>
      <ChartsContainer theme={darkTheme} />
    </ThemeProvider>
  );
}

export default App;
