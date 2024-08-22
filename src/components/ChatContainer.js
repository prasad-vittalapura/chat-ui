import React, { useContext } from "react";
import { ContextApp } from "../utils/Context";
import { RiSendPlane2Fill } from "react-icons/ri";
import Chat from "./Chat";
function ChatContainer() {
  const {
    chatValue,
    setChatValue,
    handleSend,
    handleKeyPress,
  } = useContext(ContextApp);

  return (
    <div className="bg-black">
      <div  class="rounded px-3 py-[9px]  flex items-center justify-start cursor-pointer text-white mt-5 mb-3">
               <img
              src="/logo.png"
              alt="user"
              className="ml-10 w-15 h-10 rounded object-cover"
            />
              </div>
              <div style={{height: "80vh"}}
      className={"w-screen  flex items-start justify-between flex-col p-2"}
    >
      <Chat />
      {/* chat input section */}
      <div className=" w-full  m-auto flex items-center justify-center flex-col gap-2 my-2">
        <span className="flex gap-2 items-center justify-center bg-gray-600 rounded-lg shadow-md w-[90%] lg:w-2/5 xl:w-1/2">
          <input
            type="text"
            placeholder="Send a message"
            className="h-full  text-white bg-transparent px-3 py-4 w-full border-none outline-none text-base"
            value={chatValue}
            onChange={(e) => setChatValue(e.target.value)}
            onKeyUp={handleKeyPress}
          />
          <RiSendPlane2Fill
            title="send message"
            className={
              chatValue.length <= 0
                ? "t   cursor-auto mx-3 text-xl"
                : "text-white cursor-pointer mx-3 text-3xl bg-yellow-500 p-1 rounded shadow-md "
            }
            onClick={handleSend}
          />
        </span>
      </div>
    </div>
    </div>
    
  );
}

export default ChatContainer;
