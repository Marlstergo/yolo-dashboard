import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import OverView from "@/components/molecules/overview";
import GameSection from "@/components/molecules/gameSection";
import CustomerSection from "@/components/molecules/customerSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <OverView />
      <div>
        <GameSection />
      </div>
      <div className="mt-[44px]">
        <CustomerSection />
      </div>
    </>
  );
}

Home.title = "Dashboard";
