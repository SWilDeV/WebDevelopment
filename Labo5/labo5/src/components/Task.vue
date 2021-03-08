<template>
  <div class="task">
    <input type="text" v-model="taskProp.name" />

    <button type="button" v-on:click="onUpdate(taskProp.id, taskProp.name)">
      Update
    </button>

    <button type="button" v-on:click="onDelete(taskProp.id)">
      Delete
    </button>
  </div>
</template>

<script>
export default {
  name: "task",
  props: ["taskProp", "onUpdate", "onDelete"],
};
</script>

<style scoped></style>
