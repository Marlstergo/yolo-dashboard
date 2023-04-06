import Image from "next/image";
import React from "react";

interface CardProps {
  icon: string;
  total: string;
  name: string;
  percentage?: string;
  theme?: string;
}

const OverviewCard = ({ icon, total, name, percentage, theme }: CardProps) => {
  return (
    <div className="min-w-[224px] h-[82px] md:h-[145px] bg-[#332e59] p-3 md:p-4 rounded-2xl">
      <div className="flex md:block items-center">
        <Image src={icon} alt="" height={24} width={24} className='mr-4 md:mr-0' />
        <div className="flex-1">
          <p className="font-semibold text-[24px] text-white md:mt-[23px]">
            {total}
          </p>
          <p className="md:hidden block font-medium text-[12px] leading-[17px] text-white text-opacity-70 capitalize">
            {name}
          </p>
        </div>
        <div className=" md:w-full flex justify-between items-center  ">
          <p className="hidden md:block font-medium text-[14px] leading-[17px] text-white text-opacity-70 capitalize">
            {name}
          </p>
          {percentage && (
            <p
              style={{
                color: theme,
                fill: theme,
              }}
              className={`flex text-xs md:text-base`}
            >
              {/* <Image src="/spike.svg" height={20} width={20} className alt="" /> */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_41_5898)">
                  <path
                    d="M17.5 5.83333L11.3826 12.4306L8.16286 8.95833L3.33331 14.1667"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13.3333 5.83333H17.5V9.99999"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_41_5898">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span className="ml-1">{percentage}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default OverviewCard;
