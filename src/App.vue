<template>
  <header class="header">
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
</script>

<style lang="less">
@import "src/assets/main.less";
</style>
