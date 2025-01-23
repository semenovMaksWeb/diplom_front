<template>
    <VueTableLite v-bind="organizationTable" @is-finished="tableLoadingFinishOrganization" />
</template>

<script lang="ts">

import VueTableLite from "vue3-table-lite/ts";
import { OrganizationTable } from "./OrganizationTable"

export default {
    name: "OrganizationTable",
    setup() {
        return {
            ...OrganizationTable()
        }
    },
    components: { VueTableLite }
}
</script>