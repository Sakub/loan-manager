<template>
  <div>
  <ViewHeading heading="How this app works?" accent-words="app"/>
  <ol class="view__list">
    <li>App tracks the <AccentWord>money</AccentWord> you've <AccentWord>loaned</AccentWord>,</li>
    <li>App sends you a notification on estimated cash return date,</li>
    <li>Nothing else! It's <AccentWord>simple</AccentWord>!</li>
    <li>It just <AccentWord>works</AccentWord>!</li>
  </ol>
  <p class="note">Note: App doesn't store any info on our side,
    everything is going to be stored in your browser storage so don't worry, your data is <AccentWord>safe</AccentWord></p>
  <Button text="LET'S GET STARTED!" class="button-bottom" @click="store.visited" />
  </div>
</template>
<script setup lang="ts">
import { useFirstVisitStore } from "@/stores/firstVisit";

import ViewHeading from "@/components/ViewHeading.vue"
import Button from "@/components/Button.vue";
import AccentWord from "@/components/AccentWord.vue"

const store = useFirstVisitStore();
</script>
<style scoped lang="scss">
.view__list {
  text-align: left;
  padding-left: 25px;
  li {
    margin: 25px 0;
    //line-height: 1.7rem;
    //margin: 10px 0;
  }
}
.note {
  text-align: justify;
  margin-right: 25px;
  opacity: 0.4;
  bottom: 75px;
  position: absolute;
}
</style>