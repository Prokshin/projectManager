import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import CategoryList from "../category-list";

const ProjectItemPage = props => {
  const match = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route exact path={match.url}>
          <CategoryList projectId={match.params.projectId} />
        </Route>
        <Route path={`${match.url}/:id`}>Страница категории</Route>
      </Switch>
    </div>
  );
};
export default ProjectItemPage;
