<template>
    <form @submit.prevent class="form task_form_add" v-if="isDeveloper">
        <fieldset class="fieldset">
            <legend>Создание задачи:</legend>
            <div class="form_elem_container">
                <label class="label" for="">Тема задачи</label>
                <input v-model="theme" />
            </div>
            <div class="form_elem_container">
                <label class="label" for="">Сообщение задачи</label>
                <textarea v-model="message" />
            </div>
            <SelectDeveloper :developerIdProps="developerId" label="Разработчик"
                @changeDeveloperId="developerId = event" />
        </fieldset>
    </form>
</template>

<script setup>

import { api } from '@/api';
import store from '@/store';
import { computed, ref } from 'vue';
import { tableDeveloper } from "@/components/Developer/TableDeveloper/TableDeveloper.ts"
import SelectDeveloper from '@/components/Developer/SelectDeveloper/SelectDeveloper.vue';


const isDeveloper = computed(() => {
    return store.getters.getProfile.isDeveloper
})

const theme = ref(null);
const message = ref(null);
const developerId = ref(null);

const saveClient = async () => {
    const res = await api.saveDeveloper(clientName.value, clientSurname.value, clientPatronymic.value, clientTelephone.value, clientPassword.value);
    tableDeveloper.rows.push({ id: res.id, name: res.name, surname: res.surname, patronymic: res.patronymic, telephone: res.telephone });
    tableDeveloper.total = tableDeveloper.rows.length;
}




</script>