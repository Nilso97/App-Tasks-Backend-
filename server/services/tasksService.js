const tasksData = require("../data/tasksData");

exports.getTasks = () => {
  return tasksData.getTasks();
};

exports.getTask = (id) => {
  return tasksData.getTask(id);
};

exports.createTask = (task) => {
  return tasksData.createTask(task);
};

exports.updateTask = (id, task) => {
  return tasksData.updateTask(id, task);
};

exports.deleteTask = (id) => {
  return tasksData.deleteTask(id);
};
