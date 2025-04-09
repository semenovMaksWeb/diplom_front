<template>
    <form @submit.prevent class="form contract_form_add" v-if="isExecutor">
        <fieldset class="fieldset">
            <legend>Создание организации:</legend>
            <div class="form_elem_container">
                <label class="label" for="">Имя организации</label>
                <input v-model="nameOrganization" />
            </div>
            <div class="form_elem_container">
                <button class="button" @click="saveContract">Сохранить</button>
            </div>
        </fieldset>
    </form>
</template>

<script>
export default {
    components: {
        SelectClient
    }
}
</script>

<script setup>

import { api } from '@/api';
import store from '@/store';
import { computed, ref } from 'vue';
import { toast } from 'vue3-toastify';
import { organizationTable } from './OrganizationTable';
import SelectClient from '../Client/SelectClient/SelectClient.vue';


const nameOrganization = ref();
const isExecutor = computed(() => {
    return store.getters.getProfile?.isExecutor
})

const saveContract = async () => {
    if (!nameOrganization.value) {
        toast("Не заполнено поле 'Имя организации'", {
            "theme": "auto",
            "type": "error",
            "dangerouslyHTMLString": true
        })
        return;
    }
    const row = await api.saveOrganization(nameOrganization.value);
    organizationTable.rows.push(row);
    organizationTable.total = organizationTable.rows.length;
}

</script>