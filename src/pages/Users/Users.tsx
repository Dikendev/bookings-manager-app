import { usersMock } from "../../bookable-mock";
import UserList from "./UserList";

export const User = () => {
  return (
    <>
      <h2>Users</h2>
      <UserList users={usersMock} />
    </>
  );
};
