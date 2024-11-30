<template>
    <vue-final-modal v-model="show" name="taskForm">
        <template #title>$vfm.show</template>
        <template #default="{ params }">
            Hi
        </template>
    </vue-final-modal>
</template>

<script>
import store from '@/store';
import { VueFinalModal, ModalsContainer } from 'vue-final-modal'

export default {
    computed: {
        show() {
            return store.getters.getOpenModal;
        }
    },
    components: {
        VueFinalModal,
        ModalsContainer
    }
}
</script>