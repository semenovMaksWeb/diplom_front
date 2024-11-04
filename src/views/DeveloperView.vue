<template>
  <div class="view viewDeveloper">
    <TableDeveloper />
    <DeveloperFormAdd />
  </div>
</template>

<script lang="ts">
import TableDeveloper from "@/components/Developer/TableDeveloper/TableDeveloper.vue";
import DeveloperFormAdd from "@/components/Developer/DeveloperFormAdd.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "DeveloperView",
  components: {
    TableDeveloper,
    DeveloperFormAdd
  }
});
</script>
