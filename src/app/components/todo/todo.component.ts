import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoList } from './models';
import { TodoDataService } from './todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  stuff: Observable<TodoList>;
  // stuff: TodoList = {
  //   items: [
  //     { id: '1', description: 'Shovel Snow', completed: false },
  //     { id: '2', description: 'Change Oil', completed: true },
  //     { id: '3', description: 'Mow lawn', completed: true }
  //   ]
  // };
  constructor(private service: TodoDataService) {
    // this.stuff = service.getList(); // changed when observable implemented
    this.stuff = service.getListAsObeservable();
  }

  ngOnInit() {
  }
  addNewItem(description: string) {
    this.service.addTodoItem(description);
    // this normally cannot run at the same time as it has to be asynchronous due to API call
   // this.stuff = this.service.getList(); //commented after observable
    // const itemToAdd: TodoItem = {
    //   description,
    //   completed: false,
    //   id: '99'
    // };
    // this.stuff.items = [itemToAdd, ...this.stuff.items];
  }
}
