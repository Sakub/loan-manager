<script setup lang="ts">
import { RouterView } from "vue-router";
import { loadFull } from "tsparticles";
import { ref } from "vue";

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

<template>
  <Particles
    style="z-index: -1 !important"
    id="tsparticles"
    :particlesInit="particlesInit"
    :options="particlesOptions"
  />
  <RouterView />
</template>

<style lang="scss">
@import "@/assets/base.scss";
</style>
