<script setup lang="ts"></script>
<template>
  <nav class="navbar navbar-fixed">
    <ul class="nav-links">
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
.navbar-fixed {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 3rem;
  background-color: #333;
  color: white;
  z-index: 1000;

  .nav-links {
    display: flex;
    color: white;
    .nav-item {
      padding: 0 0.5rem;
      &:hover {
        background-color: #444;
      }
    }
  }
}
</style>
