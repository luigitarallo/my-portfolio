<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const textContainerContent = ref("");
const containerOpacity = ref(0); // Opacità iniziale

onMounted(() => {
  window.addEventListener("scroll", updateScrollPosition);
  window.addEventListener("resize", updateScrollPosition);
  updateScrollPosition(); // Chiamata iniziale per aggiornare l'opacità
});

onUnmounted(() => {
  window.removeEventListener("scroll", updateScrollPosition);
  window.removeEventListener("resize", updateScrollPosition);
});

const updateScrollPosition = () => {
  const container = document.querySelector(".container");
  if (container) {
    const rect = container.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Calcola la posizione dello scroll rispetto all'inizio e alla fine dell'elemento nella finestra visibile
    const visibleThreshold = windowHeight - rect.height;
    const scrollPosition = window.scrollY;

    const maxScroll = windowHeight;

    // Calcola l'opacità in base alla posizione dello scroll rispetto alla soglia visibile
    let opacity = Math.min(
      1,
      (scrollPosition - visibleThreshold) / (maxScroll - visibleThreshold)
    );

    // Assicura che l'opacità sia compresa tra 0 e 1
    opacity = Math.max(0, opacity);
    opacity = Math.min(1, opacity);

    containerOpacity.value = Number(opacity.toFixed(2)); // Arrotonda l'opacità a due cifre decimali
  }
};

// Definiamo un tipo che rappresenta le chiavi valide di sliceTexts
type SliceType = "frontEnd" | "backEnd" | "devTools" | "vcs";

const sliceTexts: Record<SliceType, string> = {
  frontEnd: "Questo è il testo dedicato a Front End.",
  backEnd: "Questo è il testo dedicato a Back End.",
  devTools: "Questo è il testo dedicato a Dev Tools.",
  vcs: "Questo è il testo dedicato a VCS.",
};

const updateTextContainer = (slice: SliceType) => {
  textContainerContent.value = sliceTexts[slice];
};
</script>

<template>
  <div class="container" :style="{ opacity: containerOpacity }">
    <div class="text-container">
      {{ textContainerContent }}
    </div>
    <div class="external-circle">
      <div class="circle">
        <div class="slice" @click="updateTextContainer('frontEnd')">
          <h1>Front End</h1>
        </div>
        <div class="slice" @click="updateTextContainer('backEnd')">
          <h1>Back End</h1>
        </div>
        <div class="slice" @click="updateTextContainer('devTools')">
          <h1>Dev Tools</h1>
        </div>
        <div class="slice" @click="updateTextContainer('vcs')">
          <h1>VCS</h1>
        </div>
        <div class="inner-circle"></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="css">
.container {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100vw;
  height: 100vh;
  transition: opacity 0.3s linear;
}

.text-container {
  width: 30rem;
  height: 40rem;
  background-color: antiquewhite;
  padding: 1rem;
  box-sizing: border-box;
}
.external-circle {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30rem;
  height: 30rem;
  border-width: 6px;
  border-style: hidden solid solid hidden;
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
}
.circle {
  width: 20rem;
  height: 20rem;
  background-color: aqua;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  border-radius: 50%;
  position: relative;

  .inner-circle {
    width: 10rem;
    height: 10rem;
    background-color: blue;
    position: absolute;
    top: 25%;
    right: 25%;
    border-radius: 50%;
  }
}

.slice {
  width: 10rem;
  height: 10rem;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  h1 {
    opacity: 0.3;
    font-size: 1rem;
  }
}

.slice:nth-child(1) {
  background-color: rgb(255, 0, 30);
}

.slice:nth-child(2) {
  background-color: rgb(255, 0, 30);
}

.slice:nth-child(3) {
  background-color: rgb(255, 0, 30);
}

.slice:nth-child(4) {
  background-color: rgb(255, 0, 30);
}

.slice:hover {
  background-color: rgba(255, 255, 255, 0.798);
  cursor: pointer;
  h1 {
    opacity: 0.8;
  }
}
</style>
