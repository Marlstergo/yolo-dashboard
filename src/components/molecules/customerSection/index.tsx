import TableRow from "@/components/atoms/tableRow";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import SelectInput from "../../atoms/selectInput";

const tableRows = [
  {
    name: "ian miguel",
    email: "juanmiguel@yopmail,com",
    address: "Tartu linn, Estonia",
  },
  {
    name: "ian miguel",
    email: "juanmiguel@yopmail,com",
    address: "Tartu linn, Estonia",
  },
  {
    name: "ian miguel",
    email: "juanmiguel@yopmail,com",
    address: "Tartu linn, Estonia",
  },
  {
    name: "ian miguel",
    email: "juanmiguel@yopmail,com",
    address: "Tartu linn, Estonia",
  },
  {
    name: "ian miguel",
    email: "juanmiguel@yopmail,com",
    address: "Tartu linn, Estonia",
  },
];

const CustomerSection = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [selectedRange, setSelectedRange] = useState({
    title: "none",
    value: "",
  });
  const [selectedemail, setSelectedemail] = useState({
    title: "none",
    value: "",
  });
  return (
    <div>
      <div className="flex justify-between w-full">
        <div className="flex items-center">
          <p className="md:text-[20px] text-base mr-4 md:mr-[30px] leading-6 font-semibold text-white">
            Game Data
          </p>
          <Link
            href="/games"
            className="text-[#f20493] leading-[17px] md:text-sm text-xs"
          >
            View All
          </Link>
        </div>
        <div className="flex">
          <div className="relative bg-gradient-to-r from-[#F20493] to-[#9616C3] flex justify-center items-center md:rounded-2xl rounded-lg md:h-[52px] h-10 w-10  md:w-[130px] ">
            <button
              className="h-[38px] w-[38px] md:w-[126px] flex justify-center items-center md:rounded-2xl rounded-lg md:h-[48px] bg-[#332E59] text-sm font-semibold text-white"
              onClick={() => {
                setShowFilter(!showFilter);
              }}
            >
              <Image
                height={20}
                width={20}
                src="/filter.svg"
                alt=""
                className="md:mr-[10px]"
              />{" "}
              <span className="hidden md:block">Filters</span>
            </button>
          </div>
          <div className="relative ml-4 bg-gradient-to-r from-[#F20493] to-[#9616C3] flex justify-center items-center md:rounded-2xl rounded-lg h-10 md:h-[52px] w-10 md:w-[130px] ">
            <button className="w-[126px] flex justify-center items-center md:rounded-2xl rounded-lg h-[48px] text-sm font-semibold text-white">
              <Image
                height={20}
                width={20}
                src="/plus.svg"
                alt=""
                className="md:mr-[10px]"
              />{" "}
              <span className="hidden md:block">Add New</span>
            </button>
          </div>
        </div>
      </div>

      {showFilter && (
        <div className="mt-5 flex gap-5">
          <div className="w-[302px] h-[52px]">
            <SelectInput
              onChange={setSelectedRange}
              value={selectedRange}
              filterOptions={[
                {
                  title: "none",
                  value: "",
                },
                {
                  title: "Today",
                  value: "today",
                },
                {
                  title: "This week",
                  value: "thisWeek",
                },
                {
                  title: "This month",
                  value: "thisMonth",
                },
                {
                  title: "This Year",
                  value: "thisYear",
                },
                {
                  title: "Set Up",
                  value: "setup",
                },
              ]}
              type="date"
            />
          </div>
          <div className="w-[302px] h-[52px]">
            <SelectInput
              onChange={setSelectedemail}
              value={selectedemail}
              filterOptions={[
                {
                  title: "none",
                  value: "",
                },
                {
                  title: "juanmiguel@yopmail,com",
                  value: "juanmiguel@yopmail,com",
                },
                {
                  title: "Under",
                  value: "under",
                },
                {
                  title: "1x",
                  value: "1x",
                },
                {
                  title: "2x",
                  value: "2x",
                },
                {
                  title: "GG",
                  value: "gg",
                },
              ]}
              type="email"
            />
          </div>
        </div>
      )}
      <div className="w-full overflow-x-auto hidescroll">
        <div className="w-full  min-w-[650px]">
          <div className="table-fixed w-full bg-[#332E59] rounded-2xl mt-5 px-4 p-5 pb-[1px]">
            <div className="flex mb-4">
              <p className="basis-[30%] text-left text-sm leading-[17px] text-white ">
                Customer name
              </p>
              <p className="text-left text-sm leading-[17px]  text-white basis-[28%]">
                Email
              </p>
              <p className="text-left text-sm leading-[17px] text-white basis-[29%]">
                Address
              </p>
              <p className="text-left text-sm leading-[17px] text-white basis-[132px]">
                Action
              </p>
            </div>
            {tableRows.map((row) => (
              <TableRow
                col1={row.name}
                col2={row.email}
                col3={row.address}
                type="customer"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSection;
