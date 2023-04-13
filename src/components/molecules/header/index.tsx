import React, { Dispatch, useState } from "react";
import { format } from "date-fns";
import Image from "next/image";
import { Divide as Hamburger } from "hamburger-react";

interface Prop {
  isOpen: boolean;
  setOpen: Dispatch<any>;
}

const Header = ({ isOpen, setOpen }: Prop) => {
  return (
    <div className="h-[76px] md:h-[112px] flex w-full items-center justify-between">
      <div className="h-full flex items-center">
        <div className="md:hidden z-50">
          <Hamburger
            color="white"
            size={20}
            toggled={isOpen}
            toggle={setOpen}
          />
        </div>
        <p className="text-3xl text-white font-semibold md:text-[30px] text-[24px] leading-[36px]">
          Dashboard
        </p>
        <div className="border-[1px] pad:flex hidden border-white border-opacity-70 rounded-2xl ml-[30px] justify-center items-center w-[253px] h-[52px]  ">
          <Image src="/Calendar.svg" alt="" height={20} width={20} />
          <p className="text-white ml-[10px] font-medium leading-[17px] text-sm">
            {format(new Date(), "eeee, do LLLL")}
          </p>
        </div>
      </div>
      <div className="h-full flex items-center">
        <div className="relative">
          <input
            placeholder="search here"
            type="text"
            className="bg-[#332E59] lapi:w-[300px] hidden lapi:flex w-[300px] rounded-2xl items-center p-4 h-[52px] "
          />
          <input
            type="text"
            className="bg-[#332E59] lapi:hidden w-8 md:w-10 rounded-full flex items-center p-4 h-8 md:h-[40px] "
          />
          <Image
            src={"/search.svg"}
            width={20}
            height={20}
            alt=""
            className="absolute lapi:right-[16px] right-[6px] top-[6px] lapi:top-[16px]"
          />
        </div>
        <div className="relative w-8 h-8 md:w-10 md:h-10 mx-4 md:mx-[30px]">
          <Image src="/alert.svg" className="" alt="" fill />
        </div>

        <div className="w-[1px] bg-white h-[30px] " />
        <p className="leading-[17px] ml-[30px]  text-white hidden md:block capitalize md:text-base text-sm font-semibold">
          Joana 👋
        </p>
        <div className="relative w-8 h-8 md:w-10 md:h-10 ml-4 md:ml-[8px]">
          <Image
            src={"/avatar.svg"}
            className=""
            alt=""
            fill
            priority
            quality={50}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
