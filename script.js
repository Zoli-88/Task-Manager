const $form = document.querySelector("[data-form]");
const $input = document.querySelector("[data-input]");
const $taskList = document.querySelector("[data-task-list]");

let taskIdCounter = 0;

class Task {
  constructor(title) {
    this.title = title;
    this.completed = false;
    this.id = ++taskIdCounter;
  }

  toggleComplete() {
    this.completed = !this.completed;
  }
}

class TaskManager {
  constructor() {
    this.tasks = [];
  }

  addTask(title) {
    const task = new Task(title);
    this.tasks.push(task);
    this.renderTasks(this.tasks);
  }

  removeTask(id) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  renderTasks(tasks) {
    $taskList.replaceChildren();
    tasks.forEach((task) => {
      const title = task.title;
      const listItem = document.createElement("li");
      listItem.textContent = title;
      $taskList.append(listItem);
    });
  }
}

$form.addEventListener("submit", (e) => handleSubmit(e));

function handleSubmit(e) {
  const task = $input.value;
  e.preventDefault();
  taskmanager.addTask(task);
  clearFormInput();
}

function clearFormInput() {
  $input.value = "";
}

const taskmanager = new TaskManager();