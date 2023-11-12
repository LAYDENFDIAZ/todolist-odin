import TodoView from "./TodoView.js";

export default class TodoController {
  //deleteonclickedhandler is a function that will be passed to the controller
  // and expects an id to be passed to it
  constructor(todo, deleteClickedeHandler) {
    this.todo = todo;
    this.todoView = new TodoView(this);
    this.deleteClickedeHandler = deleteClickedeHandler;
  }

  deleteClicked = () => {
    this.deleteClickedeHandler(this.todo.id);
  };

  // scope of this is the TodoController instance
  render = (parent) => {
    const displayTodo = { ...this.todo };
    displayTodo.priority = this.todo.getPriorityText();
    this.todoView.render(parent, displayTodo);
  };
}
