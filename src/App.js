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
            <Route
              path="/projects"
              render={() => <ProjectPage></ProjectPage>}
              exact
            />
            <Route path="/profile" render={() => <ProfilePage />} exact />
            <Route path="/projects/:id" render={() => <h1>gg</h1>} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
