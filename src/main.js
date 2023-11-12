import Todo from "./todo.js";
import TodoController from "./TodoController.js";
import TodoView from "./TodoView.js";

const TODO_LIST = document.querySelector("#todo-list");

const todos = [
  new Todo(
    "Learn JavaScript",
    "Complete exercises in chapter 4",
    "12/01/2023",
    Todo.PRIORITY_HIGH
  ),
  new Todo(
    "Grocery Shopping",
    "Buy milk, eggs, and bread",
    "11/15/2023",
    Todo.PRIORITY_MEDIUM
  ),
  new Todo(
    "Read 'Effective Engineer'",
    "Read first three chapters",
    "11/25/2023",
    Todo.PRIORITY_LOW
  ),
  new Todo(
    "Morning Jog",
    "Jog around the park for 30 minutes",
    "11/18/2023",
    Todo.PRIORITY_MEDIUM
  ),
  new Todo(
    "Watch React Tutorial",
    "Complete the first 5 videos of the series",
    "11/20/2023",
    Todo.PRIORITY_HIGH
  ),
  new Todo("Call Mom", "Weekly catch-up call", "11/14/2023", Todo.PRIORITY_LOW),
  new Todo(
    "Prepare Meeting Agenda",
    "Draft agenda for Monday's team meeting",
    "11/17/2023",
    Todo.PRIORITY_HIGH
  ),
  new Todo(
    "Finish Painting",
    "Complete landscape painting",
    "12/05/2023",
    Todo.PRIORITY_LOW
  ),
  new Todo(
    "Check Car Tires",
    "Inflate tires and check pressure",
    "11/22/2023",
    Todo.PRIORITY_MEDIUM
  ),
  new Todo(
    "Organize Desk",
    "Clean and organize work desk",
    "11/19/2023",
    Todo.PRIORITY_LOW
  ),
];

for (const todo of todos) {
  new TodoController(todo).render(TODO_LIST);
}

// const todoView = new TodoComponent(
//   todoItem.title,
//   todoItem.description,
//   todoItem.dueDate,
//   todoItem.getPriorityText()
// );
