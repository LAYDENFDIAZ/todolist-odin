import Todo from "./todo.js";

export default class TodoView {
  constructor(TodoViewController) {
    //controller will be passed to the view

    this.TodoViewController = TodoViewController;

    this.CONTAINER = document.createElement("li");
    this.CONTAINER.classList.add("todo");

    this.TITLE = document.createElement("h3");
    this.TITLE.classList.add("todo-title");
    this.DESCRIPTION = document.createElement("p");
    this.DESCRIPTION.classList.add("todo-description");
    this.DUE_DATE = document.createElement("p");
    this.DUE_DATE.classList.add("todo-due-date");
    this.PRIORITY = document.createElement("p");
    this.PRIORITY.classList.add("todo-priority");

    this.ACTIONS_CONTAINER = document.createElement("div");
    this.ACTIONS_CONTAINER.classList.add("todo-actions");
    this.BUTTON_EDIT = document.createElement("button");
    this.BUTTON_EDIT.classList.add("todo-edit");
    this.BUTTON_EDIT.textContent = "Edit";
    this.BUTTON_DELETE = document.createElement("button");
    this.BUTTON_DELETE.classList.add("todo-delete");
    this.BUTTON_DELETE.textContent = "Delete";
    this.BUTTON_DELETE.addEventListener("click", () => {
      this.TodoViewController.deleteClicked();
    });

    this.ACTIONS_CONTAINER.append(this.BUTTON_EDIT, this.BUTTON_DELETE);
  }

  render = (parent, { title, description, dueDate, priority }) => {
    // using parent as a DOM element in this case helps us to
    // decouple the TodoView from the TodoController
    this.TITLE.textContent = title;
    this.DESCRIPTION.textContent = description;
    this.DUE_DATE.textContent = `Due Date: ${dueDate}`;
    this.PRIORITY.textContent = `Priority: ${priority}`;

    this.CONTAINER.append(
      this.TITLE,
      this.DESCRIPTION,
      this.DUE_DATE,
      this.PRIORITY,
      this.ACTIONS_CONTAINER
    );

    parent.append(this.CONTAINER);
  };
}
