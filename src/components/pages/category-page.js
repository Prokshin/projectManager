import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Category from "../category";

const CategoryPage = () => {
  const match = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route exact path={match.url}>
          <Category />
        </Route>
        <Route path={`${match.url}/:groupId`}>Страница группы</Route>
      </Switch>
    </div>
  );
};

export default CategoryPage;