import largeScreenLogo from "../atoms/Dashboard/tab-logo.png";
import inactiveDashboard from "../atoms/Dashboard/inactive-dashboard.png";
import activeDashboard from "../atoms/Dashboard/active-dashboard.png";
import inactiveMessages from "../atoms/Dashboard/inactive-messages.png";
import activeMessages from "../atoms/Dashboard/active-messages.png";
// import activeProducts from "../atoms/Dashboard/active-Products.png";
import inactiveProducts from "../atoms/Dashboard/inactive-Products.png";
// import activeWishlist from "../atoms/Dashboard/active-wishlist.png";
import inactiveWishlist from "../atoms/Dashboard/inactive-wishlist.png";
// import activeSupport from "../atoms/Dashboard/active-support.png";
import inactiveSupport from "../atoms/Dashboard/inactive-support.png";

import logOut from "../atoms/Dashboard/logout.png";
import { NavLink, useLocation } from "react-router-dom";
const SideNav = () => {
  const location = useLocation();
  return (
    <div className="w-full">
      <div className="fixed top-0 bottom-0 w-3/12 bg-primary-color-50 flex justify-center min-h-screen overflow-auto">
        <div className="w-full pt-14">
          <div className="pl-14 mb-12">
            <img src={largeScreenLogo} alt="logo" />
          </div>
          <h3 className="pl-14 campton text-[#0F27BD] mb-8">MENU</h3>
          <div className="flex flex-col h-full">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-[#0F27BD] font-semibold w-full pl-14 bg-[#FAFAFB] rounded-none cursor-pointer py-5 flex items-center"
                  : "text-[#A1A4B6] font-medium w-full pl-14 rounded-lg hover:bg-[#FAFAFB] hover:rounded-none cursor-pointer py-5 flex items-center"
              }
              to="/user/dashboard"
            >
              <img
                src={
                  location.pathname === "/user/dashboard"
                    ? activeDashboard
                    : inactiveDashboard
                }
                alt="dashboard"
                className="w-6 h-6 mr-2.5"
              />
              <h4 className="campton text-lg">Dashboard</h4>
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-[#0F27BD] font-semibold w-full pl-14 bg-[#FAFAFB] rounded-none cursor-pointer py-5 flex items-center"
                  : "text-[#A1A4B6] font-medium w-full pl-14 rounded-lg hover:bg-[#FAFAFB] hover:rounded-none cursor-pointer py-5 flex items-center"
              }
              to="/user/messages"
            >
              <img
                src={
                  location.pathname === "/user/messages"
                    ? activeMessages
                    : inactiveMessages
                }
                alt="dashboard"
                className="w-5 h-5 mr-2.5"
              />
              <h4 className="campton text-lg">Messages</h4>
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-[#0F27BD] font-semibold w-full pl-14 bg-[#FAFAFB] rounded-none cursor-pointer py-5 flex items-center"
                  : "text-[#A1A4B6] font-medium w-full pl-14 rounded-lg hover:bg-[#FAFAFB] hover:rounded-none cursor-pointer py-5 flex items-center"
              }
              to="/user/products"
            >
              <img
                src={
                  location.pathname === "/user/products"
                    ? inactiveProducts
                    : inactiveProducts
                }
                alt="Products"
                className="w-6 h-6 mr-2.5"
              />
              <h4 className="campton text-lg">Products</h4>
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-[#0F27BD] font-semibold w-full pl-14 rounded-lg hover:bg-[#FAFAFB] hover:rounded-none cursor-pointer py-5 flex items-center"
                  : "text-[#A1A4B6] font-medium w-full pl-14 rounded-lg hover:bg-[#FAFAFB] hover:rounded-none cursor-pointer py-5 flex items-center"
              }
              to="/user/wishlist"
            >
              <img
                src={
                  location.pathname === "/user/wishlist"
                    ? inactiveWishlist
                    : inactiveWishlist
                }
                alt="wishlist"
                className="w-6 h-6 mr-2.5"
              />
              <h4 className="campton text-lg">WishList</h4>
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-[#0F27BD] font-semibold w-full pl-14 bg-[#FAFAFB] rounded-none cursor-pointer py-5 flex items-center"
                  : "text-[#A1A4B6] font-medium w-full pl-14 rounded-lg hover:bg-[#FAFAFB] hover:rounded-none cursor-pointer py-5 flex items-center"
              }
              to="/user/cart"
            >
              <img
                src={
                  location.pathname === "/user/cart"
                    ? inactiveSupport
                    : inactiveSupport
                }
                alt="cart"
                className="w-6 h-6 mr-2.5"
              />
              <h4 className="campton text-lg">Help & Support</h4>
            </NavLink>

            <NavLink
              className="mt-auto w-full pl-14 cursor-pointer py-5 flex items-center"
              to="/menu"
            >
              <img src={logOut} alt="dashboard" className="w-6 h-6 mr-2.5" />
              <h4 className="campton text-lg text-error-color-500">Sign out</h4>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
