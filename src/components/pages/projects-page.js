import React, { Component } from "react";
import Header from "../header";
import { ProjectItemPage } from "../pages";

import { Link, Switch, Route } from "react-router-dom";

export default class ProjectsPage extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/projects" exact>
            <Header text="Проекты" icon="folder"></Header>
            <Link to="/projects/1">Проект 1</Link>
          </Route>
          <Route
            path="/projects/:id"
            render={() => <ProjectItemPage />}
            exact
          />
        </Switch>
      </div>
    );
  }
}
