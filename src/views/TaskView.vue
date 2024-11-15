<template>
  <div class="view view_task">
    <TaskFilter />
    <TaskTable />
  </div>
</template>

<script lang="ts">
import TaskFilter from "@/components/Task/TaskFilter/TaskFilter.vue";
import TaskTable from "@/components/Task/TaskTable/TaskTable.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "TaskView",
  components: { TaskTable, TaskFilter }
});
</script>
