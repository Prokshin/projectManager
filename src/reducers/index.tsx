export interface IState {
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

export const initialState: IState = {
  user: {
    name: "",
    id: "",
    email: "",
  },
};

export function rootReducer(state: IState = initialState, action: IReduxBaseAction) {
  switch (action.type) {
    case "ADD_USER":
      return { ...state, user: action.payload };
    default:
      return state;
  }
}
