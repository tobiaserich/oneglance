import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "emotion-theming";
import UserContext from "./hooks/UserContext";
import normal from "./themes/normal";
import GlobalStyles from "./GlobalStyles";
import LoginPage from "./pages/LoginPage";
import Main from "./pages/Main";
import AddEvent from "./pages/AddEvent";
import EventDetails from "./pages/EventDetails";
import Poll from "./pages/Poll";
import Task from "./pages/Task";
import LinkNoDeco from "./components/LinkNoDeco";

import Header from "./components/Header";
function App() {
  const [username, setUsername] = React.useState("TobiasErich");

  function handleLogin(value) {
    setUsername(value);
  }

  return (
    <UserContext.Provider value={username}>
      <ThemeProvider theme={normal}>
        <Router>
          <GlobalStyles />
          <LinkNoDeco to="/">
            <Header />
          </LinkNoDeco>
          <Switch>
            <Route exact path="/">
              <LoginPage auth={handleLogin} />
            </Route>
            <Route exact path="/overview" component={Main} />
            <Route exact path="/addEvent" component={AddEvent} />
            <Route path="/eventDetails/">
              <EventDetails />
            </Route>
            <Route path="/poll">
              <Poll />
            </Route>
            <Route path="/task">
              <Task />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </UserContext.Provider>
  );
}

export default App;
