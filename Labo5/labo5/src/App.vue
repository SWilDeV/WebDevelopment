<template>
  <div id="app">
    <h1>MY TODO APP</h1>
    <create-task-form v-bind:onCreate="onCreate" />
    <h2>My ToDos</h2>
    <taskList v-bind:tasks="tasks" v-bind:onDelete="onDelete" v-bind:onUpdate="onUpdate" />
  </div>
</template>

<script>
import createTaskForm from "./components/createTaskForm";
import taskList from "./components/taskList";
import Api from "./services/api";

const api = new Api();

export default {
  name: "App",
  components: {
    createTaskForm,
    taskList,
  },
  data: () => ({
    tasks: [],
  }),

  methods: {
    async onCreate(name) {
      const newTask = await api.createTask(name);
      this.tasks.push(newTask);
    },

    async onUpdate(id,name){
      const newTask =await api.updateTask(id,name);
      const index = this.tasks.findIndex(task => task.id ===id);
      this.tasks[index]=newTask;
    },

    async onDelete(id){
      await api.deleteTask(id);
      this.tasks = this.tasks.filter(task => task.id !==id);
    },
  },

  async created() {
    let user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      user = await api.createUser();
      localStorage.setItem("user", JSON.stringify(user));
    }

    api.registerUser(user);
    this.tasks = await api.getTask();
  },
};
</script>

<style></style>
