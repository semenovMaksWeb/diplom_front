<template>
  <div class="view viewClient">
    <FormTableClient />
  </div>
</template>

<script lang="ts">
import FormTableClient from "@/components/Client/FormTableClient/FormTableClient.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "ClientView",
  components: { FormTableClient }
});
</script>
