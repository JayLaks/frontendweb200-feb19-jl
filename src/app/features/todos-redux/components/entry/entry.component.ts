import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoAdded } from '../../actions/todos.actions';
import { TodosState } from '../../reducers';


@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  constructor(private store: Store<TodosState>) { }

  ngOnInit() {
  }
add(descriptioElement: HTMLInputElement) {
  const description = descriptioElement.value;
  // do something
  this.store.dispatch(new TodoAdded(description));
  descriptioElement.value = '';
  descriptioElement.focus();
}
}
