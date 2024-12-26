// import React from "react";
// import Header from "../Other/Header";
// const AdminDashboard = () => {
//   return (
//     <div className="h-screen w-full p-10">
//       <Header />
//       <div className="text-black">
//         <form className="flex w-full  flex-wrap bg-red-200 items-start justify-between">
//           <div className="w-1/2">
//             <div>
//               <h3>Task Title</h3>
//               <input type="text" placeholder="Make a UI design" />
//             </div>
//             <div>
//               <h3>Date</h3>
//               <input type="date" />
//             </div>
//             <div>
//               <h3>Assign to</h3>
//               <input type="text" placeholder="Employee name" />
//             </div>
//             <div>
//               <h3>Category</h3>
//               <input type="text" placeholder="UI/UX" />
//             </div>
//           </div>

//           <div className="w-1/2">
//             <h3>Description</h3>
//             <textarea name="" id=""></textarea>
//           </div>

//           <button>Create Task</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;

import React from "react";
import Header from "../Other/Header";
import CreateTask from "../Other/CreateTask";
import AllTask from "../Other/AllTask";

const AdminDashboard = () => {
  return (
    <div className="h-screen w-full p-10 bg-[#1c1c1c]">
      <Header />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
