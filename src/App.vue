<template>
  <header class="header" v-if="isHeader">
    <div class="container container_header">
      <NavComponent />
      <router-link class="link nav__link" to="/" @click.prevent="exit">Выход</router-link>
    </div>
  </header>
  <main class="main">
    <div class="container">
      <router-view />
    </div>
  </main>
</template>

<script setup lang="ts">
import NavComponent from "@/components/ui/nav/Nav.vue";
import { useCookies } from "vue3-cookies";
import store from "./store";
import { computed } from "vue";
import { api } from "./api";
import router from "./router";

const { cookies } = useCookies();


const isHeader = computed(() => {
  return !!store.getters.getProfile && cookies.get('token');
})

const exit = async () => {
  await api.exit(cookies.get('token'));
  cookies.remove("token");
  store.dispatch("deleteProfile");
  router.push("ViewAuth");
}

</script>

<style lang="less">
@import "assets/main.less";
</style>
