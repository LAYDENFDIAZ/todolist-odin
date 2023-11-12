// Importing the necessary modules for MVC architecture
import Todo from "./todo.js"; // Model
import TodoController from "./TodoController.js"; // Controller
import TodoList from "./model/TodoList.js"; // Model
import TodoListView from "./view/TodoListView.js"; // View
import TodoView from "./TodoView.js"; // View
import TodoListController from "./controller/TodoListController.js";

// Model instantiation: creating a new TodoList instance
const todoList = new TodoList([]);

// View instantiation: creating a new TodoListView instance
const TodoListController = new TodoListController(this);

// Controller logic: Function to handle new todo submission
const newTodoSubmitted = (formData) => {
  // Creating a new Todo object (Model) from the form data
  const newTodo = new Todo(
    formData.title,
    formData.description,
    formData.dueDate,
    Todo.priorityFromString(formData.priority)
  );

  // Invoking the render function to update the View
  render();
};

// Controller logic: Function to handle todo deletion
function onTodoDeleteClicked(todoId) {
  // Deleting a Todo from the TodoList (updating the Model)
  todoList.delete(todoId);
  // Re-rendering the View
  todoListView.render(todoListTodos, onTodoDeleteClicked);
}

const render = () => {
  const todoControllers = todoList.todos.map((todo) => {
    return new TodoController(todo, onTodoDeleteClicked);
  });

  todoListView.render(todoControllers);
};
// Initial rendering of the View

render();
