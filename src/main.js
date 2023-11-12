import Todo from "./todo.js";
import TodoController from "./TodoController.js";
import TodoView from "./TodoView.js";

const NEW_TODO_FORM = document.querySelector("#new-todo-form");
const TODO_LIST = document.querySelector("#todo-list");

NEW_TODO_FORM.addEventListener("submit", (event) => {
  event.preventDefault();

  const FORM_ELEMENTS = event.target.elements;
  const TODO_TITLE = FORM_ELEMENTS["todo-title"].value;
  const TODO_DESCRIPTION = FORM_ELEMENTS["todo-description"].value;
  const TODO_DUE_DATE = FORM_ELEMENTS["todo-due-date"].value;
  const TODO_PRIORITY = FORM_ELEMENTS["todo-priority"].value;

  const newTodo = new Todo(
    TODO_TITLE,
    TODO_DESCRIPTION,
    TODO_DUE_DATE,
    TODO_PRIORITY
  );

  todos.push(newTodo);
  render();
});

let todos = [];

function onTodoDeleteClicked(todoId) {
  todos = todos.filter((todo) => todo.id !== todoId);
  render();
}

const render = () => {
  TODO_LIST.innerHTML = "";

  for (const todo of todos) {
    new TodoController(todo, onTodoDeleteClicked).render(TODO_LIST);
  }
};

render();

// const todoView = new TodoComponent(
//   todoItem.title,
//   todoItem.description,
//   todoItem.dueDate,
//   todoItem.getPriorityText()
// );
