import { createAction } from "@ngrx/store";
import { User } from "../Reducers/list.reducer";

export const getList = createAction("[List] get list");
export const getListSuccess = createAction(
  "[List] get list success",
  (list: ReadonlyArray<User>) => list
);
export const addList = createAction("[List] add list", (name: User) => name);
export const addListSuccess = createAction(
  "[List] add list success",
  (name: User) => name
);
