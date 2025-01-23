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
import { loaderTableContact } from '@/script/loaderTable';

const isDeveloper = computed(() => {
    return store.getters.getProfile.isDeveloper
})

onMounted(async () => {
    if (store.getters.getProfile.isDeveloper) {
        clientList.value = (await api.getClientList());
    }
})

const filterActive = ref(null);
const filterClient = ref(null);
const clientList = ref([]);
const clickFilter = async () => {
    await loaderTableContact(filterActive.value);
}
</script>