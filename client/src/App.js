import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "emotion-theming";
import UserContext from "./hooks/UserContext";
import normal from "./themes/normal";
import GlobalStyles from "./GlobalStyles";
import LoginPage from "./pages/LoginPage";
import Main from "./pages/Main";
import AddEvent from "./pages/AddEvent";
import HeaderContainer from "../src/components/Header";
import UserImg from "../src/components/UserImg";

function Header() {
  return (
    <HeaderContainer>
      <UserImg thread="header" username="Tobias" />
      <div>Logo</div>
      <div></div>
    </HeaderContainer>
  );
}

function App() {
  const [username, setUsername] = React.useState("TobiasErich");

  function handleLogin(value) {
    setUsername(value);
  }
  return (
    <UserContext.Provider value={username}>
      <ThemeProvider theme={normal}>
        <Header />
        <Router>
          <GlobalStyles />
          <Switch>
            <Route exact path="/">
              <LoginPage auth={handleLogin} />
            </Route>
            <Route exact path="/overview">
              <Main />
            </Route>
            <Route exact path="/addEvent">
              <AddEvent />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </UserContext.Provider>
  );
}

export default App;
