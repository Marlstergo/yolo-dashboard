import axios from "axios";
import { createContext, ReactElement, useEffect, useState } from "react";
import { toast } from "react-toastify";

interface AddInterface {
  name: string;
  category: string;
}
interface EditInterface {
  name: string;
  category: string;
  id: string;
  cb: Function;
}
export interface SingleGame {
  name: string;
  category: string;
  createdAt: Date;
  _id: string;
}

export const GameContext = createContext({
  deleteGame: (e: string, cb: Function) => {},
  addGames: ({}: AddInterface, callB: Function | void) => {},
  editGames: ({}: EditInterface) => {},
  getAllGames: () => {},
  allGames: [] as SingleGame[],
  isLoading: false,
});

interface Props {
  children: ReactElement;
}

export const GameProvider = ({ children }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [allGames, setAllGames] = useState<SingleGame[]>([]);

  useEffect(() => {
    getAllGames();
  }, []);

  const getAllGames = () => {
    setIsLoading(true);

    axios
      .get("/game?page=1&limit=50")
      .then((res) => {
        setAllGames(res?.data?.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };
  const editGames = ({ name, category, id, cb }: EditInterface) => {
    setIsLoading(true);
    toast.promise(
      axios
        .put(`/game/${id}`, {
          name,
          category,
        })
        .then(() => {
          cb();
          getAllGames();
          setIsLoading(false);
        })
        .catch((err) => {
          setIsLoading(false);
        }),
      {
        pending: "Editing Game please wait.. 😵‍💫",
        success: "Game Edited Successfully 💪",
        error: "Unable to edit Game 😢",
      }
    );
  };
  const deleteGame = (id: string, cb: Function) => {
    toast.promise(
      axios
        .delete(`/game/${id}`)
        .then(() => {
          getAllGames();
          cb();
        })
        .catch((err) => {
          console.log(err);
        }),
      {
        pending: "Editing Game please wait.. 😵‍💫",
        success: "Game deleted Successfully 💪",
        error: "Unable to edit Game 🤯",
      }
    );
    return;
  };
  const addGames = ({ name, category }: AddInterface, callB: any) => {
    toast.promise(
      axios
        .post(`/game`, {
          name,
          category,
        })
        .then((res) => {
          if (res.status >= 200 && res.status < 204) {
            setIsLoading(false);
            getAllGames();
            callB();
          } else {
            throw new Error("API call failed");
          }
        })
        .catch((err) => {
          setIsLoading(false);
        }),
      {
        success: "Game Added Successfully 💪",
        pending: "Editing Game please wait.. 😵‍💫",
        error: "Unable to edit Game 🤯",
      }
    );
  };

  console.log(allGames);

  const value = {
    deleteGame,
    addGames,
    editGames,
    allGames,
    getAllGames,
    isLoading,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
