import { useSelector } from "react-redux";
import type { RootState } from "../../config/store.config";
import type { ILoggedInUserProfile } from "../../context/authContext";

const ChatDetailHeader = () => {
    const selectedUser = useSelector((rootStore: RootState) => {
        return rootStore?.user?.selectedUser as unknown as ILoggedInUserProfile;
      });
  return (
    <>
    <div className="border-b border-b-gray-50 shadow-xl gap-5 flex p-5">
        <div className="size-25">
          <img src={selectedUser.image.optimizedUrl} className="rounded-full" />
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="text-3xl font-semibold">{selectedUser.name}</h2>
          <p>{selectedUser.email}</p>
          <span className="text-gray-400 text-sm italic font-light">
            {selectedUser.role}
          </span>
        </div>
      </div>
    </>
  );
};

export default ChatDetailHeader;