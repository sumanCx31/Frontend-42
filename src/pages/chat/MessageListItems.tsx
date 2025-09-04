import {  useEffect, useState,  } from "react";
import { useSelector } from "react-redux";
import { useAuth, type ILoggedInUserProfile } from "../../context/authContext";
import type { RootState } from "../../config/store.config";
import chatService from "../../service/chat.service";

export interface IMessage {
  id: string;
  sender: ILoggedInUserProfile;
  receiver: ILoggedInUserProfile;
  message: string;
  createdAt: Date | string;
  updatedAt: Date | string;
}

const MessageListItems = () => {
  const [messages, setMessages] = useState<Array<IMessage>>();
  const selectedUser = useSelector((rootStore: RootState) => {
    return rootStore?.user?.selectedUser as unknown as ILoggedInUserProfile;    
  });



 }

  const { loggedInUser } = useAuth();
  const getUserChatDetails = async () => {
    try {
        const response = await chatService.getChatDetail(selectedUser.id)
        setMessages(response?.data.reverse());
    } catch  {
        console.log("Error in fetching chat details");
    }
  };

  useEffect(() => {
    getUserChatDetails();
  }, [selectedUser]);

    useEffect(() => {
        const handleLoadChat = async () => {
            await getUserChatDetails();
        }
        socket.on("messageReceived", handleLoadChat);
        socket.on("chatUpdate", handleLoadChat);

        return () => {
            socket.off("messageReceived", handleLoadChat);
            socket.off("chatUpdate", handleLoadChat);
        }   
    }, []);

  return (
    <>
      {messages &&
        messages.map((message: IMessage) =>
          message.sender.id === loggedInUser?.id ? (
            <>
            <div className="flex justify-end w-full mb-4">
                <div className="flex items-end gap-3 max-w-2xl flex-row-reverse">
                    <img 
                    src={message.sender.image?.optimizedUrl} 
                    alt=""
                    className="w-12 h-12 rounded-full border-2 border-teal-200 shadow"
                     />
                     <div className="bg-gradient-to-br from-teal-200 to-teal-200 text-teal-900 px-6 py-4 rounded-t-2xl rounded-b-2xl rounded-br-none max-w-[500px]">
                       <span className="block text-base">
                        {message.message}
                       </span>
                       <span className="absolute bottom-1 left-3 text-xs text-teal-400 opacity-70">
                        {convertDateToHumanForm(message.createdAt as string)}
                       </span>
                     </div>
                </div>
              </div>
              
            </>
          ) : (
            <>
            <div className="flex -full mb-4">
                <div className="flex items-end gap-3 max-w-2xl">
                    <img 
                    src={selectedUser?.image?.optimizedUrl} 
                    alt=""
                    className="w-12 h-12 rounded-full border-2 border-blue-200 shadow"
                     />
                     <div className="bg-gradient-to-br from-blue-200 to-blue-200 text-blue-900 px-6 py-4 rounded-t-2xl rounded-b-2xl rounded-br-none max-w-[500px]">
                       <span className="block text-base">
                        {message.message}
                       </span>
                       <span className="absolute bottom-1 left-3 text-xs text-blue-400 opacity-70">
                        {convertDateToHumanForm(message.createdAt as string)}
                       </span>
                     </div>
                </div>
              </div>
            </>
          )
        )}
    </>
  );
};
export default MessageListItems;
