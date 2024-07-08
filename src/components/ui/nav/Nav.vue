<template>
  <nav class="nav">
    <router-link class="link nav__link" to="/foo">Главная</router-link>
    <router-link class="link nav__link" to="/client">Клиенты</router-link>
    <router-link class="link nav__link" to="/developer">
      Разработчики
    </router-link>
    <router-link class="link nav__link" to="/task">Задачи</router-link>
    <router-link class="link nav__link" to="/contract">Договора</router-link>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavComponent",
});
</script>

<style lang="less">
@import "Nav";
</style>
