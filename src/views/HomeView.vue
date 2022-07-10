<script setup lang="ts">
import { useFirstVisitStore } from "@/stores/firstVisit";
import { onMounted } from "vue";

onMounted(() => {
  const firstVisitStore = useFirstVisitStore();
  firstVisitStore.checkForFirstVisit()
});
</script>

<template>
  <main>
    <p>home</p>
  </main>
</template>
