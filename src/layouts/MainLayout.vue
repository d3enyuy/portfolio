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

        <q-toolbar-title v-if="!$q.screen.lt.sm"> Lambiv </q-toolbar-title>

        <div class="headings">
          <q-tabs
            v-if="!$q.screen.lt.sm"
            no-caps
            active-color="primary"
            indicator-color="transparent"
            class="text-grey-8"
          >
            <q-tab name="images" label="Home" />
            <q-tab name="videos" label="About Me" />
            <q-tab name="skills" label="Skills" />
            <q-tab name="projects" label="Projects" />
            <q-tab name="contact-me" label="Contact Me" />
          </q-tabs>
        </div>
        <q-btn flat class="btn-hire-me justify-start text-white text-no-wrap"
          >Hire me</q-btn
        >
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" class="drawer">
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
    caption: 'github.com',
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
  @media screen and (max-width: 500px) {
    padding: 10px;
    justify-content: space-between;
  }
}
.page-container {
  overflow: hidden;
}
.q-drawer {
  border-radius: 8px;
  height: 300px;

  margin: 20px;
}

.headings {
  width: 70vw;
}

.btn-hire-me {
  border-radius: 10px;

  background: linear-gradient(
    199deg,
    #0b1f46 0%,
    #00638f 32.29%,
    #00afbe 64.06%,
    #6efacd 100%
  );

  animation: myAnim 5s ease 0s infinite alternate both;
}
@keyframes myAnim {
  0% {
    background-position: right center;
    background-size: 100%;
  }

  33% {
    background-position: top center;
    background-size: 150%;
  }

  66% {
    background-position: right center;
    background-size: 200%;
  }
  100% {
    background-position: right center;
    background-size: 300%;
  }
}
</Style>
