import NavItem from "@/components/atoms/navItem";
import Header from "@/components/molecules/header";
import Image from "next/image";
import Link from "next/link";
import React, { ReactElement } from "react";

interface LayoutProps {
  children: ReactElement;
}

interface Nav {
  name: string;
  icon: string;
  href: string;
}

const NavList = [
  {
    name: "Dashboard",
    icon: "/dashboard.svg",
    href: "/",
  },
  {
    name: "Games",
    icon: "/games.svg",
    href: "/games",
  },
  {
    name: "Customers",
    icon: "/customers.svg",
    href: "/users",
  },
  {
    name: "Settings",
    icon: "/settings.svg",
    href: "/",
  },
  {
    name: "Support",
    icon: "/support.svg",
    href: "/",
  },
];

const DashboardLayout = ({ children }: LayoutProps) => {
  return (
    <div className="bg-[#282043] h-screen w-screen">
      <div className="h-full w-full">
        <div className="flex w-full h-full ">
          <div className="flex flex-col w-[140px] items-center bg-[#332E59] ">
            <div className="mt-[20px] mb-[100px]">
              <Link href="/">
                <Image height="48" width={95} alt="" src="/logo.svg" />
              </Link>
            </div>
            {NavList.map((nav) => (
              <div className="mb-[46px]">
                <NavItem icon={nav.icon} href={nav.href} name={nav.name} />
              </div>
            ))}
          </div>
          <div className="right px-[30px] w-full">
            <Header />
            <div>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
