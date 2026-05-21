const express = require("express");
const path = require("path");
const client = require("prom-client");

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

client.collectDefaultMetrics();

let tasks = [
  { id: 1, title: "Complete Jenkins pipeline", completed: false }
];

app.get("/health", (req, res) => {
  res.status(200).json({ status: "UP", service: "student-task-manager" });
});

app.get("/metrics", async (req, res) => {
  res.set("Content-Type", client.register.contentType);
  res.end(await client.register.metrics());
});

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.post("/tasks", (req, res) => {
  const task = {
    id: tasks.length + 1,
    title: req.body.title,
    completed: false
  };

  tasks.push(task);
  res.status(201).json(task);
});

app.put("/tasks/:id/complete", (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id));

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  task.completed = true;
  res.json(task);
});

app.delete("/tasks/:id", (req, res) => {
  tasks = tasks.filter(t => t.id !== parseInt(req.params.id));
  res.json({ message: "Task deleted successfully" });
});

module.exports = app;