<template>
    <form @submit.prevent class="form contract_form_add" v-if="isDeveloper">
        <fieldset class="fieldset">
            <legend>Создание договор:</legend>
            <SelectClient @changeClientId="clientId = event" :clientIdProps="clientId" :label="'Выбрать клиента'" />
            <div class="form_elem_container">
                <button class="button" @click="saveContract">Сохранить</button>
            </div>
        </fieldset>
    </form>
</template>

<script>
export default {
    components: {
        SelectClient
    }
}
</script>

<script setup>

import { api } from '@/api';
import store from '@/store';
import { computed, ref } from 'vue';
import { toast } from 'vue3-toastify';
import { contractTable } from './ContractTable';
import SelectClient from '../Client/SelectClient/SelectClient.vue';


const clientId = ref();


const isDeveloper = computed(() => {
    return store.getters.getProfile?.isDeveloper
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