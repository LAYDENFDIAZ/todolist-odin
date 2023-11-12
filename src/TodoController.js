import TodoView from "./TodoView.js";

export default class TodoController {
  constructor(todo, deleteClickedeHandler) {
    this.todo = todo;
    this.todoView = new TodoView(this);
  }

  deleteClicked = () => {
    alert(this.todo.id);
  };

  // scope of this is the TodoController instance
  render = (parent) => {
    const displayTodo = { ...this.todo };
    displayTodo.priority = this.todo.getPriorityText();
    this.todoView.render(parent, displayTodo);
  };
}
