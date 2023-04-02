import React from "react";
import { format } from "date-fns";
import Image from "next/image";
// interface HeaderProp {
//   title: string;
// }

const Header = () => {
  return (
    <div className="h-[112px] flex w-full items-center justify-between">
      <div className="h-full flex items-center">
        <p className="text-3xl text-white font-semibold text-[30px] leading-[36px]">
          Dashboard
        </p>
        <div className="border-[1px] border-white border-opacity-70 rounded-2xl ml-[30px] flex justify-center items-center w-[253px] h-[52px]  ">
          <Image src="/Calendar.svg" alt="" height={20} width={20} />
          <p className="text-white ml-[10px] font-medium leading-[17px] text-sm">
            {format(new Date(), "eeee, do LLLL")}
          </p>
        </div>
      </div>
      <div className="h-full flex items-center">
        <input
          placeholder="search here"
          type="text"
          className="bg-[#332E59] w-[300px] rounded-2xl flex items-center p-4 h-[52px] "
        />

        <Image src="/alert.svg" className="mx-[30px]" alt="" height={40} width={40} />

        <div className="w-[1px] bg-white h-[30px] " />
        <p className="leading-[17px] ml-[30px] mr-[8px] text-white capitalize text-sm font-semibold">Joana 👋</p>
        <Image src={"/avatar.svg"} alt="" height={40} width={40} />
      </div>
    </div>
  );
};

export default Header;
