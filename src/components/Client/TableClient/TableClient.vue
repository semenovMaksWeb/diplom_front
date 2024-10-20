<template>
    <VueTableLite v-bind="table" />
</template>

<script lang="ts">

import VueTableLite from "vue3-table-lite/ts";
import { FormTableClient } from "./TableClient";
 
export default {
    setup() {
        return {
            ...FormTableClient()
        }
    },
    components: { VueTableLite }
}
</script>