import "../pages/dashboard/style.css";
import mac from "../atoms/Dashboard/mac.png";
import rightArrow from "../atoms/Dashboard/right-arrow.png";
import Button from "../atoms/Button";
import AtomCard from "../atoms/Card/AtomCard";
import MoleculeCard from "../molecules/card/MoleculeCard";
import { useState } from "react";
import product1 from "../atoms/Dashboard/product1.png";
import product2 from "../atoms/Dashboard/product2.png";
import product3 from "../atoms/Dashboard/product3.png";
import wishList from "../atoms/Dashboard/wishlist-icon.png";
import hotDeal from "../atoms/Dashboard/hot-deal.png";
import inactiveMessages from "../atoms/Dashboard/inactive-messages.png";
const Dashboard = () => {
  const categories = [
    "All",
    "Laptops",
    "Phone",
    "Workspace Equipments",
    "Merch",
    "AR Equipments",
    "Game Equipments",
    "Merch",
    "AR Equipments",
    "Game Equipments",
  ];
  const [indexOfActiveBtn, setIndexOfActiveBtn] = useState(0);
  const products = [
    { image: product1, title: "Workspace Equipment", price: "₦25,000.00" },
    { image: product2, title: "Gaming Pad", price: "₦100,000.00" },
    { image: product3, title: "Workspace Equipment", price: "₦1,550,000.00" },
    { image: product3, title: "Workspace Equipment", price: "₦1,550,000.00" },
  ];
  const displayAsActive = (index) => {
    setIndexOfActiveBtn(index);
  };
  return (
    <>
      <section className="mx-5 sm:mx-10 md:mx-20 lg:mx-0 mb-8 lg:flex">
        <AtomCard style="flex bg-neutral-color-900 lg:bg-black">
          <div className="banner_text flex justify-center items-center">
            <div className="w-full py-7 px-4 sm:px-6 lg:pr-0">
              <h4 className="font-bold leading-[26px] mb-2.5 text-neutral-color-50 sm:text-xl md:text-2xl">
                Buy & Sell Affordable Products{" "}
              </h4>
              <p className="campton font-medium text-sm sm:text-base leading-6 text-neutral-color-400 sm:w-2/3 lg:w-3/4">
                Connect with other creatives around world.
              </p>
            </div>
          </div>
          <div className="banner_img">
            <img
              src={mac}
              alt="a MAC"
              className="w-full h-full rounded-lg max-h-[240px] md:max-h-[264px]"
            />
          </div>
        </AtomCard>
        <AtomCard style="hidden lg:block relative pl-4">
          <img src={hotDeal} alt="hot deal" />
          <div className="absolute bottom-0 flex justify-center w-full">
            <div className="w-11/12 mb-6">
              <div className="flex w-full pr-8">
                <div>
                  <h3 className="lato text-neutral-color-200 text-lg font-semibold">
                    Gaming Controller
                  </h3>
                  <p className="text-neutral-color-200 font-bold text-xl">
                    ₦25,000.00
                  </p>
                </div>
                <div className="ml-auto">
                  <button className="rounded-full bg-primary-color-50 p-2.5">
                    <img
                      src={inactiveMessages}
                      alt="Message icon"
                      className="w-5 h-5"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </AtomCard>
      </section>
      <section className="">
        <div className="flex items-center mx-5 sm:mx-10 md:mx-20 lg:mx-0 mb-4">
          <h4 className="font-bold sm:text-xl text-lg text-neutral-color-900">
            Categories
          </h4>
          <div className="flex items-center ml-auto">
            <p className="lato text-neutral-color-600 sm:text-base">See All</p>
            <img
              src={rightArrow}
              alt="a right arrow"
              className="w-2 h-3 ml-3"
            />
          </div>
        </div>
        <div className="mx-5 sm:mx-10 md:mx-20 lg:mx-0">
          <div className="flex flex-nowrap w-full overflow-x-auto mb-6 no_scrollbar">
            {categories.map((category, index) => (
              <div
                key={index}
                className="mr-4 sm:mr-6 flex items-center justify-center"
              >
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
        </div>
        <div className="flex flex-wrap mx-5 sm:mx-10 md:mx-20 lg:mx-0 justify-center sm:justify-between">
          {products.map((product, index) => (
            <div
              key={index}
              className="basis-auto sm:basis-1/2 xl:basis-1/3 px-2"
            >
              <MoleculeCard image={product.image} atomStyles="lg:w-full ">
                <div>
                  <h3 className="lato text-neutral-color-700 text-lg font-semibold">
                    {product.title}
                  </h3>
                  <p className="text-neutral-color-900 font-bold text-xl">
                    {product.price}
                  </p>
                </div>
                <div className="ml-auto">
                  <button>
                    <img src={wishList} alt="wishlist" />
                  </button>
                </div>
              </MoleculeCard>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Dashboard;
