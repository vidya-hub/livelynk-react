import React, { useRef } from "react";
import AuthField from "./components/auth_field";
import AuthButton from "./components/auth_button";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleIsLogin,
  toggleIsLoginLoading,
} from "../../state/auth_state/auth_slice";
import { toast } from "react-toastify";
import ApiService from "../../api/api_service";
import User from "../../types/user";
import { setUserState } from "../../state/user_state/user_slice";
import { useNavigate } from "react-router-dom";
import Constants from "../../utils/constants";

export default function Login() {
  const dispatch = useDispatch();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const isLoginLoading = useSelector(function (state: {
    auth: { isLoginLoading: boolean };
  }) {
    return state.auth.isLoginLoading;
  });

  async function login() {
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    if (email && password) {
      dispatch(toggleIsLoginLoading(true));
      await ApiService.login({
        email: email,
        password: password,
      })
        .then((res: { message: string; user: User }) => {
          console.log();

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
    } else {
      toast.error("Please enter your email and password");
    }
  }
  return (
    <div>
      <form>
        <AuthField
          ref={emailRef}
          type="email"
          label="Email"
          placeholder="Email"
        />
        <AuthField
          ref={passwordRef}
          type="password"
          label="Password"
          placeholder="Password"
          isPassword={true}
        />
      </form>
      <div className="login-buttons relative">
        <AuthButton
          loading={isLoginLoading}
          label="Login"
          onClick={() => login()}
        />
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
    </div>
  );
}
