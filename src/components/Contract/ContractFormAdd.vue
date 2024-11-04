<template>
    <form @submit.prevent class="form contract_form_add" v-if="isDeveloper">
        <fieldset class="fieldset">
            <legend>Создание клиента:</legend>
            <div class="form_elem_container">
                <label class="label" for="">Дата договора</label>
                <input type="date" v-model="filterActive" />
            </div>
            <div class="form_elem_container">
                <label class="label" for="">Дата конца договора</label>
                <input type="date" v-model="filterActive" />
            </div>
            <div class="form_elem_container" v-if="isDeveloper">
                <label class="label" for="">Выбрать клиента</label>
                <select v-model="filterClient">
                    <option v-for="client in clientList" :key="client.id" :value="client.id">{{ client.name }}</option>
                </select>
            </div>
            <div class="form_elem_container">
                <button class="button" @click="saveContract">Поиск</button>
            </div>
        </fieldset>
    </form>
</template>

<script setup>

import store from '@/store';
import { computed } from 'vue';

const isDeveloper = computed(() => {
    return store.getters.getProfile.isDeveloper
})

const saveContract = () => {
    
}

</script>