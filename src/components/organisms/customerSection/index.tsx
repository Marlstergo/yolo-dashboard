import TableRow from "@/components/atoms/gameTableRow";
import Input from "@/components/atoms/input";
import Shimmer from "@/components/atoms/shimmer";
import Modal from "@/components/molecules/Modal";
import { SingleGame } from "@/contexts/gameContext";
import { SingleUser, UserContext } from "@/contexts/userContext";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState } from "react";
import SelectInput from "../../atoms/selectInput";

interface Prop {
  allUser: SingleUser[];
}

const CustomerSection = ({ allUser }: Prop) => {
  const { isLoading, addUsers } = useContext(UserContext);

  const [showFilter, setShowFilter] = useState(false);
  const [selectedRange, setSelectedRange] = useState({
    title: "none",
    value: "",
  });

  const [selectedemail, setSelectedemail] = useState({
    title: "none",
    value: "",
  });
  let [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  function openModal() {
    setIsOpen(true);
  }

  const onChange = (e: any) => {
    setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const [state, setState] = useState({
    userName: "",
    email: "",
    address: "",
  });

  const submit = () => {
    addUsers(
      { name: state.userName, email: state.email, address: state.address },
      closeModal()
    );
  };

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
            <button
              className="w-[126px] flex justify-center items-center md:rounded-2xl rounded-lg h-[48px] text-sm font-semibold text-white"
              onClick={() => {
                openModal();
              }}
            >
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
      <Modal
        isOpen={isOpen}
        buttonText="Add"
        header="Add New Game"
        closeModal={closeModal}
        submit={submit}
      >
        <>
          <Input
            label="User Name"
            name="userName"
            onChange={onChange}
            placeholder="Enter user name ..."
            value={state.userName}
          />
          <Input
            label="User Email"
            name="email"
            onChange={onChange}
            placeholder="Enter user email ..."
            value={state.email}
          />
          <Input
            label="User Address"
            name="address"
            onChange={onChange}
            placeholder="Enter user address ..."
            value={state.address}
          />
          <p className="mb-2">Select Game Category :</p>
          {/* <div className="h-[52px]">
            <SelectInput
              filterOptions={[
                {
                  value: "over",
                  title: "Over",
                },
                {
                  value: "under",
                  title: "Under",
                },
                {
                  value: "1X",
                  title: "1x",
                },
                {
                  value: "2X",
                  title: "2x",
                },
              ]}
              value={userCategory}
              type="newGame"
              onChange={setGameCategory}
            />
          </div> */}
        </>
      </Modal>

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
            {!isLoading ? (
              allUser
                // .filter((item) => {
                //   return item.category.toLowerCase() ===
                //     selectedCategory.value.toLowerCase() ||
                //     selectedCategory.value === ""
                //     ? true
                //     : false;
                // })
                ?.map((row) => (
                  <TableRow
                    col1={row.name}
                    col2={row.email}
                    col3={row.address}
                    type="user"
                    id={row.id}
                  />
                ))
            ) : (
              <div className="relative w-full">
                <Shimmer col={5} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSection;
