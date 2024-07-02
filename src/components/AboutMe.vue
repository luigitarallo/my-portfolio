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
    border: 5px, dotted, white;
    // background: conic-gradient(
    //   from 90deg,
    //   #0000 0deg,
    //   #0000 50deg,
    //   #3b3939 50deg,
    //   #494646 55deg,
    //   #0000 55deg,
    //   #0000 360deg
    // );
    border-radius: 50%;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      top: -5px;
      left: -5px;
      width: calc(100% - 10px);
      height: calc(100% - 10px);
      border-radius: 50%;
      border: 10px solid transparent;
      border-left-color: whitesmoke;
      animation: rotate 2s linear infinite;
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
      top: 7rem;
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
