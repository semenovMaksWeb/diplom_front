<template>
    <teleport to="body">
        <div class="modal-wrapper" v-if="show" tabindex="-1" @keyup.esc="showUpdate(false)">
            {{ activeRowTask }}
            <div class="modal-content">
                <div class="modal-header">Заявка # {{ activeRowTask.id }}</div>
                <div class="modal-body">
                    <TaskFormAdd :update="true" />
                </div>
            </div>
        </div>

    </teleport>
</template>

<script>
import store from '@/store';
import TaskFormAdd from "@/components/Task/TaskFormAdd.vue";

import { VueFinalModal, ModalsContainer } from 'vue-final-modal'

export default {
    computed: {
        show() {
            return store.getters.getOpenModal;
        },
        activeRowTask() {
            return store.getters.getActiveRowTask
        }
    },
    components: {
        VueFinalModal,
        ModalsContainer,
        TaskFormAdd
    },
    methods: {
        showUpdate(val) {
            store.commit("saveOpenModal", val)
        }
    }

}
</script>

<style>
.modal-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.2);
    width: 100vw;
    height: 100vh;
}

.modal-body {
    margin: 10px;
}

.modal-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    padding: 10px;
}
</style>