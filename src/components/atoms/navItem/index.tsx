import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

interface NavItem {
  name: string;
  href: string;
  icon: string;
}

const NavItem = ({ name, href, icon }: NavItem) => {
  const router = useRouter();

  return (
    <div
      className={`h-[77px] w-[103px] relative rounded-2xl ${
        router.pathname.includes(href) && router.pathname !== "/" && name !== 'Dashboard'
          ? "bg-gradient-to-r"
          : router.pathname === "/" && name === "Dashboard"
          ? "bg-gradient-to-r"
          : ""
      }  from-[#EE0BD7] to-[#9616C3]`}
    >
      <div className="flex h-[73px] top-[2px] left-[2px] bg-[#332E59] absolute border-[2px] bg-clip-padding border-transparent rounded-2xl  w-[99px] justify-center items-center [backdrop-filter:blur(16.5323px)]">
        <Link href={href} className="flex justify-center items-center flex-col">
          <Image height={24} width={24} alt="" src={icon} />
          <p
            className={`mt-2 leading-[17px] ${
              router.pathname.includes(href) && router.pathname !== "/"
                ? "text-opacity-100"
                : router.pathname === "/" && name === "Dashboard"
                ? "text-opacity-100"
                : "text-opacity-70"
            } text-white  text-sm font-semibold capitalize `}
          >
            {name}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default NavItem;
