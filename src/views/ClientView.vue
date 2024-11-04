<template>
  <div class="view viewClient">
    <TableClient />
    <ClientFormAdd />
  </div>
</template>

<script lang="ts">
import TableClient from "@/components/Client/TableClient/TableClient.vue";
import { defineComponent } from "vue";
import ClientFormAdd from "@/components/Client/ClientFormAdd.vue"

export default defineComponent({
  name: "ClientView",
  components: { TableClient, ClientFormAdd }
});
</script>
