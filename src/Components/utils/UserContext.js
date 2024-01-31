import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "DEFAULT",
});
export default UserContext;
