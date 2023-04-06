import Input from "@/components/atoms/input";
import TableRow from "@/components/atoms/tableRow";
import { GameContext } from "@/contexts/gameContext";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState } from "react";
import SelectInput from "../../atoms/selectInput";
import Modal from "../Modal";

interface GameInput {
  name: string;
  category: string;
}

const GameSection = () => {
  const { getAllGames, addGames, allGames, deleteGame, editGames } =
    useContext(GameContext);
  const [showFilter, setShowFilter] = useState(false);
  const [selectedRange, setSelectedRange] = useState({
    title: "none",
    value: "",
  });
  const [selectedCategory, setSelectedCategory] = useState({
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

  const [state, setState] = useState({
    gameName: "",
  });
  const [gameCategory, setGameCategory] = useState<{
    title: string;
    value: string;
  }>({ title: "", value: "" });
  console.log("catt", gameCategory);

  const onChange = (e: any) => {
    setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submit = () => {
    addGames(
      { name: state.gameName, category: gameCategory.value },
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
            label="Game Name"
            name="gameName"
            onChange={onChange}
            placeholder="Enter game name ..."
            value={state.gameName}
          />
          <p className="mb-2">Select Game Category :</p>
          <div className="h-[52px]">
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
              value={gameCategory}
              type="newGame"
              onChange={setGameCategory}
            />
          </div>
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
              onChange={setSelectedCategory}
              value={selectedCategory}
              filterOptions={[
                {
                  title: "none",
                  value: "",
                },
                {
                  title: "Over",
                  value: "over",
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
              type="category"
            />
          </div>
        </div>
      )}
      <div className="w-full overflow-x-auto hidescroll">
        <div className="min-w-[650px] w-full ">
          <div className="table-fixed w-full bg-[#332E59] rounded-2xl mt-5 px-4 p-5 pb-[1px]">
            <div className="flex mb-4">
              <p className="basis-[30%] text-left text-sm leading-[17px] text-white ">
                Game name
              </p>
              <p className="text-left text-sm leading-[17px]  text-white basis-[28%]">
                Game Category
              </p>
              <p className="text-left text-sm leading-[17px] text-white basis-[29%]">
                Creation Date
              </p>
              <p className="text-left text-sm leading-[17px] text-white basis-[132px]">
                Action
              </p>
            </div>
            {allGames.map((row) => (
              <TableRow
                col1={row.name}
                col2={row.category}
                col3={format(new Date(row.createdAt), "MMMM LL yyy")}
                sub3={format(new Date(row.createdAt), "H:m bbbb")}
                type="game"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameSection;
