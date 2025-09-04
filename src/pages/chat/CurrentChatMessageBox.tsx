import { Input } from "antd";
import { useEffect, useRef, useState, type BaseSyntheticEvent } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../config/store.config";
import { useAuth, type ILoggedInUserProfile } from "../../context/authContext";
import ChatDetailHeader from "../../components/chat/ChatDetailHeader";
import MessageListItems from "./MessageListItems";
import chatService from "../../service/chat.service";

const CurrentChatMessageBox = () => {
  const divRef = useRef<HTMLDivElement | null>(null);
  const [messages, setMessages] = useState<string>("");
  const {loggedInUser} = useAuth();
 
   const handleSubmitMessage = async (e: BaseSyntheticEvent) => {
      try {
          e.preventDefault();
          const messageBody = {message: messages, receiverId: selectedUser.id};
          await chatService.sendMessage(messageBody);
          setMessages("");
          socket.emit("messageSent", { receiverId: selectedUser.id, sender: loggedInUser?.id });
      } catch (error) {
          
      }
   }

  
  useEffect(() => {
    if (divRef.current) {
      divRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const selectedUser = useSelector((rootStore: RootState) => {
    return rootStore?.user?.selectedUser as unknown as ILoggedInUserProfile;
  });

  return (
    <>
      <div className="flex w-4/5 flex-col h-full bg-stone-100 shadow">
        {selectedUser ? (
          <>
            <ChatDetailHeader />
            <div className="flex w-full gap-3 flex-col my-5 px-5 h-full overflow-y-scroll">
              <MessageListItems />
              <div ref={divRef}></div>
              <div className="flex items-center px-5 py-4 bg-white border-t border-gray-200">
                <Input
                  size="large"
                  value={messages}
                  onChange={(e) => setMessages(e.target.value)}
                  className="flex-1 rounded-full px-6 py-4 text-lg shadow focus:border-teal-500 focus:ring-teal-500 transition-all"
                  placeholder="Type your message..."
                  allowClear
                />
                <button
                  type="submit"
                  onClick={handleSubmitMessage}
                  className="ml-4 px-6 py-3 bg-teal-600 text-white rounded-full font-semibold shadow hover:bg-teal-700 transition-all"
                >
                  Send
                </button>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};
export default CurrentChatMessageBox;
