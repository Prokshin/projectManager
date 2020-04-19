import React from "react";
import { Switch, Route, useRouteMatch, useParams } from "react-router-dom";
import Category from "../category";
import GroupPage from "./group-page";

interface ICategoryPageProps {
  projectId: string | undefined;
}

const CategoryPage = ({ projectId }: ICategoryPageProps) => {
  const match = useRouteMatch();
  const { categoryId } = useParams();

  return (
    <div>
      <Switch>
        <Route exact path={match.url}>
          <Category projectId={projectId} categoryId={categoryId} />
        </Route>
        <Route path={`${match.url}/:groupId`}>
          <GroupPage projectId={projectId} categoryId={categoryId} />
        </Route>
      </Switch>
    </div>
  );
};

export default CategoryPage;
