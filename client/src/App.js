import React from "react";
import styled from "@emotion/styled";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
import Header from "./components/Header";
function App() {
  const [username, setUsername] = React.useState("TobiasErich");

  function handleLogin(value) {
    setUsername(value);
  }
  const CustomLink = styled(Link)`
    text-decoration: none;
  `;
  return (
    <UserContext.Provider value={username}>
      <ThemeProvider theme={normal}>
        <Router>
          <GlobalStyles />
          <CustomLink to="/">
            <Header />
          </CustomLink>
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
            <Route path="/eventDetails">
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
