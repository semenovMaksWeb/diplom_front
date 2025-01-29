<template>
  <div class="view viewExecutor">
    <TableExecutor />
    <ExecutorFormAdd />
  </div>
</template>

<script lang="ts">
import TableExecutor from "@/components/Executor/TableExecutor/TableExecutor.vue";
import ExecutorFormAdd from "@/components/Executor/ExecutorFormAdd.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "ExecutorView",
  components: {
    TableExecutor,
    ExecutorFormAdd
  }
});
</script>
