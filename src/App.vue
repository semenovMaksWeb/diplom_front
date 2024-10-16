<template>
  <header class="header"  v-if="cookies.get('token')">
    <div class="container container_header">
      <NavComponent />
      <router-link class="link nav__link" to="/">Выход</router-link>
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
const { cookies } = useCookies();
</script>

<style lang="less">
@import "assets/main.less";
</style>
