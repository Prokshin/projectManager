import React from "react";
import { useRouteMatch, Switch, Route } from "react-router-dom";
import Group from "../group/group";

const GroupPage = () => {
  const match = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route exact path={match.url}>
          <Group />
        </Route>
        <Route path={`${match.url}/:groupId`}>Задача</Route>
      </Switch>
    </div>
  );
};
export default GroupPage;
