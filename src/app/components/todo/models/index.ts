export interface TodoItem {
  id: string;
  description: string;
  completed: boolean;
}
// wrapping TodoItem preferred way
export interface TodoList {
  items: TodoItem[];
}
