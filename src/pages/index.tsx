import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import OverView from "@/components/molecules/overview";
import GameSection from "@/components/organisms/gameSection";
import CustomerSection from "@/components/organisms/customerSection";
import { GameContext } from "@/contexts/gameContext";
import { useContext, useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { allGames } = useContext(GameContext);
  const [gameSliceList, setGameSliceList] = useState(allGames);
  useEffect(() => {
    setGameSliceList(allGames.slice(0,6))
  }, [allGames])
  
  return (
    <>
      <OverView />
      <div>
        <GameSection allGames={allGames.slice(0, 6)} />
      </div>
      <div className="mt-[44px]">
        <CustomerSection />
      </div>
    </>
  );
}

Home.title = "Dashboard";
