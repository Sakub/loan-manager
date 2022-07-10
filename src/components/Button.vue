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
  -webkit-box-shadow: 0 4px 4px 0 #00000040;
  -moz-box-shadow: 0 4px 4px 0 #00000040;
  box-shadow: 0 4px 4px 0 #00000040;
  -webkit-appearance: none;
}
</style>
