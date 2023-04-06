import axios from "axios";
import { createContext, ReactElement, useEffect, useState } from "react";
import { toast } from "react-toastify";

interface EditInterface {
  name: string;
  category: string;
  id: string;
}
interface AddInterface {
  name: string;
  category: string;
}
interface SingleGame {
  name: string;
  category: string;
  createdAt: Date;
  _id: string;
}

export const GameContext = createContext({
  deleteGame: (e: string) => {},
  addGames: ({}: AddInterface, callB: Function | void) => {},
  editGames: ({}: EditInterface) => {},
  getAllGames: () => {},
  allGames: [] as SingleGame[],
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
  const editGames = ({ name, category, id }: EditInterface) => {
    setIsLoading(true);
    toast.promise(
      axios
        .put(`/game/${id}`)
        .then(() => {
          setIsLoading(false);
        })
        .catch((err) => {
          setIsLoading(false);
        }),
      {
        pending: "Editing User please wait.. 😵‍💫",
        success: "User Edited Successfully 💪",
        error: "Unable to edit user 😢",
      }
    );
  };
  const deleteGame = (id: string) => {
    toast.promise(
      axios
        .delete(`/game/${id}`)
        .then(() => {})
        .catch((err) => {
          console.log(err);
        }),
      {
        pending: "Editing User please wait.. 😵‍💫",
        success: "User deleted Successfully 💪",
        error: "Unable to edit user 😢",
      }
    );
    return;
  };
  const addGames = ({ name, category }: AddInterface, callB: any) => {
    toast.promise(
      axios
        .post(`/gamez`, {
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
          // setIsLoading(false);
          // getAllGames();
          // callB();
        })
        .catch((err) => {
          alert('failed')
          setIsLoading(false);
        })
      ,
      // {
      //   pending: "Editing User please wait.. 😵‍💫",
      //   success: "User Added Successfully 💪",
      //   error: "Unable to edit user 🤯",
      // }
      {
        pending: "Promise is pending",
        success: "Promise resolved 👌",
        error: "Promise rejected 🤯",
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
  };

  return (
    <GameContext.Provider value={value}>
      {isLoading === undefined ? (
        <center>
          <h3>Loading!!</h3>
        </center>
      ) : (
        children
      )}
    </GameContext.Provider>
  );
};
