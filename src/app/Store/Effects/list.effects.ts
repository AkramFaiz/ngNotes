import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { EMPTY, exhaustMap, from, map } from "rxjs";
import { lists } from "src/app/list/list";
import { getList, getListSuccess } from "../Actions/list.action";
import { List, User } from "../Reducers/list.reducer";

@Injectable()
export class listEffects {
  constructor(private actions$: Actions, private store: Store<List>) {}
//   loadList$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(getList),
//       exhaustMap(() =>
//         from([...lists]).pipe(
//           map((list) => {
//             console.log(list)
//           })
//         )
//       )
//   );
  //getListSuccess(list)
}
