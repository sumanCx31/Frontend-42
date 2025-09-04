import { useEffect } from "react";
import { useUserLayout } from "../../context/user-layout.context";
import UserList from "../../components/chat/UserList";
import CurrentChatMessageBox from "./CurrentChatMessageBox";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../config/store.config";
import { getAllUserLists } from "../../reducer/user.reducer";

const ChatPage = () => {
  const { setCollapsed } = useUserLayout();
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    socket.connect();
    setCollapsed(true);
    dispatch(getAllUserLists({ page: 1, limit: 50, search: null }));
  }, []);
  return (
    <>
      <div className="flex w-full h-full gap-2">
        <UserList/>
        <CurrentChatMessageBox/>
      </div>
    </>
  );
};

export default ChatPage;
