import { IState } from "../reducers";

export function addUser(user: IState) {
  return {
    type: "ADD_USER",
    payload: user,
  };
}
