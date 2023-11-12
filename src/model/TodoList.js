export default class TodoList {
  constructor(todos = []) {
    this.todos = todos;
  }

  add = (todo) => {
    this.todos.push(todo);
  };

  delete = (todoId) => {
    this.todos = this.todos.filter((todo) => todo.id !== todoId);
  };
}
