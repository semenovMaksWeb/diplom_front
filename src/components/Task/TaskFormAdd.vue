<template>
    <form @submit.prevent class="form task_form_add">
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
            <SelectDeveloper :developerIdProps="developerId" label="Разработчик" @changeDeveloperId="setDeveloperId" />

            <button class="button" v-if="update" @click="updateTask">Изменить задачу</button>
            <button class="button" v-else="update" @click="saveTask">Создать задачу</button>
        </fieldset>
    </form>
</template>

<script setup>

import { api } from '@/api';
import store from '@/store';
import { ref } from 'vue';
import { tableDeveloper } from "@/components/Developer/TableDeveloper/TableDeveloper.ts"
import SelectDeveloper from '@/components/Developer/SelectDeveloper/SelectDeveloper.vue';
import { TaskTableUpdateRow } from './TaskTable/TaskTable';
import { toast } from 'vue3-toastify';

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
        id.value = store.getters.getActiveRowTask.id;
        theme.value = store.getters.getActiveRowTask.theme;
        message.value = store.getters.getActiveRowTask.message;
        developerId.value = store.getters.getActiveRowTask.developer_id;
    }
}

init();

const setDeveloperId = (e) => {
    developerId.value = e;
}

const checkTask = () => {
    if (!theme.value || !message.value || !developerId.value) {
        toast("Не заполнены все поля", {
            "theme": "auto",
            "type": "error",
            "dangerouslyHTMLString": true
        })
        return false;
    }
    return true;
}


const saveTask = async () => {
    if (!checkTask()) {
        return;
    }
    const res = await api.saveTask(theme.value, message.value, developerId.value);
    tableDeveloper.rows.push({ id: res.id, name: res.name, surname: res.surname, patronymic: res.patronymic, telephone: res.telephone });
    tableDeveloper.total = tableDeveloper.rows.length;
}

const updateTask = async () => {
    if (!checkTask()) {
        return;
    }
    await api.updateTask(id.value, theme.value, message.value, developerId.value);
    const newRow = await api.getIdTask(id.value);
    TaskTableUpdateRow(newRow);
    store.commit("saveOpenModal", false)
}

</script>