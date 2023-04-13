import NavItem from "@/components/atoms/navItem";
import Header from "@/components/molecules/header";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { ReactElement, useState } from "react";

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
    href: "/customers",
  },
  {
    name: "Settings",
    icon: "/settings.svg",
    href: "#",
  },
  {
    name: "Support",
    icon: "/support.svg",
    href: "#",
  },
];

const DashboardLayout = ({ children }: LayoutProps) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="bg-[#282043] h-screen w-screen overflow-hidden">
      <div className="h-full w-full max-w-[1600px] mx-auto relative">
        {isOpen && (
          <AnimatePresence
            mode="wait"
            initial={false}
            onExitComplete={() => window.scrollTo(0, 0)}
          >
            <motion.div
              initial="pageInitial"
              animate="pageAnimate"
              variants={{
                pageInitial: {
                  opacity: 0,
                  x: -100,
                },
                pageAnimate: {
                  opacity: 1,
                  x: 0,
                },
              }}
            >
              <div className="w-full bg-black bg-opacity-25 absolute z-40 h-full">
                <div className="flex flex-col w-[140px] min-w-[140px] items-center bg-[#332E59] h-screen overflow-y-auto  left-0 top-0 ">
                  <div className="mt-[60px] mb-[60px]">
                    <Link href="/">
                      <Image priority quality={50} height="48" width={95} alt="" src="/logo.svg" />
                    </Link>
                  </div>
                  {NavList.map((nav) => (
                    <div className="mb-[46px]">
                      <NavItem
                        icon={nav.icon}
                        href={nav.href}
                        name={nav.name}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        )}
        <div className="flex w-full h-full ">
          <div className="hidden md:flex flex-col w-[140px] min-w-[140px] items-center bg-[#332E59] h-screen overflow-y-auto  ">
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
          <div className="right px-4 md:px-[30px] w-full md:w-[calc(100vw-140px)] flex-col flex">
            <Header isOpen={isOpen} setOpen={setOpen} />
            <div className="overflow-y-auto flex-1 hidescroll">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
