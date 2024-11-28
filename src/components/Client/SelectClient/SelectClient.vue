<template>
    <div class="form_elem_container">
        <label class="label" for="">{{ label }}</label>
        <select v-model="clientId">
            <option :value="null"></option>
            <option v-for="client in clientList" :key="client.id" :value="client.id">{{ client.name }}</option>
        </select>
    </div>
</template>

<script>
export default {
    name: "SelectClient",
    props: {
        clientIdProps: {},
        label: { type: String }
    },
    data() {
        return {
            clientId: null,
        }

    },
    watch: {
        clientIdProps(val, oldVal) {
            this.clientId = val;
        },
        clientId(val) {
            this.$emit("changeClientId", val);
        }
    }
}
</script>


<script setup>
import { api } from '@/api';
import { onMounted, ref } from 'vue';

const clientList = ref();


onMounted(async () => {
    clientList.value = (await api.getClientList());
})
</script>