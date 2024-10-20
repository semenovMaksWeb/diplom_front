<template>
  <div class="view viewClient">
    <TableClient />
  </div>
</template>

<script lang="ts">
import TableClient from "@/components/Client/TableClient/TableClient.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "ClientView",
  components: { TableClient }
});
</script>
