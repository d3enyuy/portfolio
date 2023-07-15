<template>
  <q-layout view="lHh Lpr lFf">
    <q-header bordered class="bg-white header text-primary">
      <q-toolbar>
        <q-btn
          v-if="$q.screen.lt.sm"
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Lambiv </q-toolbar-title>

        <div class="headings">
          <q-tabs
            no-caps
            active-color="primary"
            indicator-color="transparent"
            class="text-grey-8"
          >
            <q-tab name="images" label="Home" />
            <q-tab name="videos" label="About Me" />
            <q-tab name="articles" label="Skills" />
            <q-tab name="articles" label="Projects" />
            <q-tab name="articles" label="Contact Me" />
          </q-tabs>
        </div>
        <q-btn flat class="btn-hire-me justify-start text-white text-no-wrap"
          >Hire me</q-btn
        >
      </q-toolbar>
    </q-header>

    <q-drawer mini overlay bordered v-model="leftDrawerOpen" class="drawer">
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container class="page-container overflow-hidden">
      <q-page class="column o">
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import EssentialLink, {
  EssentialLinkProps,
} from 'components/EssentialLink.vue';

const essentialLinks: EssentialLinkProps[] = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev',
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework',
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
<Style lang="scss" scoped>
.header {
  padding: 0px 200px;
}
.page-container {
  overflow: hidden;
}
.drawer {
}
.headings {
  width: 70vw;
}

.btn-hire-me {
  border-radius: 10px;
  border-radius: 10px;
  background: linear-gradient(
    199deg,
    #0b1f46 0%,
    #00638f 32.29%,
    #00afbe 64.06%,
    #6efacd 100%
  );

  animation: colorchange 4s ease-out infinite;
}

@keyframes colorchange {
  0% {
    border-radius: 10px;
    background: linear-gradient(
      199deg,
      #0b1f46 0%,
      #00638f 32.29%,
      #00afbe 64.06%,
      #6efacd 100%
    );
  }
  33% {
    border-radius: 10px;
    background: linear-gradient(
      356deg,
      #6efacd 0%,
      #00afbe 45.77%,
      #00638f 65.1%,
      #0b1f46 100%
    );
  }
  66% {
    border-radius: 10px;
    background: linear-gradient(
      295deg,
      #6efacd 0%,
      #00afbe 33.33%,
      #00638f 65.1%,
      #0b1f46 100%
    );
  }
  100% {
    background: linear-gradient(
      177deg,
      #6efacd 0%,
      #00afbe 33.33%,
      #00638f 65.1%,
      #0b1f46 85.39%
    );
  }
}
</Style>
