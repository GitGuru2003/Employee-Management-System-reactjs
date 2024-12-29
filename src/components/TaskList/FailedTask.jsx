import React from "react";

const FailedTask = () => {
  return (
    <div className="flex flex-col shrink-0 h-full w-[300px] p-5 bg-yellow-400 rounded-xl">
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
      <div className="mt-2">
        <button
          className="
            w-full
          
          "
        >
          Mark as completed
        </button>
      </div>
    </div>
  );
};

export default FailedTask;
