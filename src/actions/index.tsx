import { IStore } from "../reducers";

export function addUser(user: IStore) {
  return {
    type: "ADD_USER",
    payload: user,
  };
}
