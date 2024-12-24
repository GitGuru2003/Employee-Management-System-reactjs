import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log({ email: email, password: password });
    setEmail("");
    setPassword("");
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-red-600 p-20 border-emerald-600 rounded-xl">
        <form
          className="flex flex-col items-center justify-center"
          onSubmit={submitHandler}
        >
          <input
            required
            className="outline-none bg-transparent placeholder:text-gray-400 border-2 border-emerald-600 py-3 px-5 text-xl rounded-full"
            type="email"
            placeholder="Enter your email"
            onChange={emailHandler}
            value={email}
          />
          <input
            required
            className="outline-none bg-transparent placeholder:text-gray-400 border-2 border-emerald-600 mt-4 py-3 px-5 text-xl rounded-full"
            type="password"
            placeholder="Enter your password"
            onChange={passwordHandler}
            value={password}
          />
          <button className="text-white outline-none placeholder:text-white  bg-emerald-600 mt-5 py-3 px-5 text-xl rounded-full">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
