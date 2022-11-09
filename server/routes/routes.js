/**
 *
 * Rotas da Aplicação
 * @author: Nilso Junior
 *
 */

const express = require("express");
const { updateTask } = require("../data/tasksData");
const tasksService = require("../services/tasksService");
const router = express.Router();

// Retorna todas as tarefas
router.get("/tarefas", async function (req, res) {
  const tasks = await tasksService.getTasks();
  return res.status(200).json(tasks);
});

// Retorna uma única tarefa através da ID
router.get("/tarefas/buscar/:id", async function (req, res) {
  const task = await tasksService.getTask(req.params.id);
  if (!task)
    return res.status(401).json({
      error: `Tarefa de id ${req.params.id} não encontrada!`,
    });
  return res.status(200).json(task);
});

// Adiciona uma nova tarefa
router.post("/tarefas/adicionar", async function (req, res) {
  const { title, content, complete } = req.body;
  const task = { title, content, complete };
  const newTask = await tasksService.createTask(task);
  return res.status(201).json({
    message: "Tarefa adicionada com sucesso!",
  });
});

// Atualiza uma tarefa através da ID
router.put("/tarefas/atualizar/:id", async function (req, res) {
  const task = req.body;
  const updtTask = await tasksService.updateTask(req.params.id, task);

  return res.status(200).json(task);
});

// Deleta uma tarefa através da ID
router.delete("/tarefas/deletar/:id", async function (req, res) {
  const task = req.params.id;
  const dltTask = await tasksService.deleteTask(task);

  return res.status(200).json({
    message: "Tarefa foi deletada com sucesso!",
  });
});

module.exports = router;
