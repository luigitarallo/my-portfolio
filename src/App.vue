<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

// Riferimenti agli elementi DOM
const stickyWrap = ref<HTMLElement | null>(null);

// Funzione per la trasformazione
function transform(section: HTMLElement) {
  const offsetTop = section.parentElement?.offsetTop || 0;
  const scrollSection = section.querySelector(
    ".horizontal_scroll"
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
  <main>
    <!-- <section>
      <div class="container">
        <h1>Hybrid Scrolling</h1>
        <p>Dummy text dummy text dummy text dummy text dummy text.</p>
      </div>
    </section> -->

    <div class="scroll_container">
      <div ref="stickyWrap" class="sticky_wrap">
        <div class="horizontal_scroll">
          <div class="scroll_contents red">
            <h2 class="left">Hello</h2>
          </div>
          <!-- <div class="scroll_contents yellow"></div>
          <div class="scroll_contents green"></div> -->
          <div class="scroll_contents blue">
            <h2 class="right">Goodbye</h2>
          </div>
        </div>
      </div>
    </div>

    <section>
      <div class="container">
        <h1>The End</h1>
        <p>Dummy text dummy text dummy text dummy text dummy text.</p>
      </div>
    </section>
  </main>
</template>

<style scoped></style>
