<script setup lang="ts"></script>
<template>
  <div class="about-container">
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
      border: 1px, dotted, yellow;
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
