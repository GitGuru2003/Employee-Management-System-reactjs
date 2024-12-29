import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  return (
    <div
      id="tasklist"
      className="h-[55%] overflow-x-auto w-full py-5 mt-10 flex items-center justify-start gap-5 flex-nowrap"
    >
      {data.tasks.map((element, index) => {
        if (element.active) {
          return <AcceptTask key={index} data={element} />;
        } else if (element.newTask) {
          return <NewTask key={index} data={element} />;
        } else if (element.completed) {
          return <CompleteTask key={index} data={element} />;
        } else if (element.failed) {
          return <FailedTask key={index} data={element} />;
        }
      })}
    </div>
  );
};

export default TaskList;
