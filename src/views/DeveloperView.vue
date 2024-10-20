<template>
  <div class="view viewDeveloper">
    <TableDeveloper />
  </div>
</template>

<script lang="ts">
import TableDeveloper from "@/components/Developer/TableDeveloper/TableDeveloper.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "DeveloperView",
  components: {
    TableDeveloper
  }
});
</script>
