import React from "react";
import { Switch, Route, useRouteMatch, useParams } from "react-router-dom";
import Category from "../category";
import GroupPage from "./group-page";

const CategoryPage = () => {
  const match = useRouteMatch();
  const { categoryId } = useParams();
  console.log(categoryId);
  return (
    <div>
      <Switch>
        <Route exact path={match.url}>
          <Category categoryId={categoryId} />
        </Route>
        <Route path={`${match.url}/:groupId`}>
          <GroupPage />
        </Route>
      </Switch>
    </div>
  );
};

export default CategoryPage;
