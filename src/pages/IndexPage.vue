<template>
  <div>
    <div class="container bg-primary">
      <div class="test full-width"></div>
    </div>
    <example-component
      title="Example component"
      active
      :todos="todos"
      :meta="meta"
    >
    </example-component>
    <example-component
      title="Example component"
      active
      :todos="todos"
      :meta="meta"
    >
    </example-component>
    <example-component
      title="Example component"
      active
      :todos="todos"
      :meta="meta"
    >
    </example-component>
  </div>
</template>

<script setup lang="ts">
import { Todo, Meta } from 'components/models';
import ExampleComponent from 'components/ExampleComponent.vue';
import { ref } from 'vue';

const todos = ref<Todo[]>([
  {
    id: 1,
    content: 'ct1',
  },
  {
    id: 2,
    content: 'ct2',
  },
  {
    id: 3,
    content: 'ct3',
  },
  {
    id: 4,
    content: 'ct4',
  },
  {
    id: 5,
    content: 'ct5',
  },
]);
const meta = ref<Meta>({
  totalCount: 1200,
});
</script>

<style lang="scss">
.container {
  background: black;
  z-index: -1;
  height: calc(100vh - #{$header-container-height});
}
.test {
  z-index: 1;
  height: 100%;
  background: url(../assets/f.svg);

  filter: blur(200px);

  animation: left-to-right 20s ease-in forwards infinite;
  transition: gradient rotate(380deg);
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
