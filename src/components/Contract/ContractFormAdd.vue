<template>
    <form @submit.prevent class="form contract_form_add" v-if="isDeveloper">
        <fieldset class="fieldset">
            <legend>Создание клиента:</legend>
            <div class="form_elem_container">
                <label class="label" for="">Выбрать клиента</label>
                <select v-model="clientId">
                    <option v-for="client in clientList" :key="client.id" :value="client.id">{{ client.name }}</option>
                </select>
            </div>
            <div class="form_elem_container">
                <button class="button" @click="saveContract">Сохранить</button>
            </div>
        </fieldset>
    </form>
</template>

<script setup>

import { api } from '@/api';
import store from '@/store';
import { computed, onMounted, ref } from 'vue';
import { toast } from 'vue3-toastify';
import { contractTable } from './ContractTable';


const clientId = ref();
const clientList = ref();

const isDeveloper = computed(() => {
    return store.getters.getProfile.isDeveloper
})

onMounted(async () => {
    if (isDeveloper.value) {
        clientList.value = (await api.getClientList());
    }
})

const saveContract = async () => {
    if (!clientId.value) {
        toast("Не заполнены все поля", {
            "theme": "auto",
            "type": "error",
            "dangerouslyHTMLString": true
        })
        return;
    }
    const result = await api.saveContract(clientId.value);
    console.log(result);
    const row = {
        id: result.id,
        date_create: result.date_create,
        date_end: result.date_end,
        id_client: result.client.id,
        name_client: clientList.value.find((cl) => cl.id == result.client.id).name
    }
    contractTable.rows.push(row);
    contractTable.total = contractTable.rows.length;
}

</script>