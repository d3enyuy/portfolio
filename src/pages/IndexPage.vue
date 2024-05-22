<template>
  <div>
    <HeroSection />
  </div>
</template>

<script setup lang="ts">
import HeroSection from 'src/components/hero-section.vue';
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
