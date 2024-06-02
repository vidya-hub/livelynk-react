import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Constants from "../../utils/constants";
import LeftPage from "./left_page/left_page";
import RightPage from "./right_page/right_page";
import { useDispatch, useSelector } from "react-redux";
import { setUserState } from "../../state/user_state/user_slice";

export default function HomePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = localStorage.getItem(Constants.userLocalStorageKey);
  useEffect(() => {
    if (!user || user === "") {
      toast.error("Please login");
      navigate("/auth");
      return;
    } else {
      const userJson = JSON.parse(user);
      dispatch(setUserState(userJson));
      console.log(userJson);
    }
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, navigate, user]);
  return (
    <div className="relative flex border-r dark:bg-gray-900 h-screen">
      <LeftPage></LeftPage>
      <RightPage></RightPage>
    </div>
  );
}
