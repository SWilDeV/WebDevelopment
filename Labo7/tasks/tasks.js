const uuidv4 = require("uuid").v4;

const tasks = {};

const createTasks = (userId, name) => {
  const task = {
    id: uuidv4(),
    name,
  };
  if (!tasks[userId]) {
    tasks[userId] = [];
  }
  tasks[userId].push(task);

  return task;
};

const getTaskbyUser = (userId) => {
  return tasks[userId] || [];
};

const findById = (userId, taskId) => {
  const userTasks = tasks[userId];
  if (!userTasks) {
    return null;
  }

  const task = userTasks.find((task) => task.id === taskId);
  return task;
};

const updateById = (taskId, userId, name) => {
  const userTasks = tasks[userId];
  const taskIndex = userTasks.findIndex((task) => task.id === taskId);
  tasks[userId][taskIndex].name = name;

  return tasks[userId][taskIndex];
};

const deleteById = (taskId, userId) => {
  const userTasks = tasks[userId];
  const taskIndex = userTasks.findIndex((task) => task.id === taskId);
  tasks[userId].splice(taskIndex, 1);
};

exports.default = {
  createTasks,
  getTaskbyUser,
  findById,
  updateById,
  deleteById,
};
