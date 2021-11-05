class Task {
    constructor(id, name, state) {
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
