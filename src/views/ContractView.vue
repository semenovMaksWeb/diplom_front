<template>
  <div class="view view_contract">
    <ContractTable />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ContractTable from "../components/Contract/ContractTable.vue"

export default defineComponent({
  name: "ContractView",
  components: {
    ContractTable
  }
});
</script>
