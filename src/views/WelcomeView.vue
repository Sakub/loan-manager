<template>
  <ViewHeading
    heading="Don't have a memory for loaned money?"
    accent-words="loaned"
  />
  <button @click="store.visited"></button>
</template>

<script setup lang="ts">
import { useFirstVisitStore } from "@/stores/firstVisit";

import ViewHeading from "@/components/ViewHeading.vue"

const store = useFirstVisitStore();
</script>
