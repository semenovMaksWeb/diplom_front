<template>
  <div class="view view_task">
    <TaskFilter />
    <TaskTable />
    <TaskFormAdd />
    <TaskForm />
  </div>
</template>

<script lang="ts">
import TaskFilter from "@/components/Task/TaskFilter/TaskFilter.vue";
import TaskTable from "@/components/Task/TaskTable/TaskTable.vue";
import TaskFormAdd from "@/components/Task/TaskFormAdd.vue";
import { defineComponent } from "vue";
import TaskForm from "@/components/Task/TaskForm/TaskForm.vue";

export default defineComponent({
  name: "TaskView",
  components: { TaskTable, TaskFilter, TaskFormAdd, TaskForm }
});
</script>
