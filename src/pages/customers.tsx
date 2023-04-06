import CustomerSection from "@/components/organisms/customerSection";
import { UserContext } from "@/contexts/userContext";
import React, { useContext } from "react";

const Users = () => {
  const { allUsers } = useContext(UserContext);

  return (
    <div>
      <div>
        <CustomerSection allUser={allUsers.slice(0, 6)} />
      </div>
    </div>
  );
};

export default Users;
