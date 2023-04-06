import { Listbox, Transition } from "@headlessui/react";
import {
  Dispatch,
  Fragment,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

interface obj {
  title: string;
  value: string;
}
interface Props {
  filterOptions: Array<obj>;
  type: string;
  value: obj | undefined;
  onChange: any;
}

const SelectInput = ({ filterOptions, type, value, onChange }: Props) => {
  return (
    <div className="w-full h-full text-right">
      <Listbox
        as="div"
        className="relative w-full text-left h-full "
        value={value}
        onChange={onChange}
      >
        <div className="w-full h-full">
          <Listbox.Button className="inline-flex w-full relative px-4 py-2 text-sm font-medium text-white hover:bg-opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 h-full items-center bg-[#332E59]  rounded-2xl justify-start">
            {type === "date" ? (
              <Image
                height={20}
                width={20}
                src="/calendar.svg"
                className="mr-4"
                alt=""
              />
            ) : type === "category" ? (
              <Image
                height={20}
                width={20}
                src="/cat.svg"
                className="mr-4"
                alt=""
              />
            ) : null}
            {value?.title}
            <ChevronDownIcon
              className="ml-2 -mr-1 h-5 w-5 absolute right-5 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
          </Listbox.Button>
        </div>
        <Transition
          as={"div"}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Listbox.Options className="absolute right-0 w-full rounded-lg origin-top-right divide-y divide-gray-100 overflow-hidden shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none bg-[#332E59]">
            <div className=" ">
              {filterOptions.map((item, i) => (
                <Listbox.Option value={item} key={i}>
                  {({ selected }) => {
                    return (
                      <button
                        key={i}
                        className={`${
                          value?.value === item.value
                            ? "bg-[#282043] text-[#F20493]"
                            : "text-white bg-[#332E59]"
                        } group flex w-full items-center px-2 py-2 text-sm border-[1px] border-[#282043] h-[49px] hover:bg-[#282043]`}
                      >
                        <span className="w-5 mr-[18px]">
                          {value?.value === item.value && type === "date" ? (
                            <Image
                              src="filled.svg"
                              height={14}
                              width={20}
                              alt=""
                            />
                          ) : value?.value === item.value &&
                            type === "category" ? (
                            <Image
                              src="tickgrad.svg"
                              height={14}
                              width={20}
                              alt=""
                            />
                          ) : type === "date" ? (
                            <Image
                              src="circle.svg"
                              height={14}
                              width={20}
                              alt=""
                            />
                          ) : null}
                        </span>
                        {item.title}
                      </button>
                    );
                  }}
                </Listbox.Option>
              ))}
            </div>
          </Listbox.Options>
        </Transition>
      </Listbox>
    </div>
  );
};

export default SelectInput;
