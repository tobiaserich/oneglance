import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "emotion-theming";
import UserContext from "./hooks/UserContext";
import normal from "./themes/normal";
import GlobalStyles from "./GlobalStyles";
import HeaderContainer from "../src/components/Header";
import UserImg from "../src/components/UserImg";
import LoginPage from "./pages/LoginPage";
import Main from "./pages/Main";
import AddEvent from "./pages/AddEvent";
import EventDetails from "./pages/EventDetails";

function Header() {
  return (
    <HeaderContainer>
      <UserImg thread="header" username="Tobias" />
      <div>oneGlance</div>
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
            <Route exact path="/eventDetails">
              <EventDetails />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </UserContext.Provider>
  );
}

export default App;
