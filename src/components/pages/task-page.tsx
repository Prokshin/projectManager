import React from "react";
import { useParams } from "react-router-dom";
import Task from "../task";

const TaskPage = () => {
  //const match = useRouteMatch();
  const { taskId } = useParams();
  console.log(taskId);
  return (
    <>
      <Task taskId={taskId} />
    </>
  );
};
export default TaskPage;
