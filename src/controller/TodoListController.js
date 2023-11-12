import TodoListView from "../view/TodoListView.js";
import Todo from "../todo.js";
import TodoController from "../TodoController.js";

export default class TodoListController {
  constructor(todoList) {
    this.todoList = todoList;
    this.todoListView = new TodoListView(this);
  }

  onTodoDeleteClicked = (todoId) => {
    // Deleting a Todo from the TodoList (updating the Model)
    console.log(this);
    this.todoList.delete(todoId);
    // Re-rendering the View
    this.render();
  };

  render = () => {
    const todoControllers = this.todoList.todos.map((todo) => {
      return new TodoController(todo, this.onTodoDeleteClicked);
    });

    this.todoListView.render(todoControllers);
  };

  todoItemSubmitted = (formData) => {
    console.log(formData);
    // Creating a new Todo object (Model) from the form data
    const newTodo = new Todo(
      formData.todoTitle,
      formData.todoDescription,
      formData.todoDueDate,
      Todo.priorityFromString(formData.todoPriority)
    );

    this.todoList.add(newTodo);

    // Invoking the render function to update the View
    this.render();
  };
}
