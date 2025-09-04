import { List, Avatar } from "antd";
import type { ILoggedInUserProfile } from "../../context/authContext";
import { useDispatch } from "react-redux";
import { setSelectedUser } from "../../reducer/user.reducer";

const SingleUserItem = ({user}: Readonly<{user: ILoggedInUserProfile}>) => {
    const dispatch = useDispatch();
    const setActiveUserOnRedux = (activeUser: ILoggedInUserProfile) => {
        dispatch(setSelectedUser(activeUser));
    }
  return (
    <>
      <List.Item
        key={user.id}
        onClick={() => {
            setActiveUserOnRedux(user);
        }}
        className="shadow-lg hover:bg-teal-50 hover:cursor-pointer rounded-md"
      >
        <List.Item.Meta
          className="px-5"
          title={<p className="font-semibold text-xl">{user.name}</p>}
          avatar={<Avatar src={user.image.optimizedUrl} className="size-20!" />}
          description={
            <div>
              <p className="truncate pe-3 font-light text-black/75">
                {user.email}
              </p>
              <span className="text-xs italic font-light">{user.role}</span>
            </div>
          }
        ></List.Item.Meta>
      </List.Item>
    </>
  );
};

export default SingleUserItem;
