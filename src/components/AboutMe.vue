<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const aboutContainerOpacity = ref(1); // Opacità iniziale

onMounted(() => {
  window.addEventListener("scroll", updateScrollPosition);
  window.addEventListener("resize", updateScrollPosition);
});

onUnmounted(() => {
  window.removeEventListener("scroll", updateScrollPosition);
  window.removeEventListener("resize", updateScrollPosition);
});

const updateScrollPosition = () => {
  const aboutContainer = document.querySelector(".about-container");
  if (aboutContainer) {
    const rect: DOMRect = aboutContainer.getBoundingClientRect();
    const windowHeight: number = window.innerHeight;

    // Calcola la posizione dello scroll rispetto all'inizio dell'elemento nella finestra visibile
    const visibleThreshold: number = windowHeight - rect.height;
    const scrollPosition: number = window.scrollY + visibleThreshold;

    // Calcola l'opacità in base alla posizione di scroll
    const maxScroll: number = windowHeight + rect.height;
    const scrollFactor: number = 1.2;
    let opacity: number = Math.max(
      0,
      1 - (scrollFactor * scrollPosition) / maxScroll
    );

    // Assicura che l'opacità sia esattamente 1 quando siamo in cima alla pagina
    if (window.scrollY <= visibleThreshold) {
      opacity = 1;
    }

    // Aggiorna il valore di ref con il nuovo valore di opacità calcolato
    aboutContainerOpacity.value = opacity;
  }
};
</script>
<template>
  <div class="about-container" :style="{ opacity: aboutContainerOpacity }">
    <div class="small-circle first"></div>
    <div class="small-circle second"></div>
    <div class="small-circle third"></div>
    <div class="small-circle fourth"></div>
    <div class="external-circle">
      <div class="circle"></div>
      <div class="about-text">
        <h1>Hello.</h1>
        <h2>My name is Luigi</h2>
        <p>
          I am a full stack web developer Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Ducimus, dolores.
        </p>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.about-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40rem;
  height: 40rem;
  transition: opacity 0.3s linear;
  position: relative;
  .small-circle {
    position: absolute;
    border-radius: 50%;
    background-color: blue;
    &.first {
      width: 6rem;
      height: 6rem;
      bottom: 0;
      right: 0;
    }
    &.second {
      width: 7rem;
      height: 7rem;
      top: -3rem;
      right: 4rem;
    }
    &.third {
      width: 4rem;
      height: 4rem;
      top: 4rem;
      left: 3rem;
    }
    &.fourth {
      width: 3rem;
      height: 3rem;
      bottom: 3rem;
      left: 0;
    }
  }
  .external-circle {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30rem;
    height: 30rem;
    border-width: 6px;
    border-style: solid solid hidden hidden;
    border-color: rgba(255, 253, 253, 1);
    border-radius: 50%;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      top: -3px;
      left: -3px;
      width: calc(100% - 6px);
      height: calc(100% - 6px);
      border-radius: 50%;
      border: 6px solid transparent;
      border-left-color: rgba(245, 245, 245, 1);
      animation: rotate 5s linear infinite;
    }
    @keyframes rotate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    .circle {
      width: 20rem;
      height: 20rem;
      background-color: blue;
      border-radius: 50%;
    }
    .about-text {
      position: absolute;
      border: 1px dotted yellow;
      width: 18rem;
      top: 12rem;
      left: -10rem;
    }

    h1 {
      font-size: 5rem;
      font-weight: 400;
    }

    h2 {
      font-size: 1.5rem;
      font-weight: 300;
    }

    p {
      font-size: 1.3rem;
    }
  }
}
</style>
