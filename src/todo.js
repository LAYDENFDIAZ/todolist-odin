export default class Todo {
  static PRIORITY_HIGH = 1;
  static PRIORITY_MEDIUM = 2;
  static PRIORITY_LOW = 3;

  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}
