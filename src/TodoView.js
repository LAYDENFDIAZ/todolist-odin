export default class TodoView {
  constructor(controller) {
    this.CONTAINER = document.createElement("li");

    this.TITLE = document.createElement("p");
    this.DESCRIPTION = document.createElement("p");
    this.DUE_DATE = document.createElement("p");
    this.PRIORITY = document.createElement("p");

    TITLE.textContent = this.title;
    DESCRIPTION.textContent = this.description;
    DUE_DATE.textContent = `Due Date: ${this.dueDate}`;
    PRIORITY.textContent = `Priority: ${this.priority}`;

    this.ACTIONS_CONTAINER = document.createElement("div");
    this.BUTTON_EDIT = document.createElement("button");
    this.BUTTON_DELETE = document.createElement("button");
  }

  render = (parent, { title, description, dueDate, priority }) => {
    // using parent as a DOM element in this case helps us to
    // decouple the TodoView from the TodoController
    this.TITLE.textContent = title;
    this.DESCRIPTION.textContent = description;
    this.DUE_DATE.textContent = `Due Date: ${dueDate}`;
    this.PRIORITY.textContent = `Priority: ${priority}`;

    parent.append(this.CONTAINER);
  };
}
