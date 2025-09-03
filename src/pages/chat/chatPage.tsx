import { useEffect } from "react";
import { useUserLayout } from "../../context/user-layout.context";
import { Avatar, Input, List } from "antd";
import type { ILoggedInUserProfile } from "../../context/authContext";

const ChatPage = () => {
  const { setCollapsed } = useUserLayout();
  useEffect(() => {
    setCollapsed(true);
  }, []);
  return (
    <>
      <div className="flex w-full h-full gap-2">
        <div className="flex w-1/5 flex-col gap-5 h-full bg-gray-200">
          <div className="flex w-full items-center justify-center h-20 border-b border-b-stone-800/15">
            <h1 className="text-4xl text-teal-800 font-semibold my-5">
              Your Chat List
            </h1>
          </div>
          <List
            className="px-5! overflow-y-scroll "
            dataSource={userList}
            renderItem={(user: ILoggedInUserProfile) => {
              return (
                <>
                  <List.Item
                    key={user.id}
                    className="shadow-lg hover:bg-teal-50 hover:cursor-pointer rounded-md"
                  >
                    <List.Item.Meta
                      className="px-5"
                      title={
                        <h3 className="font-semibold text-xl">{user.name}</h3>
                      }
                      avatar={
                        <Avatar
                          src={user.image.optimizedUrl}
                          className="size-20!"
                        />
                      }
                      description={
                        <div>
                          <p className="truncate pe-3 font-light text-black/75">
                            {user.email}
                          </p>
                          <span className="text-xs italic font-light">
                            {user.role}
                          </span>
                        </div>
                      }
                    ></List.Item.Meta>
                  </List.Item>
                </>
              );
            }}
          ></List>
        </div>
        <div className="flex w-4/5 flex-col h-full bg-stone-100 shadow">
          <div className="border-b border-b-gray-50 shadow-xl gap-5 flex p-5">
            <div className="size-25">
              <img src="" className="rounded-full" />
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-3xl font-semibold">Bishwo Mohan Shah</h2>
              <p>shahbishwomohan4787@gmail.com</p>
              <span className="text-gray-400 text-sm italic font-light">
                Seller
              </span>
            </div>
          </div>
          <div className="flex w-full gap-3 flex-col my-5 px-5 h-full">
            <div className="flex justify-start w-full">
              <div className="w-1/2 flex gap-5">
                <div className="size-20 pt-12">
                    <img src="" alt="" />
                </div>
                <p className="max-w-[500px] bg-blue-700 text-white p-5 rounded-t-2xl rounded-b-2xl">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, vitae eaque! Pariatur cum ab adipisci consectetur asperiores eveniet magnam et nam mollitia! Minima expedita ullam qui! Quod saepe omnis nihil?</p>
              </div>
            </div>
            <div className="flex justify-end w-full">
               <div className="w-1/2 flex gap-5 ms-50 justify-end">
                <p className="max-w-[500px] bg-teal-700/15 text-teal-900 p-5 rounded-t-2xl rounded-bl-2xl">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, vitae eaque! Pariatur cum ab adipisci consectetur asperiores eveniet magnam et nam mollitia! Minima expedita ullam qui! Quod saepe omnis nihil?
                  </p>
                  <div className="size-20 pt-12">
                    <img src="" alt="" />
                   </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Input className="py-4!" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatPage;
