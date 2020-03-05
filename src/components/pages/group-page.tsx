import React from "react";
import { useRouteMatch, Switch, Route, useParams } from "react-router-dom";
import Group from "../group";
import TaskPage from "./task-page";

const GroupPage = () => {
  const match = useRouteMatch();
  const { groupId } = useParams();
  return (
    <div>
      <Switch>
        <Route exact path={match.url}>
          <Group groupId={groupId} />
        </Route>
        <Route path={`${match.url}/:taskId`}>
          <TaskPage />
        </Route>
      </Switch>
    </div>
  );
};
export default GroupPage;
