import React from "react";
import { Switch, Route, useRouteMatch, useParams } from "react-router-dom";
import Project from "../project";
import CategoryPage from "./category-page";

const ProjectPage = () => {
  const match = useRouteMatch();
  const { projectId } = useParams();

  return (
    <div>
      <Switch>
        <Route exact path={match.url}>
          <Project projectId={projectId} />
        </Route>
        <Route path={`${match.url}/:categoryId`}>
          <CategoryPage />
        </Route>
      </Switch>
    </div>
  );
};
export default ProjectPage;
