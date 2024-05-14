<template>
  <div>
    <div class="container bg-primary">
      <div class="landing-section full-width row"></div>
      <div
        class="landing-section-container full-width row wrap justify-evenly items-center content-center font-size-64"
      >
        <div class="column">
          <span
            class="text-weight-medium text-white text-uppercase text-size-40"
            >Hello there, welcome to my site</span
          >
          <span class="name h1">I'm Lambiv Gills</span>

          <span class="text-h2 text-white"> A fullstack Developer<br /> </span>
          <div class="q-pa-md">
            <q-btn
              to="/start/pick-quasar-flavour"
              label="contact me"
              class="text-white"
              outline
              rounded
              :icon-right="mdiMessage"
              color="green"
            />
          </div>
        </div>
        <div>
          <q-img
            src="https://storage.portfolio.dzenyuy.dev/gil_no_bg.png"
            :width="`${$q.screen.md ? '300px' : '400px'}`"
            alt="Gils"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { mdiMessage } from '@quasar/extras/mdi-v6';
</script>

<style lang="scss">
.container {
  background: black;
  padding: 100px 200px;
  height: calc(100vh - #{$header-container-height});
  display: grid;

  @media screen and (max-width: 500px) {
    padding: 10px;
  }
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
