import OverviewCard from "@/components/atoms/overiewCard";
import React from "react";

const overviewList = [
  {
    name: "Total Games",
    icon: "/totgame.svg",
    total: "115",
    percetage: "58.12%",
    theme: "#EE0BD7",
  },
  {
    name: "Total Customers",
    theme: "#FC7785",
    icon: "/totpeople.svg",
    total: "115",
    percetage: "58.12%",
  },
  {
    name: "Total Revenues",
    icon: "/totwallet.svg",
    total: "115",
    percetage: "58.12%",
    theme: "#4BDE97",
  },
  {
    name: "Total game categories",
    icon: "/totrevenue.svg",
    total: "115",
  },
  {
    name: "Total Module",
    icon: "/totmodule.svg",
    total: "115",
    percetage: "58.12%",
    theme: "#6A67F3",
  },
];

const OverView = () => {
  return (
    <div className="mb-6 md:mb-[44px]">
      <div>
        <p className="text-white font-semibold text-[16px] md:text-[20px] leading-6 capitalize mb-4">
          Overview
        </p>
      </div>

      <div className="flex-1 overflow-x-auto flex hidescroll gap-4 md:gap-[30px] overflow-y-hidden">
        {overviewList.map((item) => (
          <OverviewCard
            name={item.name}
            icon={item.icon}
            total={item.total}
            percentage={item.percetage}
            theme={item.theme}
          />
        ))}
      </div>
    </div>
  );
};

export default OverView;
