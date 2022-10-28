<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Quasar App </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>Navigation</q-item-label>
        <q-item
          v-for="nav in navs"
          :key="nav.label"
          clickable
          :to="nav.to"
          exact
        >
          <q-item-section avatar><q-icon :name="nav.icon" /></q-item-section>
          <q-item-section
            ><q-item-label>{{ nav.label }}</q-item-label></q-item-section
          >
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {},
  data() {
    return {
      navs: [
        {
          to: "/",
          label: "Home",
          icon: "home",
        },
        {
          to: "/students",
          label: "Students",
          icon: "person",
        },

        {
          to: "/settings",
          label: "Settings",
          icon: "settings",
        },
      ],
    };
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
