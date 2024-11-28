<template>
    <form @submit.prevent class="form">
        <fieldset class="fieldset">
            <legend>Фильтр задач:</legend>

            <div class="form_elem_container">
                <label class="label" for="">Статус задачи</label>
            </div>

            <SelectDeveloper :developerIdProps="developerId" label="Разработчик" @changeDeveloperId="setDeveloperId" />

            <SelectClient v-if="isDeveloper" @changeClientId="setClientId" :clientIdProps="clientId"
                label="Выбрать клиента" />
            <div class="form_elem_container">
                <button class="button" @click="clickFilter">Поиск</button>
            </div>
        </fieldset>
    </form>
</template>

<script>
import SelectClient from '@/components/Client/SelectClient/SelectClient.vue';
import SelectDeveloper from '@/components/Developer/SelectDeveloper/SelectDeveloper.vue';
import { computed, ref } from 'vue';
import { loaderTableTask } from '@/script/loaderTable';

export default {
    components: {
        SelectClient,
        SelectDeveloper
    }
}
</script>

<script setup>
import store from '@/store';
const clientId = ref();
const developerId = ref();

const setClientId = (e) => {
    clientId.value = e;
}

const setDeveloperId = (e) => {
    developerId.value = e;
}

const isDeveloper = computed(() => {
    return store.getters.getProfile.isDeveloper
})

const clickFilter = async () => {
    console.log(developerId.value, clientId.value);
    await loaderTableTask(null, developerId.value, clientId.value);
}
</script>