const express = require("express");
const { updateTask } = require("../data/tasksData");
const tasksService = require("../services/tasksService");
const router = express.Router();

/**
 *
 * Rotas da Aplicação
 * @author: Nilso Junior
 *
 */

// Retorna todas as tarefas
router.get("/tasks", async function (req, res) {
  const tasks = await tasksService.getTasks();
  return res.status(200).json(tasks);
});

// Retorna uma única tarefa através da ID
router.get("/tasks/:id", async function (req, res) {
  const getTask = await tasksService.getTask(req.params.id);

  return res.status(200).json(getTask);
});

// Adiciona uma nova tarefa
router.post("/tasks", async function (req, res) {
  const { title, content, complete } = req.body;
  const task = { title, content, complete };
  const newTask = await tasksService.createTask(task);
  return res.status(201).json({
    message: "Tarefa adicionada com sucesso!",
  });
});

// Atualiza uma tarefa através da ID
router.put("/tasks/:id", async function (req, res) {
  const task = req.body;
  const updtTask = await tasksService.updateTask(req.params.id, task);

  return res.status(200).json(task);
});

// Deleta uma tarefa através da ID
router.delete("/tasks/:id", async function (req, res) {
  const task = req.params.id;
  const dltTask = await tasksService.deleteTask(task);

  return res.status(200).json({
    message: "Tarefa foi deletada com sucesso!",
  });
});

module.exports = router;
