import React from "react";
import { useSelector } from "react-redux";

export default function RightPage() {
  const tabsState = useSelector(function (state: {
    homeTab: {
      tabList: {
        name: string;
        isActive: boolean;
      }[];
      activeTab: number;
    };
  }) {
    return state.homeTab;
  });
  return (
    <div className="flex-grow-3 w-4/6">
      <div className="p-4 text-gray-50 h-auto">
        <p>{tabsState.tabList[tabsState.activeTab].name}</p>
      </div>
    </div>
  );
}
