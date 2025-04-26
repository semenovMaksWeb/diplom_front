<template>
    <form @submit.prevent class="form">
        <fieldset class="fieldset">
            <legend>Фильтр задач:</legend>

            <div class="form_elem_container">
                <TaskStatusSelect label="Статус задачи" :statusTaskIdProps="statusTaskId"
                    @changeStatusTaskId="setStatusId" />
            </div>

            <SelectExecutor :executorIdProps="executorId" label="Исполнитель" @changeExecutorId="setExecutorId" />

            <SelectClient v-if="isExecutor" @changeClientId="setClientId" :clientIdProps="clientId"
                label="Выбрать клиента" />
            <div class="form_elem_container">
                <button class="button" @click="clickFilter">Поиск</button>
            </div>
        </fieldset>
    </form>
</template>

<script>
import SelectClient from '@/components/Client/SelectClient/SelectClient.vue';
import SelectExecutor from '@/components/Executor/SelectExecutor/SelectExecutor.vue';
import { computed, ref } from 'vue';
import { loaderTableTask } from '@/script/loaderTable';
import TaskStatusSelect from '@/components/TaskStatus/TaskStatusSelect.vue';

export default {
    components: {
        SelectClient,
        SelectExecutor,
        TaskStatusSelect
    }
}
</script>

<script setup>
import store from '@/store';
const clientId = ref();
const executorId = ref();
const statusTaskId = ref();

const setClientId = (e) => {
    clientId.value = e;
}

const setExecutorId = (e) => {
    executorId.value = e;
}

const setStatusId = (e) => {
    statusTaskId.value = e;
}


const isExecutor = computed(() => {
    return store.getters.getProfile?.isExecutor
})

const clickFilter = async () => {
    console.log(statusTaskId.value, executorId.value, clientId.value);
    await loaderTableTask(statusTaskId.value, executorId.value, clientId.value);
}
</script>