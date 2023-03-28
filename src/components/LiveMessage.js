import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomMessage, generateRandomName } from "../utils/helper";

const LiveMessage = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(20),
        })
      );
    }, 1000);

    return () => {
      clearInterval(i);
    };
  }, []);
  return (
    <div className="w-full border border-black ml-3">
      <div className="flex flex-col-reverse bg-slate-100 rounded-lg shadow-sm h-[355px] w-full p-2 overflow-y-scroll">
        {chatMessages.map((chat, ind) => {
          return (
            <ChatMessage key={ind} name={chat?.name} message={chat?.message} />
          );
        })}
      </div>
      <form className="sticky flex ml-3"
         onSubmit={(e) => {
          e.preventDefault();
          dispatch(addMessage({
            name:"Anamika Saini",
            message: liveMessage
          }));
          setLiveMessage("");
         }}>
        <input
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
          className="w-72 p-1 my-1 border border-green-300"
          type="text"
        />
        <button className="bg-green-200 rounded-lg py-1 px-2 mx-2 my-1">
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveMessage;
