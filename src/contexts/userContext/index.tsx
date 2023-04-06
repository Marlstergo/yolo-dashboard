import axios from "axios";
import { createContext, ReactElement, useEffect, useState } from "react";
import { toast } from "react-toastify";

interface AddInterface {
  name: string;
  email: string;
  address: string;
}
interface EditInterface {
  name: string;
  email: string;
  address: string;
  id: string;
  cb: Function;
}
export interface SingleUser {
  name: string;
  email: string;
  address: string;
  createdAt: Date;
  id: string;
}

export const UserContext = createContext({
  deleteUser: (e: string, cb: Function) => {},
  addUsers: ({}: AddInterface, callB: Function | void) => {},
  editUser: ({}: EditInterface) => {},
  getAllUsers: () => {},
  allUsers: [] as SingleUser[],
  isLoading: false,
});

interface Props {
  children: ReactElement;
}

export const UserProvider = ({ children }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [allUsers, setAllUsers] = useState<SingleUser[]>([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = () => {
    setIsLoading(true);

    axios
      .get("/user?page=1&limit=50")
      .then((res) => {
        setAllUsers(res?.data?.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };
  const editUser = ({ name, email, address, id, cb }: EditInterface) => {
    setIsLoading(true);
    toast.promise(
      axios
        .put(`/user/${id}`, {
          name,
          email,
          address,
        })
        .then(() => {
          cb();
          getAllUsers();
          setIsLoading(false);
        })
        .catch((err) => {
          setIsLoading(false);
        }),
      {
        pending: "Editing User please wait.. 😵‍💫",
        success: "User Edited Successfully 💪",
        error: "Unable to edit User 😢",
      }
    );
  };
  const deleteUser = (id: string, cb: Function) => {
    toast.promise(
      axios
        .delete(`/user/${id}`)
        .then(() => {
          getAllUsers();
          cb();
        })
        .catch((err) => {
          console.log(err);
        }),
      {
        pending: "Editing User please wait.. 😵‍💫",
        success: "User deleted Successfully 💪",
        error: "Unable to edit User 🤯",
      }
    );
    return;
  };
  const addUsers = ({ name, email, address }: AddInterface, callB: any) => {
    toast.promise(
      axios
        .post(`/user`, {
          name,
          email,
          address,
        })
        .then((res) => {
          if (res.status >= 200 && res.status < 204) {
            setIsLoading(false);
            getAllUsers();
            callB();
          } else {
            throw new Error("API call failed");
          }
        })
        .catch((err) => {
          setIsLoading(false);
        }),
      {
        success: "User Added Successfully 💪",
        pending: "Editing User please wait.. 😵‍💫",
        error: "Unable to edit User 🤯",
      }
    );
  };

  console.log(allUsers);

  const value = {
    deleteUser,
    addUsers,
    editUser,
    allUsers,
    getAllUsers,
    isLoading,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
