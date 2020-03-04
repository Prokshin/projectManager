import React from "react";
import { useRouteMatch, Switch, Route, useParams } from "react-router-dom";
import Group from "../group";

const GroupPage = () => {
  const match = useRouteMatch();
  const { groupId } = useParams();
  console.log(groupId);
  return (
    <div>
      <Switch>
        <Route exact path={match.url}>
          <Group groupId={groupId} />
        </Route>
        <Route path={`${match.url}/:taskId`}>Задача</Route>
      </Switch>
    </div>
  );
};
export default GroupPage;
