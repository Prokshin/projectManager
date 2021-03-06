import React from "react";
import Header from "../header";
import { ProjectItemPage } from ".";

import { Switch, Route } from "react-router-dom";

import Projects from "../projects";

const ProjectsPage = () => {
  return (
    <div>
      <Switch>
        <Route exact path={`/projects`}>
          <Header text="Проекты" icon="folder"></Header>
          <Projects />
        </Route>
        <Route path={`/projects/:projectId`}>
          <ProjectItemPage />
        </Route>
      </Switch>
    </div>
  );
};

export default ProjectsPage;
