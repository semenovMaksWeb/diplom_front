<template>
  <nav class="nav">
    <router-link class="link nav__link" to="/client" v-if="isDeveloper">Клиенты</router-link>
    <router-link class="link nav__link" to="/developer">
      Разработчики
    </router-link>
    <router-link class="link nav__link" to="/task">Задачи</router-link>
    <router-link class="link nav__link" to="/contract">Договора</router-link>
  </nav>
</template>

<script lang="ts">
import store from "@/store";
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavComponent",
  computed: {
    isDeveloper() {
      return store.getters.getProfile.isDeveloper
    }
  }
});
</script>

<style lang="less">
@import "Nav";
</style>
