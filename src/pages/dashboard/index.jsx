// import styled from "styled-components";
import menu from "../../atoms/Dashboard/menu.png";
import mobileLogo from "../../atoms/Dashboard/mobile-logo.png";
import mac from "../../atoms/Dashboard/mac.png";
import rightArrow from "../../atoms/Dashboard/right-arrow.png";
import Button from "../../atoms/Button";
import { useState } from "react";
import AtomCard from "../../atoms/Card/AtomCard";
const Index = () => {
  const categories = ["All", "Laptops", "Phone", "Merch", "Game"];
  const [indexOfActiveBtn, setIndexOfActiveBtn] = useState(0);
  const displayAsActive = (index) => {
    setIndexOfActiveBtn(index);
  };
  return (
    <div className="w-full">
      <div className="px-5 py-11 flex items-center">
        <div className="">
          <img src={mobileLogo} alt="Logo" />
        </div>
        <div className="p-4 rounded-xl ml-auto border border-[#0f27bd80]">
          <img src={menu} alt="hamburger menu" />
        </div>
      </div>
      <div className="px-5 mb-4">
        <h4 className="font-medium mb-2 text-neutral-color-800">Hey Nora👋🏽</h4>
        <h3 className="font-bold text-xl text-neutral-color-900">
          Explore Tech Gadgets
        </h3>
      </div>
      <section className="px-5 mb-8">
        <AtomCard style="flex bg-neutral-color-900">
          <div className="basis-3/5 flex justify-center items-center">
            <div className="w-full py-7 px-4">
              <h4 className="font-bold leading-[26px] mb-2.5 text-neutral-color-50">
                Buy & Sell Affordable Products{" "}
              </h4>
              <p className="font-medium text-sm leading-6 text-neutral-color-400">
                Connect with other creatives around world.
              </p>
            </div>
          </div>
          <div className="basis-2/5">
            <img src={mac} alt="a MAC" className="w-full h-full rounded-lg" />
          </div>
        </AtomCard>
      </section>
      <section className="">
        <div className="flex items-center px-5">
          <h4 className="font-bold text-lg text-neutral-color-900">
            Categories
          </h4>
          <div className="flex items-center ml-auto">
            <p className="text-neutral-color-600">See All</p>
            <img
              src={rightArrow}
              alt="a right arrow"
              className="w-2 h-3 ml-3"
            />
          </div>
        </div>
        <div className="flex flex-nowrap w-full overflow-x-auto pl-5 mb-6">
          {categories.map((category, index) => (
            <div key={index} className="mr-4 flex items-center justify-center">
              <Button
                onFocus={() => displayAsActive(index)}
                style={`${
                  index === indexOfActiveBtn
                    ? "bg-primary-color-500 text-neutral-color-50"
                    : "bg-transparent border-neutral-color-500 text-neutral-color-700"
                } hover:bg-primary-color-400 hover:text-neutral-color-50`}
              >
                {category}
              </Button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
