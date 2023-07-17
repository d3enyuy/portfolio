<template>
  <div>
    <div class="container bg-primary">
      <div class="landing-section full-width row"></div>
      <div
        class="row landing-section-container text-white font-size-64 justify-between"
      >
        <div class="column">
          <span class="greeting">Hi I'm</span>
          <span class="name">Lambiv Dzenyuy</span>
          <span
            >A full stack web <br />
            developer</span
          >
        </div>
        <div>fskajd</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.container {
  background: black;
  padding: 100px 200px;
  height: calc(100vh - #{$header-container-height});
  display: grid;
}
.landing-section {
  height: 100%;
  background: url(../assets/f.svg);

  filter: blur(200px);

  animation: left-to-right 20s ease-in forwards infinite;
  // transition: background-filter rotate(360deg);
}
.landing-section-container,
.landing-section {
  grid-area: 1 / 1;
}

.landing-section-container {
  font-size: 64px;
}

.greeting,
.name {
  font-style: normal;
  font-weight: 900;
  line-height: normal;
}

.greeting {
  font-family: Roboto;
}
.name {
  color: rgba(72, 216, 120, 0.952);
  font-family: Inter;
  font-size: 64px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  letter-spacing: 0.32px;
}

@keyframes left-to-right {
  0% {
    transform: translateY(200px) rotate(20deg);
  }
  100% {
    transform: translateX(200px) rotate(360deg);
  }
}
</style>
