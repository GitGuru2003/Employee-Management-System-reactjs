import React from "react";

const TaskList = () => {
  return (
    // <div
    //   id="tasklist"
    //   className=" h-[55%] overflow-x-auto w-full py-5 mt-10 flex items-center justify-start gap-5 flex-nowrap"
    // >
    //   <div className="flex shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl">
    //     <div className="flex justify-between items-center">
    //       <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
    //       <h4 className="text-base">20 feb 2024</h4>
    //     </div>
    //     <h2 className="mt-5 text-2xl font-semibold">Make a youtube video</h2>
    //   </div>

    //   {/* <div className="flex shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl mx-2"></div>
    //   <div className="flex shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl mx-2"></div>
    //   <div className="flex shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl mx-2"></div>
    //   <div className="flex shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl mx-2"></div>
    //   <div className="flex shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl mx-2"></div>
    //   <div className="flex shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl mx-2"></div>
    //   <div className="flex shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl mx-2"></div> */}
    // </div>
    <div
      id="tasklist"
      className="h-[55%] overflow-x-auto w-full py-5 mt-10 flex items-center justify-start gap-5 flex-nowrap"
    >
      <div className="flex flex-col shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl">
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
      <div className="flex flex-col shrink-0 h-full w-[300px] p-5 bg-green-400 rounded-xl">
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
      <div className="flex flex-col shrink-0 h-full w-[300px] p-5 bg-blue-400 rounded-xl">
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
      </div>
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

      {/* Add more cards here */}
    </div>
  );
};

export default TaskList;
