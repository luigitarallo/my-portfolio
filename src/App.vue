<script setup lang="ts">
import { ref } from "vue";
import Navbar from "./components/Navbar.vue";
import AboutMe from "./components/AboutMe.vue";
import Projects from "./components/Projects.vue";
import TechSkills from "./components/TechSkills.vue";

// Riferimenti agli elementi DOM
const stickyWrap = ref<HTMLElement | null>(null);

// Funzione per la trasformazione
// function transform(section: HTMLElement) {
//   const offsetTop: number = section.parentElement?.offsetTop || 0;
//   const scrollSection: HTMLElement = section.querySelector(
//     ".horizontal-scroll"
//   ) as HTMLElement;

//   let percentage: number =
//     ((window.scrollY - offsetTop) / window.innerHeight) * 100;
//   percentage = percentage < 0 ? 0 : percentage > 100 ? 100 : percentage;

//   scrollSection.style.transform = `translate3d(${-percentage}vw, 0, 0)`;
// }

// Aggiungi l'event listener allo scroll quando il componente è montato
// onMounted(() => {
//   const section: HTMLElement | null = stickyWrap.value;
//   if (section) {
//     const onScroll = () => transform(section);
//     window.addEventListener("scroll", onScroll);

//     // Rimuovi l'event listener quando il componente è smontato
//     onUnmounted(() => {
//       window.removeEventListener("scroll", onScroll);
//     });
//   }
// });
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
          <div class="scroll-contents blue" id="tech-skills">
            <TechSkills />
          </div>
        </div>
      </div>
    </div>

    <section id="projects">
      <Projects />
    </section>
  </main>
</template>

<style scoped></style>
