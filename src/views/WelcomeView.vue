<template>
  <p>welcome screen</p>
  <button @click="store.visited"></button>
</template>

<script setup lang="ts">
import { useFirstVisitStore } from "@/stores/firstVisit";
const store = useFirstVisitStore();
</script>
