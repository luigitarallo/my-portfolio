<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import Navbar from "./components/Navbar.vue";
import AboutMe from "./components/AboutMe.vue";
import Projects from "./components/Projects.vue";

// Riferimenti agli elementi DOM
const stickyWrap = ref<HTMLElement | null>(null);

// Funzione per la trasformazione
function transform(section: HTMLElement) {
  const offsetTop = section.parentElement?.offsetTop || 0;
  const scrollSection = section.querySelector(
    ".horizontal-scroll"
  ) as HTMLElement;

  let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
  percentage = percentage < 0 ? 0 : percentage > 100 ? 100 : percentage;

  scrollSection.style.transform = `translate3d(${-percentage}vw, 0, 0)`;
}

// Aggiungi l'event listener allo scroll quando il componente è montato
onMounted(() => {
  const section = stickyWrap.value;
  if (section) {
    const onScroll = () => transform(section);
    window.addEventListener("scroll", onScroll);

    // Rimuovi l'event listener quando il componente è smontato
    onUnmounted(() => {
      window.removeEventListener("scroll", onScroll);
    });
  }
});
</script>

<template>
  <Navbar />
  <main>
    <div class="scroll-container">
      <div ref="stickyWrap" class="sticky-wrap">
        <div class="horizontal-scroll">
          <div class="scroll-contents red" id="about-me">
            <AboutMe />
          </div>
          <div class="scroll-contents blue">
            <Projects />
          </div>
        </div>
      </div>
    </div>

    <section id="contact">
      <div class="container">
        <h1>The End</h1>
        <p>Dummy text dummy text dummy text dummy text dummy text.</p>
      </div>
    </section>
  </main>
</template>

<style scoped></style>
