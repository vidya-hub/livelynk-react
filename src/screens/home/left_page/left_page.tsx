import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../../../state/home_state/home_tab_slice";
import ChatContactsTabContent from "./chats_tab/chat_contacts_tab_content";
import ContactTab from "./contacts_tab/contacts_tab";
import CallsTab from "./calls_tab/calls_tab";

export default function LeftPage() {
  const dispatch = useDispatch();
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

  function getTabContent() {
    switch (tabsState.activeTab) {
      case 0:
        return <ChatContactsTabContent />;

      case 1:
        return <ContactTab />;

      case 2:
        return <CallsTab />;
      default:
        return <ChatContactsTabContent />;
    }
  }

  return (
    <div className="flex-grow-1 w-2/6 border-r-2 border-gray-700">
      <div className="w-full px-3">
        <h1 className="text-3xl font-bold text-left pl-5 pt-5 mb-5 text-white italic ">
          LiveLynk
        </h1>
        <div className="flex border-b border-gray-500 ">
          {tabsState.tabList.map((tab, index) => (
            <button
              key={index}
              className={`flex-1 text-center text-lg font-bold py-2 ${
                tab.isActive
                  ? "border-b-2 border-blue-500 text-blue-500"
                  : "text-gray-500"
              }`}
              onClick={() => {
                dispatch(setActiveTab(index));
              }}
            >
              {tab.name}
            </button>
          ))}
        </div>
        <div className="p-4 text-gray-50 h-auto">{getTabContent()}</div>
      </div>
    </div>
  );
}
