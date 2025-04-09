<template>
    <div class="form_elem_container">
        <label class="label" for="">{{ label }}</label>
        <select v-model="organizationId">
            <option :value="null"></option>
            <option v-for="organization in organizationList" :key="organization.id" :value="organization.id">{{
                organization.name }}</option>
        </select>
    </div>
</template>

<script>
export default {
    name: "OrganizationSelect",
    props: {
        organizationIdProps: {},
        label: { type: String }
    },
    data() {
        return {
            organizationId: null,
        }

    },
    watch: {
        organizationIdProps(val, oldVal) {
            this.organizationId = val;
        },
        organizationId(val) {
            this.$emit("changeOrganizationId", val);
        }
    }
}
</script>


<script setup>
import { api } from '@/api';
import { onMounted, ref } from 'vue';

const organizationList = ref();


onMounted(async () => {
    organizationList.value = await api.getOrganization(true);
})
</script>