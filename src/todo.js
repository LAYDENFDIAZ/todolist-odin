export default class Todo {
  // static is part of the class, not the instance
  static PRIORITY_HIGH = 1;
  static PRIORITY_MEDIUM = 2;
  static PRIORITY_LOW = 3;

  constructor(title, description, dueDate, priority) {
    this.id = Math.random().toString(36).substring(2, 9);
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  getPriorityText = () => {
    switch (this.priority) {
      case Todo.PRIORITY_HIGH:
        return "HIGH";
      case Todo.PRIORITY_MEDIUM:
        return "MEDIUM";
      case Todo.PRIORITY_LOW:
        return "LOW";
      default:
        return "LOW";
    }
  };
}
