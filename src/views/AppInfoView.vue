<template>
  <p>app info</p>
  <Button text="LET'S GET STARTED!" @click="store.visited" />
</template>
<script setup lang="ts">
import { useFirstVisitStore } from "@/stores/firstVisit";
import Button from "@/components/Button.vue";

const store = useFirstVisitStore();
</script>
