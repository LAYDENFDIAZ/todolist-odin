import Todo from "./todo.js";
import TodoComponent from "./TodoComponent.js";

const TODO_LIST = document.querySelector(".todo-list");

const todoItem = new Todo(
  "Todo Title",
  "Todo Description",
  "Todo Due Date",
  Todo.PRIORITY_HIGH
);

const todoView = new TodoComponent(todoItem);

todoView.render(TODO_LIST);
