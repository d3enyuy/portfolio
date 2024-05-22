<template>
  <div class="container bg-primary">
    <div class="landing-section full-width row"></div>
    <div
      class="landing-section-container full-width row wrap justify-evenly items-center content-center font-size-64"
    >
      <div class="column q-my-auto">
        <span class="text-weight-medium text-white text-uppercase text-size-40"
          >Hello there, welcome to my site</span
        >
        <span class="name h1">I'm Lambiv Gills</span>

        <span class="text-h2 text-white"> A fullstack Developer<br /> </span>
        <div class="q-pa-md justify-evenly items-center content-center">
          <q-btn
            to="/start/pick-quasar-flavour"
            label="contact me"
            class="text-white"
            outline
            rounded
            :icon-right="mdiMessage"
            color="green"
          />
          <q-btn
            to="/start/pick-quasar-flavour"
            label="About me"
            text-color="white"
            outline
            margin="md"
            rounded
            :icon-right="mdiFaceManProfile"
            color="green"
            class="q-mx-md"
          />
        </div>
      </div>
      <div>
        <q-img
          src="https://storage.portfolio.dzenyuy.dev/gil_no_bg.png"
          :width="`${$q.screen.lt.md ? '300px' : '400px'}`"
          alt="Gils"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { mdiMessage, mdiFaceManProfile } from '@quasar/extras/mdi-v6';
</script>
