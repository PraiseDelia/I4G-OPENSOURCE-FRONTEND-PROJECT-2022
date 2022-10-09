import menu from "../atoms/Dashboard/menu.png";
import mobileLogo from "../atoms/Dashboard/mobile-logo.png";

const TheHeader = () => {
  return (
    // <div className="fixed top-0 right-0 left-0 bg-white">
    <div className="px-5 pt-11 pb-4 flex items-center">
      <div className="">
        <img src={mobileLogo} alt="Logo" />
      </div>
      <div className="p-4 rounded-xl ml-auto border border-[#0f27bd80]">
        <img src={menu} alt="hamburger menu" />
      </div>
    </div>
    // </div>
  );
};

export default TheHeader;
