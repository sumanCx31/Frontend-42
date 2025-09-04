import { List, Avatar } from "antd";
import type { ILoggedInUserProfile } from "../../context/authContext";
import { useSelector } from "react-redux";
import type { RootState } from "../../config/store.config";
import SingleUserItem from "./SingleUserItem";

const UserList = () => {
  const userList = useSelector((rootStore:RootState) => {
    return rootStore?.user?.userList as unknown as Array<ILoggedInUserProfile>;
  })
    return (
        <>
          <div className="flex w-1/5 flex-col gap-5 h-full bg-gray-200">
          <div className="flex w-full items-center justify-center h-20 border-b border-b-stone-800/15">
            <h1 className="text-4xl text-teal-800 font-semibold my-5">
              Your Chat List
            </h1>
          </div>
         {
          userList ? <>
           <List
            className="px-5! overflow-y-scroll "
            dataSource={userList}
            renderItem={(user: ILoggedInUserProfile) => {
              return (
                <SingleUserItem user={user} key={user.id} />
              );
            }}
          ></List>
          </>:<></>
         }
        </div>
        </>
    )
}

export default UserList;