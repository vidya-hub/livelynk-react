import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Constants from "../../utils/constants";
import LeftPage from "./left_page/left_page";
import RightPage from "./right_page/right_page";
import { useDispatch, useSelector } from "react-redux";
import { setUserState } from "../../state/user_state/user_slice";
import APIService from "../../api/api_service";

export default function HomePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userState = useSelector(function (state: {
    user: {
      userId: number;
    };
  }) {
    return state.user;
  });
  useEffect(() => {
    const user = localStorage.getItem(Constants.userLocalStorageKey);

    console.log(user);
    if (!user || user === "") {
      toast.error("Please login");
      navigate("/auth");
      return;
    } else {
      const userJson = JSON.parse(user);
      dispatch(setUserState(userJson));
      init();
    }
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate, dispatch]);
  async function init() {
    // APIService.getChatContacts({
    //   userId: userState.userId,
    // });
  }
  return (
    <div className="relative flex border-r dark:bg-gray-900 h-screen">
      <LeftPage></LeftPage>
      <RightPage></RightPage>
    </div>
  );
}
