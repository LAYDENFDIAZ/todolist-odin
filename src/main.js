// Importing the necessary modules for MVC architecture
import TodoList from "./model/TodoList.js"; // Model
import TodoListController from "./controller/TodoListController.js";

// Model instantiation: creating a new TodoList instance
const todoList = new TodoList([]);

// View instantiation: creating a new TodoListView instance
const todoListController = new TodoListController(todoList);

// moved to the controller

//moved onTodoDeleteClicked to the controller

// moved Render to the controller
// Initial rendering of the View

todoListController.render();
