import React from "react";
import { useParams } from "react-router-dom";
import Task from "../task";
interface IGroupPageProps {
  projectId: string | undefined;
  categoryId: string | undefined;
  groupId: string | undefined;
}
const TaskPage = (props: IGroupPageProps) => {
  //const match = useRouteMatch();
  const { taskId } = useParams();

  return (
    <>
      <Task taskId={taskId} {...props} />
    </>
  );
};
export default TaskPage;
