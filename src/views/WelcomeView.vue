<template>
  <ViewHeading
    heading="Don't have a memory for loaned money?"
    accent-words="loaned"
  />

  <img src="../assets/welcomeScreen.svg" class="view__svg" />
  <Particles
    style="z-index: -1 !important"
    id="tsparticles"
    :particlesInit="particlesInit"
    :options="particlesOptions"
  />
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

import { loadFull } from "tsparticles";

const particlesInit = async (engine) => {
  await loadFull(engine);

  setTimeout(() => {
    const particlesCanvas = document.querySelector("canvas");
    if (particlesCanvas) {
      particlesCanvas.style.zIndex = "-1";
      particlesCanvas.style.backgroundColor = "";
    }
  }, 100);
};

const store = useFirstVisitStore();
const particlesOptions = ref({
  background: {
    color: {
      value: "transparent",
    },
  },
  particles: {
    color: {
      value: "#00BFA6",
    },
    links: {
      color: "#00BFA6",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: true,
      speed: 3,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 50,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
  detectRetina: true,
});
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
