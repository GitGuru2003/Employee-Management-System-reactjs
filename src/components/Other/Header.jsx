import React from "react";

const Header = ({ data }) => {
  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello, <br />
        <span className="text-3xl font-semibold">{data.firstName} 👋🏻</span>
      </h1>
      <button className="bg-red-500 text-white text-lg rounded-sm px-5 py-2 hover:bg-red-600">
        Logout
      </button>
    </div>
  );
};

export default Header;
