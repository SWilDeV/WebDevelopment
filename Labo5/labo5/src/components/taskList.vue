<template>
  <div class="task-list">
    <div class="task-container">
      <task v-for="x of tasks" 
      v-bind:key="x.id" 
      v-bind:taskProp="x" 
      v-bind:onUpdate = "updateTask"
      v-bind:onDelete = "deleteTask"
      />
    </div>
  </div>
</template>

<script>
import task from "./Task";

export default {
  name: "taskList",
  props: ['tasks','onUpdate','onDelete'],
  components: {
    task,
  },

  methods: {
    updateTask(id, name) {
      this.onUpdate(id, name);
    },
    deleteTask(id) {
      this.onDelete(id);
    },
  },
  
};
</script>

<style scoped></style>
