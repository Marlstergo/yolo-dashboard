import Modal from "@/components/molecules/Modal";
import Image from "next/image";
import React, { useState } from "react";

interface Row {
  col1: string;
  col2: string;
  col3: string;
  sub3?: string;
  type: string;
}

const TableRow = ({ col1, col2, col3, sub3, type }: Row) => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  const submit = () => {
    // setIsOpen(true);
  };
  return (
    <div>
      {/* <Modal
        caution
        isOpen={isOpen}
        buttonText="Delete"
        // header=""
        closeModal={closeModal}
        submit={submit}
      >
        <div className="h-full w-full flex justify-center items-center flex-col">
          <Image src="/caution-icon.svg" height={80} width={80} alt="" />
          <p className="mt-6 mb-4">Are you sure to delete entry?</p>
        </div>
      </Modal> */}
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
          <button className="justify-center items-center flex border-white border-[1px] border-opacity-50 h-[40px] w-[76px] mr-4 rounded-lg active:opacity-50 text-sm gap-[10px]">
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
