import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from '@material-ui/core'
import { createMuiTheme } from '@material-ui/core/styles'
import UserTable from "./components/userTable"

import "./styles.css";

export const light = {
  palette: {
    type: 'light',
  },
}

export const dark = {
  palette: {
    type: 'dark',
  },
}
function App() {
  const [theme, setTheme] = useState(true)
  const icon = !theme ? <Brightness7Icon /> : <Brightness3Icon /> 
  // Icons imported from `@material-ui/icons`
  const appliedTheme = createMuiTheme(theme ? light : dark)
///////////////////
  const [darkMode, setDarkMode] = React.useState(getInitialMode());
  React.useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkMode));
  }, [darkMode]);

  function getInitialMode() {
    const isReturningUser = "dark" in localStorage;
    const savedMode = JSON.parse(localStorage.getItem("dark"));
    const userPrefersDark = getPrefColorScheme();

    if (isReturningUser) {
      return savedMode;
    } else if (userPrefersDark) {
      return true;
    } else {
      return false;
    }
  }

  function getPrefColorScheme() {
    if (!window.matchMedia) return;

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <nav>
        <div className="toggle-container">
          <span style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
          <span className="toggle">
            <input
              checked={darkMode}
              onChange={() => setDarkMode(prevMode => !prevMode)}
              id="checkbox"
              className="checkbox"
              type="checkbox"
            />
            <label htmlFor="checkbox" />
          </span>
          <span style={{ color: darkMode ? "slateblue" : "grey" }}>☾</span>
        </div>
      </nav>
      <main>
        <h1>Hello Team!</h1>
        {/* <h1>{darkMode ? "Dark Mode" : "Light Mode"}</h1> */}
        {/* <h2>Toggle the switch to see some magic happen!</h2> */}

        <div class = "container">
          <div className="centerwrapper">
            <div className = "square"> <img src="img/png/001-happy.png" alt="BigCo Inc. logo"/> </div>
            <div className = "square"> <img src="img/png/003-happy-1.png" alt="BigCo Inc. logo"/> </div>
            <div className = "square"> <img src="img/png/004-confused.png" alt="BigCo Inc. logo"/> </div>
            <div className = "square"> <img src="img/png/006-surprised.png" alt="BigCo Inc. logo"/> </div>
            <div className = "square"> <img src="img/png/002-sad.png" alt="BigCo Inc. logo"/> </div>
          </div>
        </div>

        <UserTable></UserTable>

      </main>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
