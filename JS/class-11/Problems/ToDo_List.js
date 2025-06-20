// Goal: Build a basic To-Do list using objects and arrays (no UI).
// Each Item
//  {
//     task: "attenClass",
//     isCompleted: false
//  }

// Features to Implement:
//     addTask(task): Adds a new task.
//     removeTask(task): Removes a task.
//     markComplete(task): Marks a task as completed.
//     listTasks(): Lists all tasks, showing completed ones differently.

function createTodoList() {
  const tasks = [];
  function addTask(task) {
    tasks.push({ task, isCompleted: false });
  }

  function removeTask(task) {
    const index = tasks.findIndex((t) => t.task === task);
    if (index === -1) {
      return "task object not found";
    } else {
      tasks.splice(index, 1);
    }
  }

  function markComplete(task) {
    const index = tasks.findIndex((t) => t.task === task);
    if (index == -1) {
      return "task object not found";
    } else {
      tasks[index].isCompleted = true;
    }
  }

  function listTasks() {
    tasks.forEach((t) => {
      console.log(t.isCompleted ? `✅ ${t.task}` : `❌ ${t.task}`);
    });
  }

  return {
    addTask,
    removeTask,
    markComplete,
    listTasks,
  };
}

const todo = createTodoList();

todo.addTask("Buy Groceries");
todo.addTask("Do Laundry");
todo.addTask("Clean Room");
todo.listTasks();
console.log("----------------");
todo.markComplete("Buy Groceries");
todo.listTasks();
console.log("----------------");
todo.removeTask("Do Laundry");
todo.listTasks();
