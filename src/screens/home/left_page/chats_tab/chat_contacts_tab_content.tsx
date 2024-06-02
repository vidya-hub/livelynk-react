import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Contact from "../../../../types/contact";
import { setChatContactsState } from "../../../../state/home_state/chat_contacts_state";
import APIService from "../../../../api/api_service";

export default function ChatContactsTabContent() {
  const dispatch = useDispatch();
  const userState = useSelector(function (state: {
    user: {
      userId: number;
    };
  }) {
    return state.user;
  });
  const chatContacts: { [key: string]: Contact } = useSelector(
    function (state: {
      chatContactState: {
        chatContacts: {
          [key: string]: Contact;
        };
      };
    }) {
      console.log(state.chatContactState.chatContacts);
      return state.chatContactState.chatContacts;
    }
  );
  useEffect(() => {
    if (userState !== undefined && userState.userId !== undefined) {
      setContacts({ userId: userState.userId });
    }
    return () => {};
  }, [userState]);
  async function setContacts({ userId }: { userId: number }) {
    const contacts: Contact[] = await APIService.getChatContacts({
      userId: userId,
    });
    if (contacts.length > 0) {
      dispatch(setChatContactsState(contacts));
    }
  }
  return (
    <div>
      <ul className="divide-y divide-gray-200 dark:divide-gray-700">
        {Object.values(chatContacts).map((contact: Contact) => {
          return (
            <li className="py-3 sm:py-4">
              <div className="flex items-center ">
                <div className="flex-shrink-0">
                  <h1 className="w-8 h-8 rounded-full">
                    {contact.username[0]}
                  </h1>
                </div>
                <div className="flex-1 min-w-0 ms-4">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Bonnie Green
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    email@windster.com
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  $3467
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
