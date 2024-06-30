<script setup lang="ts"></script>
<template>
  <div class="about-container d-flex justify-content-center align-items-center">
    <div class="circle"></div>
    <div class="about-text">
      <h1>Hello.</h1>
      <h2>My name is Luigi</h2>
      <p>
        Ciao, sono Luigi Tarallo, un web developer Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Ducimus, dolores.
      </p>
    </div>
  </div>
</template>
<style scoped lang="scss">
.about-container {
  width: 30rem;
  height: 30rem;
  position: relative;
  .circle {
    width: 25rem;
    height: 25rem;
    background-color: blue;
    border-radius: 50%;
  }
  .about-text {
    position: absolute;
    border: 1px, dotted, yellow;
    width: 18rem;
    left: -10rem;
    h1 {
      font-size: 5rem;
    }
    h2 {
      font-size: 3rem;
    }
    p {
      font-size: 1.5rem;
    }
  }
}
</style>
