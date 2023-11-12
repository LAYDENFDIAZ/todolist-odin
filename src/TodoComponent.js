export default class TodoComponent {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  render = (parent) => {
    // parent is a DOM element
    // <li class="todo">
    //   <h3 class="todo-title">Todo Title</h3>
    //   <p class="todo-description">Todo Description</p>
    //   <p class="todo-due-date">Due Date: Todo Due Date</p>
    //   <p class="todo-priority">Priority: Todo Priority</p>
    //   <div class="todo-actions">
    //     <button class="todo-edit">Edit</button>
    //     <button class="todo-delete">Delete</button>
    //   </div>
    // </li>;

    const CONTAINER = document.createElement("li");
    const TITLE = document.createElement("p");
    const DESCRIPTION = document.createElement("p");
    const DUE_DATE = document.createElement("p");
    const PRIORITY = document.createElement("p");

    TITLE.textContent = this.title;
    DESCRIPTION.textContent = this.description;
    DUE_DATE.textContent = `Due Date: ${this.dueDate}`;
    PRIORITY.textContent = `Priority: ${this.priority}`;

    const ACTIONS_CONTAINER = document.createElement("div");
    const BUTTON_EDIT = document.createElement("button");
    const BUTTON_DELETE = document.createElement("button");

    BUTTON_EDIT.textContent = "Edit";
    BUTTON_DELETE.textContent = "Delete";

    ACTIONS_CONTAINER.append(BUTTON_EDIT, BUTTON_DELETE);
    CONTAINER.append(TITLE, DESCRIPTION, DUE_DATE, PRIORITY, ACTIONS_CONTAINER);
    parent.append(CONTAINER);
  };
}
