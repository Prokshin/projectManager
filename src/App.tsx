import React from "react";
import "./App.css";

import Navigation from "./components/navigation";

import { DashboardPage, ProjectPage, ProfilePage } from "./components/pages";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreatePage from "./components/pages/create-page";

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <div className="content">
          <Switch>
            <Route path="/" exact>
              <DashboardPage />
            </Route>
            <Route path="/create">
              <CreatePage />
            </Route>
            <Route path="/projects">
              <ProjectPage />
            </Route>
            <Route path="/profile">
              <ProfilePage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;

//Icon Font
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "ion-icon": any;
    }
  }
}
