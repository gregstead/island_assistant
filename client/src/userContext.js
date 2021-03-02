import { createContext, useContext } from "react";

const userContext = createContext({ user: {} }); // Create a context object

export { userContext };

export function useAuth() {
  console.log("userContext :>> ", userContext);
  return useContext(userContext);
}
