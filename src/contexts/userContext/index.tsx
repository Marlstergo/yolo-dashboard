import axios from "axios";
import { createContext, ReactElement, useEffect, useState } from "react";

export const UserContext = createContext({
  deleteUser: () => {},
  addUser: () => {},
  editUser: () => { },
  getAllUsers: () => { },
  allUsers: []
});

interface Props {
  children: ReactElement;
}

export const UserProvider = ({ children }: Props) => {
  const [games, setGames] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {}, []);

  const getAllUsers = () => {
    setIsLoading(false);
  };
  const editUser = () => {
    setIsLoading(false);
  };
  const deleteUser = () => {
    setIsLoading(false);
  };
  const addUser = () => {
    setIsLoading(false);
  };

  const value = {
    deleteUser,
    addUser,
    editUser,
    allUsers,
    getAllUsers,
  };

  return (
    <UserContext.Provider value={value}>
      {isLoading === undefined ? (
        <center>
          <h3>Loading!!</h3>
        </center>
      ) : (
        children
      )}
    </UserContext.Provider>
  );
};
