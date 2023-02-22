import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { addList, getList } from "../Store/Actions/list.action";
import { List, User } from "../Store/Reducers/list.reducer";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit {
  list$ = this.store.select("list");
  constructor(private store: Store<List>) {}
  ngOnInit(): void {
    this.list$.subscribe((list) => console.log(list));
    this.store.dispatch(getList());
  }

  addListItem() {
    this.store.dispatch(addList({ id: 4, name: "hans", username: "raj" }));
  }
}
