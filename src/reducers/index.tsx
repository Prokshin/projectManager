export interface IStore {
  user: {
    name: string;
    id: string;
    email: string;
  };
}
export enum EReduxActionTypes {
  ADD_USER = "ADD_USER",
}

export interface IReduxBaseAction {
  payload: any;
  type: EReduxActionTypes;
}

export const initialState: IStore = {
  user: {
    name: "",
    id: "",
    email: "",
  },
};

export function rootReducer(
  store: IStore = initialState,
  action: IReduxBaseAction,
) {
  switch (action.type) {
    case "ADD_USER":
      return { ...store, user: action.payload };
    default:
      return store;
  }
}
