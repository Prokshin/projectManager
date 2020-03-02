import React from "react";
import "./App.css";

import Navigation from "./components/navigation";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <div className="content">
          <Route path="/" render={() => <h2>Актуальные задачи</h2>} exact />
          <Route path="/projects" render={() => <h2>Проекты </h2>} exact />
          <Route
            path="/profile"
            render={() => <h2>Профиль пользователя </h2>}
            exact
          />
        </div>
      </Router>
    </div>
  );
}

export default App;
