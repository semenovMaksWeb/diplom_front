<template>
    <VueTableLite v-bind="tableDeveloper"  @is-finished="tableLoadingFinishDeveloper" />
</template>

<script lang="ts">

import VueTableLite from "vue3-table-lite/ts";
import { TableDeveloper } from "./TableDeveloper";
export default {
    setup() {
        return {
            ...TableDeveloper()
        }
    },
    components: { VueTableLite }
}
</script>