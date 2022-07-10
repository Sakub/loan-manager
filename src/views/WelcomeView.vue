<template>
  <ViewHeading
    heading="Don't have a memory for loaned money?"
    accent-words="loaned"
  />
  <Button text="LEAVE IT TO US!" @click="store.visited()" />
</template>

<script setup lang="ts">
import { useFirstVisitStore } from "@/stores/firstVisit";
import Button from '@/components/Button.vue'

import ViewHeading from "@/components/ViewHeading.vue"

const store = useFirstVisitStore();
</script>
