<template>
  <ViewHeading
    heading="Don't have a memory for loaned money?"
    accent-words="loaned"
  />

  <img src="../assets/welcomeScreen.svg" class="view__svg" />
  <Button
    text="LEAVE IT TO US!"
    @click="store.visited"
    class="welcomeView__button"
  />
</template>

<script setup lang="ts">
import { ref } from "vue";

import { useFirstVisitStore } from "@/stores/firstVisit";

import Button from "@/components/Button.vue";
import ViewHeading from "@/components/ViewHeading.vue";

const store = useFirstVisitStore();
</script>
<style scoped lang="scss">
.view__svg {
  width: 100%;
  margin: 25px 0;
}

.welcomeView__button {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
