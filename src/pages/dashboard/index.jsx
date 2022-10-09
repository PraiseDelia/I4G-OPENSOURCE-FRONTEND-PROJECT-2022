// import styled from "styled-components";

import "./style.css";
import mac from "../../atoms/Dashboard/mac.png";
import rightArrow from "../../atoms/Dashboard/right-arrow.png";
import Button from "../../atoms/Button";
import { useState } from "react";
import AtomCard from "../../atoms/Card/AtomCard";
import product1 from "../../atoms/Dashboard/product1.png";
import product2 from "../../atoms/Dashboard/product2.png";
import product3 from "../../atoms/Dashboard/product3.png";
import MoleculeCard from "../../molecules/card/MoleculeCard";
import TheHeader from "../../molecules/TheHeader";

const Index = () => {
  const categories = ["All", "Laptops", "Phone", "Merch", "Game"];
  const [indexOfActiveBtn, setIndexOfActiveBtn] = useState(0);
  const products = [
    { image: product1, title: "Workspace Equipment", price: "₦25,000.00" },
    { image: product2, title: "Gaming Pad", price: "₦100,000.00" },
    { image: product3, title: "Workspace Equipment", price: "₦1,550,000.00" },
  ];
  const userName = "Nora";
  const displayAsActive = (index) => {
    setIndexOfActiveBtn(index);
  };
  return (
    <div className="w-full">
      <TheHeader />
      <div className="px-5 mb-4">
        <h4 className="font-medium mb-2 text-neutral-color-800">
          Hey {userName}👋🏽
        </h4>
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
        <div className="flex items-center px-5 mb-4">
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
        <div className="flex flex-nowrap w-full overflow-x-auto pl-5 mb-6 no_scrollbar">
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
        <div>
          {products.map((product, index) => (
            <MoleculeCard image={product.image}>
              <div>
                <h3 className="text-neutral-color-700 text-lg font-semibold">
                  {product.title}
                </h3>
                <p className="text-neutral-color-900 font-bold text-xl">
                  {product.price}
                </p>
              </div>
              <div></div>
            </MoleculeCard>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
