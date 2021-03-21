const express = require("express");
const port = 5000;
const cors = require("cors");
const User = require("./repositories/users").default;
const app = express();
const Task = require("./tasks/tasks").default;

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "PUT", "OPTIONS", "PATCH", "UPDATE"],
    credentials: true,
  }),
  express.json()
);

//POST/user
app.post("/users", (req, res, next) => {
  //creer utilisateur
  const user = User.createUser();
  res.status(201).json(user);
});

//GET/user/tasks
app.get("/:userId/tasks", (req, res, next) => {
  const { userId } = req.params;

  const user = User.findById(userId);
  if (!user) {
    return res.status(404).send("User not found.");
  }

  const tasks = Task.getTaskbyUser(userId);

  return res.status(200).json(tasks);
});

//POST/user/tasks
app.post("/:userId/tasks", (req, res, next) => {
  const { userId } = req.params;
  const { name } = req.body;

  const user = User.findById(userId);
  if (!user) {
    return res.status(404).send("User not found.");
  }
  if (!name || name.trim() === "") {
    return res.status(400).send("task name is required");
  }

  const task = Task.createTasks(userId, name);

  return res.status(201).json(task);
});

//PUT/user/tasks/taskID

app.put("/:userId/tasks/:taskId", (req, res, next) => {
  const { userId, taskId } = req.params;
  const { name } = req.body;

  const user = User.findById(userId);
  if (!user) {
    return res.status(404).send("User not found.");
  }

  const task = Task.findById(userId, taskId);
  if (!task) {
    return res.status(404).send("Task not found");
  }

  if (!name || name.trim() === "") {
    return res.status(400).send("task name is required");
  }

  const newTask = Task.updateById(taskId, userId, name);
  return res.status(200).json(newTask);
});

//DELETE/user/tasks/taskID
app.delete("/:userId/tasks/:taskId", (req, res, next) => {
  const { userId, taskId } = req.params;

  const user = User.findById(userId);
  if (!user) {
    return res.status(404).send("User not found.");
  }

  const task = Task.findById(userId, taskId);
  if (!task) {
    return res.status(404).send("Task not found");
  }

  Task.deleteById(taskId, userId);

  return res.status(204).send(null);
});

app.listen(port, () => {
  console.log(`server is runing on port ${port}`);
});
