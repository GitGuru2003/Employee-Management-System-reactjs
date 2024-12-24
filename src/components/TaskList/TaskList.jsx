import React from "react";

const TaskList = () => {
  return (
    <div
      id="tasklist"
      className=" h-[55%] overflow-x-auto w-full py-5 mt-10 flex items-center justify-start gap-5 flex-nowrap"
    >
      <div className="flex shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl mx-2"></div>
      <div className="flex shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl mx-2"></div>
      <div className="flex shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl mx-2"></div>
      <div className="flex shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl mx-2"></div>
      <div className="flex shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl mx-2"></div>
    </div>
  );
};

export default TaskList;
