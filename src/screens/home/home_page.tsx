import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Constants from "../../utils/constants";

export default function HomePage() {
  const chats = [
    { id: 1, name: "John Doe", message: "Hi there!", time: "10:00 AM" },
    { id: 2, name: "Jane Smith", message: "How are you?", time: "11:30 AM" },
    { id: 3, name: "Alice Johnson", message: "What's up?", time: "Yesterday" },
    {
      id: 4,
      name: "Bob Brown",
      message: "Long time no see!",
      time: "2 days ago",
    },
  ];
  const navigate = useNavigate();

  const userId = localStorage.getItem(Constants.userLocalStorageKey);
  console.log(userId);
  useEffect(() => {
    if (!userId || userId === "") {
      toast.error("Please login");
      navigate("/auth");
      return;
    }
    return () => {};
  }, [userId, navigate]);

  return (
    <div className="flex flex-col border-r border-gray-300">
      <div className="p-4 bg-gray-100 border-b border-gray-300">
        <h2 className="text-lg font-bold">Chats</h2>
      </div>
      <div className="flex-1 overflow-y-auto">
        {chats.map((chat) => (
          <div key={chat.id} className="p-4 hover:bg-gray-100 cursor-pointer">
            <h3 className="text-lg font-bold">{chat.name}</h3>
            <p className="text-sm text-gray-500">{chat.message}</p>
            <p className="text-xs text-gray-400">{chat.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
