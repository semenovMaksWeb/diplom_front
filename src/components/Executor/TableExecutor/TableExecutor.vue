<template>
    <VueTableLite v-bind="tableExecutor"  @is-finished="tableLoadingFinishExecutor" />
</template>

<script lang="ts">

import VueTableLite from "vue3-table-lite/ts";
import { TableExecutor } from "./TableExecutor";
export default {
    setup() {
        return {
            ...TableExecutor()
        }
    },
    components: { VueTableLite }
}
</script>