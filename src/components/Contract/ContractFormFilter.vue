<template>
    <form @submit.prevent class="form contract_form_filter">
        <fieldset class="fieldset">
            <legend>Фильтр:</legend>
            <div class="form_elem_container">
                <label class="label" for="">Активные записи</label>
                <input type="checkbox" v-model="filterActive" />
            </div>
            <div class="form_elem_container" v-if="isDeveloper">
                <label class="label" for="">Выбрать клиента</label>
                <select v-model="filterClient">
                    <option v-for="client in clientList" :key="client.id" :value="client.id">{{ client.name }}</option>
                </select>
            </div>
            <div class="form_elem_container">
                <button class="button" @click="clickFilter">Поиск</button>
            </div>
        </fieldset>
    </form>
</template>

<script setup>
import { api } from '@/api';
import store from '@/store';
import { computed, onMounted, ref } from 'vue';
import { contractTable } from './ContractTable';

const isDeveloper = computed(() => {
    return store.getters.getProfile.isDeveloper
})

onMounted(async () => {
    clientList.value = (await api.getClientList());
    console.log(clientList.value);
})

const filterActive = ref(null);
const filterClient = ref(null);
const clientList = ref([]);
const clickFilter = async () => {
    let result;
    if (store.getters.getProfile.isDeveloper) {
        result = await api.getContractDeveloper(filterClient.value, filterActive.value);
    } else {
        result = await api.getContractClient(filterActive.value);
    }
    contractTable.rows = result;

}
</script>