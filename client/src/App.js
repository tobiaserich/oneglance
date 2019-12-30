import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "emotion-theming";
import normal from "./themes/normal";
import GlobalStyles from "./GlobalStyles";
import LoginPage from "./pages/LoginPage";
import Main from "./pages/Main";

function NotFound() {
  return "Du musst dich erst einloggen";
}

function App() {
  const [auth, setAuth] = React.useState(false);

  function handleLogin(value) {
    setAuth(value);
  }
  return (
    <ThemeProvider theme={normal}>
      <Router>
        <GlobalStyles />
        <Switch>
          <Route exact path="/overview">
            <Main />
          </Route>
          <Route exact path="/">
            <LoginPage auth={handleLogin} status={auth} />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
