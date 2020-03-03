import React from "react";
import Header from "../header";
import { ProjectItemPage } from "../pages";

import { Switch, Route } from "react-router-dom";

import ProjectsList from "../projects-list";

const ProjectsPage = props => {
  return (
    <div>
      <Switch>
        <Route exact path={`/projects`}>
          <Header text="Проекты" icon="folder"></Header>
          <ProjectsList />
        </Route>
        <Route path={`/projects/:projectId`}>
          <ProjectItemPage />
        </Route>
      </Switch>
    </div>
  );
};

export default ProjectsPage;
