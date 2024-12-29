import React, { useEffect, useState } from "react";

const Header = () => {
  // const [username, setUserName] = useState("");

  // useEffect(() => {
  //   !data ? setUserName("admin") : setUserName(data.firstName);
  // }, []);
  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    window.location.reload();
  };

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello, <br />
        <span className="text-3xl font-semibold">username 👋🏻</span>
      </h1>
      <button
        className="bg-red-500 text-white text-lg rounded-sm px-5 py-2 hover:bg-red-600"
        onClick={logOutUser}
      >
        Logout
      </button>
    </div>
  );
};

export default Header;
