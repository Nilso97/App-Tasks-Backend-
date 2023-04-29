const database = require("../infra/database");

exports.getTasks = () => {
  return database.query("SELECT * FROM app.tasks;");
};

exports.createTask = (task) => {
  return database.one(
    "INSERT INTO app.tasks (title, content, complete) VALUES ($1, $2, $3) RETURNING *;",
    [task.title, task.content, task.complete]
  );
};

exports.getTask = (id) => {
  return database.oneOrNone("SELECT * FROM app.tasks WHERE id = $1;", [id]);
};

exports.updateTask = (id, task) => {
  return database.none(
    "UPDATE app.tasks SET title = $1, content = $2, complete = $3 WHERE id = $4;",
    [task.title, task.content, task.complete, id]
  );
};

exports.deleteTask = (id) => {
  return database.none("DELETE FROM app.tasks WHERE id = $1;", [id]);
};
