import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Project from "../project";
import CategoryPage from "./category-page";

const ProjectItemPage = props => {
  const match = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route exact path={match.url}>
          <Project projectId={match.params.projectId} />
        </Route>
        <Route path={`${match.url}/:categoryId`}>
          <CategoryPage />
        </Route>
      </Switch>
    </div>
  );
};
export default ProjectItemPage;
