<template>
    <form @submit.prevent class="form contract_form_filter">
        <fieldset class="fieldset">
            <legend>Фильтр:</legend>
            <div class="form_elem_container">
                <label class="label" for="">Активные записи</label>
                <input type="checkbox" v-model="filterActive" />
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
import { onMounted, ref } from 'vue';
import { loaderTableContact } from '@/script/loaderTable';

onMounted(async () => {
    if (store.getters.getProfile.isDeveloper) {
        clientList.value = (await api.getClientList());
    }
})

const filterActive = ref(true);
const clientList = ref([]);
const clickFilter = async () => {
    await loaderTableContact(filterActive.value);
}
</script>