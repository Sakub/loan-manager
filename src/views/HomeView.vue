<script setup lang="ts">
import { useFirstVisitStore } from "@/stores/firstVisit";
import { onMounted } from "vue";

onMounted(() => {
  const firstVisitStore = useFirstVisitStore();
  firstVisitStore.checkForFirstVisit();
});

const clearLocalStorage = () => {
  localStorage.clear();
};
</script>

<template>
  <main>
    <p>home</p>
    <button @click="clearLocalStorage">reset local storage</button>
  </main>
</template>
