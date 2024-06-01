import React from "react";
import AuthButton from "./components/auth_button";
import AuthField from "./components/auth_field";
import { toggleIsLogin } from "../../state/auth_state/auth_slice";
import { useDispatch } from "react-redux";

export default function Register() {
  const dispatch = useDispatch();

  return (
    <div>
      <AuthField type="email" label="Email" placeholder="Email" />
      <AuthField type="password" label="Password" placeholder="Password" />
      <AuthField
        type="password"
        label="Confirm Password"
        placeholder="Password"
      />
      <AuthButton
        label="Register"
        onClick={() => console.log("Register clicked")}
      ></AuthButton>
      <h1 className="text-white font-medium text-end text-sm pt-4">
        Already have an account?
      </h1>
      <div className=" flex justify-end">
        <p
          className="text-1xl font-bold mb-1 text-green-400 italic justify-end"
          onClick={() => {
            dispatch(toggleIsLogin(true));
          }}
        >
          Login
        </p>
      </div>
    </div>
  );
}
