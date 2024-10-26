<template>
    <VueTableLite v-bind="table" />
</template>

<script lang="ts">

import VueTableLite from "vue3-table-lite/ts";
import { ContractTable } from "./ContractTable"

export default {
    name: "ContractTable",
    setup() {
        return {
            ...ContractTable()
        }
    },
    components: { VueTableLite }
}
</script>