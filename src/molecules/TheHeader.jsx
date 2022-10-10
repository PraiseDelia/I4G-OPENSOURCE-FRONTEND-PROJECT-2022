import menu from "../atoms/Dashboard/menu.png";
import mobileLogo from "../atoms/Dashboard/mobile-logo.png";
import tabLogo from "../atoms/Dashboard/tab-logo.png";

const TheHeader = () => {
  return (
    // <div className="fixed top-0 right-0 left-0 bg-white">
    <div className="mx-5 sm:mx-10 md:mx-20 mt-11 sm:mt-10 mb-4 sm:mb-6 md:mb-8 flex items-center">
      <div className="">
        <img src={mobileLogo} alt="Logo" className="md:hidden" />
        <img src={tabLogo} alt="Logo" className="hidden md:block" />
      </div>
      <div className="p-4 rounded-xl ml-auto border border-[#0f27bd80]">
        <img src={menu} alt="hamburger menu" />
      </div>
    </div>
    // </div>
  );
};

export default TheHeader;
