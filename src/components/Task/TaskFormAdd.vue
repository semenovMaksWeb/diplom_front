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

            <button class="button" v-if="update" @click="updateClient">Изменить задачу</button>
            <button class="button" v-else="update" @click="saveClient">Создать задачу</button>
        </fieldset>
    </form>
</template>

<script setup>

import { api } from '@/api';
import store from '@/store';
import { computed, ref } from 'vue';
import { tableDeveloper } from "@/components/Developer/TableDeveloper/TableDeveloper.ts"
import SelectDeveloper from '@/components/Developer/SelectDeveloper/SelectDeveloper.vue';

const props = defineProps({
    update: Boolean,
    default: false,
})

const id = ref(null);
const theme = ref(null);
const message = ref(null);
const developerId = ref(null);

const init = () => {
    if (props.update) {
        console.log(store.getters.getActiveRowTask);

        id.value = store.getters.getActiveRowTask.id;
        theme.value = store.getters.getActiveRowTask.theme;
        message.value = store.getters.getActiveRowTask.message;
        developerId.value = store.getters.getActiveRowTask.developer_id;
    }
}

init();

const isDeveloper = computed(() => {
    return !store.getters.getProfile.isDeveloper
})



const saveClient = async () => {
    const res = await api.saveDeveloper(clientName.value, clientSurname.value, clientPatronymic.value, clientTelephone.value, clientPassword.value);
    tableDeveloper.rows.push({ id: res.id, name: res.name, surname: res.surname, patronymic: res.patronymic, telephone: res.telephone });
    tableDeveloper.total = tableDeveloper.rows.length;
}

const updateClient = () => {

}




</script>