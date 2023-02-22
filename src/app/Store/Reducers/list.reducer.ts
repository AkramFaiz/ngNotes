import { createReducer, on } from "@ngrx/store";
import { lists } from "src/app/list/list";
import { addList, addListSuccess, getList, getListSuccess } from "../Actions/list.action";

export interface User {
  id: number;
  name: string;
  username: string;
}
export interface List {
  list: ReadonlyArray<User>;
}

const initialState: ReadonlyArray<User> = [];

export const listReducer = createReducer(
  initialState,
  on(getListSuccess, (state) => [...lists] ),
  on(addListSuccess, (state, name) => [...state, name])
);
