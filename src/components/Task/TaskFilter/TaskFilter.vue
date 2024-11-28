<template>
    <form @submit.prevent class="form">
        <fieldset class="fieldset">
            <legend>Фильтр задач:</legend>

            <div class="form_elem_container">
                <label class="label" for="">Статус задачи</label>
            </div>

            <SelectDeveloper :developerIdProps="developerId" label="Разработчик"
                @changeDeveloperId="developerId = event" />

            <SelectClient v-if="isDeveloper" @changeClientId="clientId = event" :clientIdProps="clientId"
                label="Выбрать клиента" />

        </fieldset>
    </form>
</template>

<script>
import SelectClient from '@/components/Client/SelectClient/SelectClient.vue';
import SelectDeveloper from '@/components/Developer/SelectDeveloper/SelectDeveloper.vue';
import { computed, ref } from 'vue';

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
const isDeveloper = computed(() => {
    return store.getters.getProfile.isDeveloper
})
</script>