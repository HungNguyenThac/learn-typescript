class Task {
  id: number;
  name: string;
  state: string;
  constructor(id: number, name: string, state: string) {
    this.id = id;
    this.name = name;
    this.state = state;
  }
  showTaskInfo() {
    console.log(`${this.id} - ${this.name} - ${this.state}`);
  }
}

let taskObj1 = new Task(1, "game", "started");
console.log(taskObj1);
taskObj1.showTaskInfo();

interface TaskInterFace {
  id: number;
  name: string;
  age: number;
}

class TaskService {
  tasks: TaskInterFace[];

  constructor(tasks: TaskInterFace[]) {
    this.tasks = tasks;
  }

  getTasks() {
    return this.tasks;
  }
}

const tasks: TaskInterFace[] = [{ id: 1, name: "hello", age: 20 }];
let taskServiceObj = new TaskService(tasks);
taskServiceObj.getTasks();
