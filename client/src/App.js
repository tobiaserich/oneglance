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
<<<<<<< HEAD

function Header() {
  return (
    <HeaderContainer>
      <UserImg thread="header" username="Tobias" />
      <div>oneGlance</div>
      <div></div>
    </HeaderContainer>
  );
}

=======
import Header from "./components/Header";
>>>>>>> 781bc92cae92c126816c5559319b5252f8b2249d
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
          <Header />
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
          </Switch>
        </Router>
      </ThemeProvider>
    </UserContext.Provider>
  );
}

export default App;
