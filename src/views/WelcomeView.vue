<template>
  <ViewHeading
    heading="Don't have a memory for loaned money?"
    accent-words="loaned"
  />

  <img src="../assets/welcomeScreen.svg" class="view__svg" />
  <Button
    text="LEAVE IT TO US!"
    @click="() => showView('app-info')"
    class="welcomeView__button"
  />
</template>

<script setup lang="ts">
import Button from "@/components/Button.vue";
import ViewHeading from "@/components/ViewHeading.vue";

import { utils } from "@/utils";

const { showView } = utils();
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
