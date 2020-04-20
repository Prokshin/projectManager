import React from "react";
import { useRouteMatch, Switch, Route, useParams } from "react-router-dom";
import Group from "../group";
import TaskPage from "./task-page";
interface IGroupPageProps {
  projectId: string | undefined;
  categoryId: string | undefined;
}
const GroupPage = ({ projectId, categoryId }: IGroupPageProps) => {
  const match = useRouteMatch();
  const { groupId } = useParams();
  return (
    <div>
      <Switch>
        <Route exact path={match.url}>
          <Group projectId={projectId} categoryId={categoryId} groupId={groupId} />
        </Route>
        <Route path={`${match.url}/:taskId`}>
          <TaskPage projectId={projectId} categoryId={categoryId} groupId={groupId} />
        </Route>
      </Switch>
    </div>
  );
};
export default GroupPage;
