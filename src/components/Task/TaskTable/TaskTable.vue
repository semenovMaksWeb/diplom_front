<template>
    <VueTableLite v-bind="taskTable" @is-finished="tableLoadingFinish"  />
</template>

<script lang="ts">

import VueTableLite from "vue3-table-lite/ts";
import { TaskTable } from "./TaskTable";

export default {
    setup() {
        return {
            ...TaskTable()
        }
    },
    components: { VueTableLite }
}
</script>