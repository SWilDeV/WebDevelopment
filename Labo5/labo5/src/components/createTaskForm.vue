<template>
  <div class="create-task-form">
    <h2>Add a ToDo:</h2>
    <input v-model="name" type="text" placeholder="Enter Task" />
    <button type="button" v-on:click="createTask">Create</button>
  </div>
</template>

<script>
export default {
  name: "createTaskForm",
  props: ["onCreate"],
  data: () => ({
    name: "",
  }),
  methods: {
    createTask() {
      if (this.name.trim() === "") {
        return;
      }
      this.onCreate(this.name);
      this.name = "";
    },
  },
};
</script>

<style scoped></style>
