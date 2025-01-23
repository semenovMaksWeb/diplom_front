<template>
  <div class="view view_organization">
    <OrganizationFormFilter />
    <OrganizationTable />
    <OrganizationFormAdd />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import OrganizationFormFilter from "../components/Organization/OrganizationFormFilter.vue";
import OrganizationTable from "../components/Organization/OrganizationTable.vue";
import OrganizationFormAdd from "../components/Organization/OrganizationFormFilter.vue" 


export default defineComponent({
  name: "OrganizationView",
  components: {
    OrganizationTable,
    OrganizationFormFilter,
    OrganizationFormAdd
  },

});
</script>

<style>
.view_contract .contract_form_filter {
  margin-bottom: 20px;
}
</style>
