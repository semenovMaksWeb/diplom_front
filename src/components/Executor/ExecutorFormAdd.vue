<template>
    <form @submit.prevent class="form contract_form_add" v-if="isExecutor">
        <fieldset class="fieldset">
            <legend>Создание разработчика:</legend>
            <div class="form_elem_container">
                <label class="label" for="">Имя разработчика</label>
                <input v-model="clientName" />
            </div>
            <div class="form_elem_container">
                <label class="label" for="">Фамилия разработчика</label>
                <input v-model="clientSurname" />
            </div>
            <div class="form_elem_container">
                <label class="label" for="">Отчество разработчика</label>
                <input v-model="clientPatronymic" />
            </div>
            <div class="form_elem_container">
                <label class="label" for="">телефон разработчика</label>
                <input v-model="clientTelephone" />
            </div>
            <div class="form_elem_container">
                <label class="label" for="">пароль разработчика</label>
                <input v-model="clientPassword" type="password" />
            </div>
            <div class="form_elem_container">
                <button class="button" @click="saveClient">Сохранить</button>
            </div>
        </fieldset>
    </form>
</template>

<script setup>

import { api } from '@/api';
import store from '@/store';
import { computed, ref } from 'vue';
import { tableExecutor } from "@/components/Executor/TableExecutor/TableExecutor.ts"


const isExecutor = computed(() => {
    return store.getters.getProfile.isExecutor
})

const clientName = ref(null);
const clientSurname = ref(null);
const clientPatronymic = ref(null);
const clientTelephone = ref(null);
const clientPassword = ref(null);


const saveClient = async () => {
    const res = await api.saveExecutor(clientName.value, clientSurname.value, clientPatronymic.value, clientTelephone.value, clientPassword.value);
    tableExecutor.rows.push({ id: res.id, name: res.name, surname: res.surname, patronymic: res.patronymic, telephone: res.telephone, active: res.active });
    tableExecutor.total = tableExecutor.rows.length;
}

</script>