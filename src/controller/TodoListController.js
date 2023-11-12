export default class TodoListController {
  constructor(todoList) {
    this.todoList = todoList;
    this.deleteClickedHandler = deleteClickedHandler;
    this.todoListView = new TodoListView(this);
  }
}
