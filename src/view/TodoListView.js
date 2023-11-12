export default class TodoListView {
  constructor(TodoListController) {
    this.controller = TodoListController;
    this.TODO_LIST = document.querySelector("#todo-list");

    this.NEW_TODO_FORM = document.querySelector("#new-todo-form");

    this.NEW_TODO_FORM.addEventListener("submit", (event) => {
      event.preventDefault();

      const formElements = event.target.elements;

      const todoTitle = formElements["todo-title"].value;
      const todoDescription = formElements["todo-description"].value;
      const todoDueDate = formElements["todo-due-date"].value;
      const todoPriority = formElements["todo-priority"].value;

      //not right way to do it
      // should pass the values to the controller

      this.controller.todoItemSubmitted({
        todoTitle,
        todoDescription,
        todoDueDate,
        todoPriority,
      });

      //   const newTodo = new Todo(
      //     todoTitle,
      //     todoDescription,
      //     todoDueDate,
      //     Todo.priorityFromString(todoPriority)
      //   );
    });
  }
  render = (todoControllers) => {
    this.TODO_LIST.innerHTML = "";

    for (const todoController of todoControllers) {
      todoController.render(this.TODO_LIST);
    }
  };
}
