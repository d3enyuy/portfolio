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

        <q-toolbar-title class="q-ml-xl">
          <q-avatar outlined size="34px" color="white">LD</q-avatar>
        </q-toolbar-title>

        <div class="headings">
          <q-tabs
            no-caps
            active-color="primary"
            indicator-color="transparent"
            class="text-grey-8"
            v-model="tab"
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

    <q-drawer v-model="leftDrawerOpen" bordered>
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
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev',
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev',
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev',
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev',
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev',
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
}
</Style>
