<template>
  <h2 class="view__heading" ref="headingText"></h2>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

const props = defineProps<{
  heading: string;
  accentWords?: string;
}>();

const headingText = ref<HTMLHeadingElement>();

onMounted(() => {
  const { accentWords, heading } = props;

  heading?.split(" ").map((headingWord) => {
    if (headingText.value) {
      headingText.value.innerHTML += accentWords
        ?.split(",")
        .includes(headingWord)
        ? ` <span class="clr-accent">${headingWord}</span>`
        : ` ${headingWord}`;
    }
  });
});
</script>
<style scoped lang="scss">
.view__heading {
  margin-top: 45px;
  font-weight: 400;
}
</style>
