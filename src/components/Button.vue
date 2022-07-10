<template>
  <input class="button bg-accent" type="button" :value="text" />
</template>

<script setup lang="ts">
defineProps<{
  text: string;
}>();
</script>

<style scoped lang="scss">
.button {
  width: 90%;
  border: none;
  color: #fff;
  border-radius: 10px;
  height: 55px;
  font-size: 1.5rem;
}
</style>
