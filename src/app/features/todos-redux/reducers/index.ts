import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodoListItem } from '../models';
import * as fromMessage from './messages.reducers';
import * as fromTodos from './todos.reducer';
export interface TodosState {
  message: fromMessage.State;
  todos: fromTodos.State;
}
export const reducers = {
  // object that works as a map - will normally have nothing
  // this is need for app module
  message: fromMessage.reducer,
  todos: fromTodos.reducer
};
// 1. Create a Feature selectot
const selecttodosFeature  = createFeatureSelector<TodosState>('todosFeature');
// 2. Create a Selector for Each Branch of the Feature
const selectMessage = createSelector(selecttodosFeature, f => f.message);
const selectTodos = createSelector(selecttodosFeature, f => f.todos);
// 3. Create any "helpers" you might need (optional)
const {selectAll: selectTodosEntityArray} = fromTodos.adapter.getSelectors(selectTodos);
// 4. Create a selector for what the component needs.

// selectHeading: string
export const selectHeaderMessage = createSelector(selectMessage, m => m.heading);
export const selectGreeting = createSelector(selectMessage, g => g.greeting);
// TodoEntityp[] => TodoListItem[]
export const selectTodoListItems = createSelector(selectTodosEntityArray, t => t.map(x => x as TodoListItem));
