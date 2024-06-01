import React from "react";
import AuthField from "./components/auth_field";
import AuthButton from "./components/auth_button";
import { useDispatch } from "react-redux";
import { toggleIsLogin } from "../../state/auth_state/auth_slice";

export default function Login() {
  const dispatch = useDispatch();

  return (
    <div>
      <AuthField type="email" label="Email" placeholder="Email" />
      <AuthField type="password" label="Password" placeholder="Password" />
      <AuthButton
        label="Login"
        onClick={() => console.log("Login clicked")}
      ></AuthButton>
      <h1 className="text-white font-medium text-end text-sm pt-4">
        Don't have an account?
      </h1>
      <div className=" flex justify-end">
        <h1
          className="text-1xl font-bold mb-1 text-green-400 italic  justify-end"
          onClick={() => {
            dispatch(toggleIsLogin(false));
          }}
        >
          Register
        </h1>
      </div>
    </div>
  );
}
