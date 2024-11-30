<template>
    <vue-final-modal v-model="show" classes="modal-container" content-class="modal-content">
        Hi
    </vue-final-modal>
</template>

<script>
import store from '@/store';
import { VueFinalModal, ModalsContainer } from 'vue-final-modal'
import 'vue-final-modal'

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

<style>
::v-deep .modal-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

::v-deep .modal-content {
    display: flex;
    flex-direction: column;
    margin: 0 1rem;
    padding: 1rem;
    border: 1px solid #e2e8f0;
    border-radius: 0.25rem;
    background: #fff;
}

.modal__title {
    font-size: 1.5rem;
    font-weight: 700;
}
</style>

<style>
.dark-mode div::v-deep .modal-content {
    border-color: #2d3748;
    background-color: #1a202c;
}
</style>