<template>
  <h1>{{ city }}, {{ country }}</h1>
</template>

<script>
export default {
  name: "header-v",
  props: ["city", "country"],
};
</script>

<style></style>
