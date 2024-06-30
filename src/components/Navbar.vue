<script setup lang="ts"></script>
<template>
  <nav
    class="navbar navbar-fixed-right d-flex flex-column justify-content-center align-items-center"
  >
    <ul class="nav flex-column">
      <li class="nav-item">
        <a class="nav-link" href="#home">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#about-me">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#contact">Contact</a>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
.navbar-fixed-right {
  position: fixed;
  top: 0;
  right: 0;
  height: 100%; /* Altezza totale della finestra */
  width: 5vw; /* Larghezza della navbar */
  background-color: #333;
  color: white;
  z-index: 1000; /* Assicurati che la navbar sia sopra altri contenuti */

  .nav-link {
    color: white;
    &:hover {
      background-color: #444; /* Colore di sfondo al passaggio del mouse */
    }
  }
}
</style>
