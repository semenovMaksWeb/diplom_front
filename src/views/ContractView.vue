<template>
  <div class="view view_contract">
    <ContractFormFilter />
    <ContractTable />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ContractTable from "../components/Contract/ContractTable.vue"
import ContractFormFilter from "@/components/Contract/ContractFormFilter.vue";

export default defineComponent({
  name: "ContractView",
  components: {
    ContractTable,
    ContractFormFilter
  },

});
</script>

<style>
.view_contract .contract_form_filter {
  margin-bottom: 20px;
}
</style>
