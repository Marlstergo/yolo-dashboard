import Modal from "@/components/molecules/Modal";
import { GameContext } from "@/contexts/gameContext";
import Image from "next/image";
import React, { useContext, useState } from "react";
import Input from "../input";
import SelectInput from "../selectInput";

interface Row {
  col1: string;
  col2: string;
  col3: string;
  sub3?: string;
  type: string;
  id: string;
}

const TableRow = ({ col1, col2, col3, sub3, type, id }: Row) => {
  const { deleteGame, editGames } = useContext(GameContext);

  let [isOpen, setIsOpen] = useState(false);
  let [isEditOpen, setIsEditOpen] = useState(false);
  const [state, setState] = useState({
    gameName: col1,
  });

  const [gameCategory, setGameCategory] = useState<{
    title: string;
    value: string;
  }>({ title: col2, value: "" });

  function closeModal() {
    setIsOpen(false);
  }

  const onChange = (e: any) => {
    setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  function openModal() {
    setIsOpen(true);
  }
  function closeEditModal() {
    setIsEditOpen(false);
  }

  function openEditModal() {
    setIsEditOpen(true);
  }
  const submit = () => {
    deleteGame(id, closeModal);
  };
  const submitEdit = () => {
    editGames({
      id: id,
      cb: closeEditModal,
      name: state.gameName,
      category: gameCategory.value,
    });
  };

  return (
    <div>
      <Modal
        caution
        isOpen={isOpen}
        buttonText="Delete"
        closeModal={closeModal}
        submit={submit}
      >
        <div className="h-full w-full flex justify-center items-center flex-col">
          <Image src="/caution-icon.svg" height={80} width={80} alt="" />
          <p className="mt-6 mb-4">Are you sure to delete entry?</p>
        </div>
      </Modal>

      <Modal
        isOpen={isEditOpen}
        buttonText="Edit"
        closeModal={closeEditModal}
        submit={submitEdit}
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
      <div className="flex w-full p-4 mb-4 text-white bg-[#282043] rounded-2xl">
        <div className="basis-[30%] flex gap-3 items-center text-white">
          <Image
            width={48}
            height={48}
            src={type === "game" ? "/avv.svg" : "man.svg"}
            className="!h-10 !w-10 md:h-auto md:w-auto"
            alt=""
          />
          <p className="text-sm font-semibold truncate">{col1}</p>
        </div>
        <div className="basis-[30%] items-center flex truncate">
          <p className="text-sm font-medium truncate">{col2}</p>
        </div>
        <div className="basis-[30%] flex flex-col justify-center">
          <p className="font-medium text-sm truncate">{col3}</p>
          <p className="text-xs text-opacity-50">{sub3}</p>
        </div>
        <div className="basis-[132px] flex">
          <button
            className="justify-center items-center flex border-white border-[1px] border-opacity-50 h-[40px] w-[76px] mr-4 rounded-lg active:opacity-50 text-sm gap-[10px]"
            onClick={() => {
              openEditModal();
            }}
          >
            <Image width={20} height={20} src="/edit.svg" alt="" /> Edit
          </button>
          <button
            className="justify-center items-center flex border-white border-[1px] active:opacity-50 border-opacity-50 h-[40px] w-[40px] rounded-lg text-sm "
            onClick={() => {
              openModal();
            }}
          >
            <Image width={20} height={20} src="/bin.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TableRow;
