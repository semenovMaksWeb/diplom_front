<template>
    <form @submit.prevent class="form task_form_add" v-if="!isExecutor">
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
            <SelectExecutor :executorIdProps="executorId" label="Разработчик" @changeExecutorId="setExecutorId" />

            <button class="button" v-if="update" @click="updateTask">Изменить задачу</button>
            <button class="button" v-else="update" @click="saveTask">Создать задачу</button>
        </fieldset>
    </form>
</template>

<script setup>

import { api } from '@/api';
import store from '@/store';
import { computed, ref } from 'vue';
import { tableExecutor } from "@/components/Executor/TableExecutor/TableExecutor.ts"
import SelectExecutor from '@/components/Executor/SelectExecutor/SelectExecutor.vue';
import { TaskTableUpdateRow } from './TaskTable/TaskTable';
import { toast } from 'vue3-toastify';

const props = defineProps({
    update: Boolean,
    default: false,
})

const id = ref(null);
const theme = ref(null);
const message = ref(null);
const executorId = ref(null);

const isExecutor = computed(() => {
    return store.getters?.getProfile?.isExecutor
})

const init = () => {
    if (props.update) {
        id.value = store.getters.getActiveRowTask.id;
        theme.value = store.getters.getActiveRowTask.theme;
        message.value = store.getters.getActiveRowTask.message;
        executorId.value = store.getters.getActiveRowTask.executor_id;
    }
}

init();

const setExecutorId = (e) => {
    executorId.value = e;
}

const checkTask = () => {
    if (!theme.value || !message.value || !executorId.value) {
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
    try {
        const res = await api.saveTask(theme.value, message.value, executorId.value);
        tableExecutor.rows.push({ id: res.id, name: res.name, surname: res.surname, patronymic: res.patronymic, telephone: res.telephone });
        tableExecutor.total = tableExecutor.rows.length;
    } catch {

    }

}

const updateTask = async () => {
    if (!checkTask()) {
        return;
    }
    await api.updateTask(id.value, theme.value, message.value, executorId.value);
    const newRow = await api.getIdTask(id.value);
    TaskTableUpdateRow(newRow);
    store.commit("saveOpenModal", false)
}

</script>