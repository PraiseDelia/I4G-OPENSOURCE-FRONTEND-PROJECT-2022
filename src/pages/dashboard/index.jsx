import SideNav from "../../molecules/SideBar";
import { Outlet } from "react-router-dom";
import TheHeader from "../../molecules/TheHeader";
import searchIcon from "../../atoms/Dashboard/search-icon.png";
import notification from "../../atoms/Dashboard/notification.png";
import unreadNotification from "../../atoms/Dashboard/unread-notification.png";
import avatar from "../../atoms/Dashboard/avatar.png";
const Index = () => {
  const userName = "Nora";

  return (
    <div className="flex">
      <div className="hidden lg:block w-3/12">
        <SideNav />
      </div>

      <div className="w-full lg:w-9/12 lg:pt-14 lg:pl-10 lg:pr-16">
        <div className="w-full">
          <div className="lg:hidden">
            <TheHeader />
          </div>
          <div className="flex w-full items-end mx-5 sm:mx-10 md:mx-20 lg:mx-0 mb-4 lg:mb-12">
            <div className="">
              <h4 className="font-medium mb-2 text-neutral-color-800 sm:text-lg md:text-xl">
                Hey {userName}👋🏽
              </h4>
              <h3 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-2xl text-neutral-color-900">
                Explore Tech Gadgets
              </h3>
            </div>
            <div className="ml-auto flex items-center">
              <div className="mr-6 flex px-3 pt-2 xl:p-3 border border-neutral-color-500 rounded-lg items-center">
                <img src={searchIcon} alt="search" className="mr-2 w-5 h-5" />
                <input
                  type="search"
                  className="focus:outline-none text-neutral-color-600"
                  placeholder="Seaarch for gadgets"
                />
              </div>
              <button className="rounded-full p-5 bg-primary-color-50 mr-6">
                <div className="relative flex justify-center items-center">
                  <img src={notification} alt="notification" />
                  <div className="absolute top-0 right-0 ">
                    <img src={unreadNotification} alt="unread notification" />
                  </div>
                </div>
              </button>
              <div className="">
                <img src={avatar} alt="avatar" />
              </div>
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Index;
