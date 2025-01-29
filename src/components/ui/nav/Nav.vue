<template>
  <nav class="nav">
    <router-link class="link nav__link" to="/client" v-if="isExecutor">Клиенты</router-link>
    <router-link class="link nav__link" to="/executor">
      Исполнители
    </router-link>
    <router-link class="link nav__link" to="/task">Задачи</router-link>
    <router-link class="link nav__link" to="/contract" v-if="isExecutor">Организация</router-link>
  </nav>
</template>

<script lang="ts">
import store from "@/store";
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavComponent",
  computed: {
    isExecutor() {
      return store.getters.getProfile.isExecutor
    }
  }
});
</script>

<style lang="less">
@import "Nav";
</style>
