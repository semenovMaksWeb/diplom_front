<template>
  <div class="view view_task">
    <TaskTable />
  </div>
</template>

<script lang="ts">
import TaskTable from "@/components/Task/TaskTable/TaskTable.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "TaskView",
  components: { TaskTable }
});
</script>
