const tasksData = require("../data/tasksData");

exports.getTasks = function () {
  return tasksData.getTasks();
};

exports.getTask = function (id) {
  return tasksData.getTask(id);
};

exports.createTask = function (task) {
  return tasksData.createTask(task);
};

exports.updateTask = function (id, task) {
  return tasksData.updateTask(id, task);
};

exports.deleteTask = function (id) {
  return tasksData.deleteTask(id);
};
