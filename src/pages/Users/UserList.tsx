import React, { ChangeEvent, useState } from "react";
import { Users } from "../../@types/user.interface";

export interface UserList {
  users: Users;
}

const UserList: React.FC<UserList> = ({ users }) => {
  const [userSelected, setUserSelected] = useState<string>(users[0].name);

  const handleUserChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setUserSelected(event.target.value);
  };

  return (
    <>
      <div>
        <label htmlFor="user">Users</label>
        <select onChange={(e) => handleUserChange(e)}>
          {users.map((user) => (
            <option key={user.id} value={user.name}>
              {user.name}
            </option>
          ))}
        </select>
      </div>
      <div>{`Selected user: ${userSelected}`}</div>
    </>
  );
};

export default UserList;
