const Task = require ('./task.js');

const addTask = (tasks, input) => {
  const newTask = new Task(input.value, false, tasks.length);
  tasks.push(newTask);
};

module.exports = addTask;