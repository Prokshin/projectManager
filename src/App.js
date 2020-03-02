import React from "react";
import "./App.css";

import Navigation from "./components/navigation";

import { DashboardPage, ProjectPage, ProfilePage } from "./components/pages";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <div className="content">
          <Switch>
            <Route
              path="/"
              render={() => <DashboardPage></DashboardPage>}
              exact
            />
            <Route path="/projects" component={ProjectPage} />
            <Route path="/profile" render={() => <ProfilePage />} exact />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
