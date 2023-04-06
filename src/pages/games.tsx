import { GameContext } from "@/contexts/gameContext";
import React, { useContext } from "react";
import GameSection from "../components/organisms/gameSection";

const Games = () => {
  const { allGames } = useContext(GameContext);


  return (
    <div>
      <div>
        <GameSection allGames={allGames.slice(0, 6)} />
      </div>
    </div>
  );
};

export default Games;
