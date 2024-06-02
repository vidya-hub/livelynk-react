import React, { useRef } from "react";
import AuthButton from "./components/auth_button";
import AuthField from "./components/auth_field";
import {
  toggleIsLogin,
  toggleIsLoginLoading,
} from "../../state/auth_state/auth_slice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import APIService from "../../api/api_service";
import { setUserState } from "../../state/user_state/user_slice";
import { useNavigate } from "react-router-dom";
import User from "../../types/user";
import Constants from "../../utils/constants";

export default function Register() {
  const dispatch = useDispatch();
  const emailRef = useRef<HTMLInputElement>(null);
  const userNameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const createPasswordRef = useRef<HTMLInputElement>(null);
  const isLoginLoading = useSelector(function (state: {
    auth: { isLoginLoading: boolean };
  }) {
    return state.auth.isLoginLoading;
  });
  const navigate = useNavigate();

  async function register() {
    const userName = userNameRef.current?.value;
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    const createPassword = createPasswordRef.current?.value;
    dispatch(toggleIsLoginLoading(true));
    if (
      userName === "" ||
      email === "" ||
      password === "" ||
      createPassword === ""
    ) {
      toast.error("Please fill all fields");
      dispatch(toggleIsLoginLoading(false));
    } else if (password !== createPassword) {
      toast.error("Passwords do not match");
      dispatch(toggleIsLoginLoading(false));
    }

    if (email && password && createPassword && userName) {
      console.log(email, password, createPassword, userName);

      await APIService.register({
        email: email,
        password: password,
        userName: userName,
      })
        .then((res: { message: string; user: User }) => {
          localStorage.setItem(
            Constants.userLocalStorageKey,
            res.user ? JSON.stringify(res.user) : ""
          );
          dispatch(setUserState(res.user));
          toast.success(res.message);
          navigate("/home");
        })
        .catch((error) => {
          if (error instanceof Object && error.data) {
            console.log(error.data.message);
            toast.error(error.data.message);
          }
        });
      dispatch(toggleIsLoginLoading(false));
    }
  }
  return (
    <div>
      <AuthField
        ref={userNameRef}
        type="userName"
        label="UserName *"
        placeholder="UserName"
      />
      <AuthField
        ref={emailRef}
        type="email"
        label="Email *"
        placeholder="Email"
      />
      <AuthField
        ref={passwordRef}
        type="password"
        label="Password *"
        placeholder="Password"
        isPassword={true}
      />
      <AuthField
        ref={createPasswordRef}
        type="password"
        label="Confirm Password *"
        placeholder="Confirm Password"
        isPassword={true}
      />
      <AuthButton
        loading={isLoginLoading}
        label="Register"
        onClick={() => {
          register();
        }}
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
