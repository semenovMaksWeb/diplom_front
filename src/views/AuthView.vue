<template>
  <div class="view view_auth">
    <FormLogin />
  </div>
</template>

<script lang="ts">
import FormLogin from "@/components/FormLogin/FormLogin.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "AuthView",
  components: { FormLogin },
});
</script>

<style>
.view_auth {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin-top: 0;
}
</style>
