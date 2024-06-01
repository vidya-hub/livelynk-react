import React from "react";
import Login from "./login";
import Register from "./register";
import { useSelector } from "react-redux";

export default function AuthScreen() {
  const isLogin = useSelector(function (state: { auth: { isLogin: boolean } }) {
    console.log(state);
    return state.auth.isLogin;
  });
  console.log(isLogin);

  return (
    <div className="dark:bg-gray-950">
      <div className="items-center justify-center scrollbar-hide w-full h-screen flex">
        <div className=" max-w-sm bg-white border border-gray-800 rounded-lg shadow dark:bg-gray-900 dark:border-gray-70 p-10">
          <h1 className="text-3xl font-bold text-center mb-5 text-white italic ">
            LiveLynk
          </h1>
          {isLogin ? <Login /> : <Register />}
        </div>
      </div>
    </div>
  );
}
