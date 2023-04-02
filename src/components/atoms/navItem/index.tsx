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
  console.log(router.pathname);

  return (
    <div className="flex justify-center items-center">
      <Link href={href} className="flex justify-center items-center flex-col">
        <Image height={24} width={24} alt="" src={icon} />
        <p
          className={`mt-2 leading-[17px] ${
            router.pathname.includes(href)
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
  );
};

export default NavItem;
