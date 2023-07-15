<template>
  <div>
    <div class="container bg-primary">
      <div class="landing-section full-width row">
        <div class="text-white caption font-size-64">Hi</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.container {
  background: black;
  z-index: -9;
  height: calc(100vh - #{$header-container-height});
}
.landing-section {
  padding: 0 200px;
  z-index: -1;
  height: 100%;
  background: url(../assets/f.svg);

  filter: blur(200px);

  animation: left-to-right 20s ease-in forwards infinite;
  transition: gradient rotate(380deg);
}

.caption {
  z-index: 1;
  font-size: 64px;
}
.test:hover {
  animation-play-state: paused;
}

@keyframes left-to-right {
  0% {
    transform: rotate(360deg);
  }
}
</style>
