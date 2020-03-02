import React, { Component } from "react";
import Header from "../header";
import { ProjectItemPage, ProjectPage } from "../pages";

import {
  Link,
  Switch,
  Route,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Card from "../card";

const ProjectsPage = props => {
  const match = useRouteMatch();
  console.log(match);
  return (
    <div>
      <Switch>
        <Route exact path={`/projects`}>
          <Header text="Проекты" icon="folder"></Header>
          <div className="flex-wrapper">
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </div>
        </Route>
        <Route path={`/projects/:projectId`}>
          <ProjectItemPage></ProjectItemPage>
        </Route>
      </Switch>
    </div>
  );
};

export default ProjectsPage;
