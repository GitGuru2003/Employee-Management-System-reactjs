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
      {data.tasks.map((element) => {
        if (element.active) {
          return <AcceptTask />;
        } else if (element.newTask) {
          return <NewTask />;
        } else if (element.completed) {
          return <CompleteTask />;
        } else if (element.failed) {
          return <FailedTask />;
        }
      })}
      {/* <AcceptTask />
      <NewTask />
      <CompleteTask />
      <FailedTask /> */}

      <div className="flex flex-col shrink-0 h-full w-[300px] p-5 bg-pink-400 rounded-xl">
        <div className="flex justify-between items-center">
          {/* Priority on the left */}
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
          {/* Date on the right */}
          <h4 className="text-sm">20 Feb 2024</h4>
        </div>
        {/* Task description centered under priority and date */}
        <h2 className="mt-5 text-2xl font-semibold text-center">
          Make a YouTube Video
        </h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          sed omnis soluta quo blanditiis deserunt.
        </p>
      </div>
    </div>
  );
};

export default TaskList;
