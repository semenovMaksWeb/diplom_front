<template>
    <teleport to="body">
        <div class="modal-wrapper" v-if="show" tabindex="-1" @keyup.esc="showUpdate(false)">
            <div class="modal-content">
                <div class="modal-header">Заявка # {{ activeRowTask.id }}</div>
                <div class="modal-body">
                    <TaskFormAdd :update="true" />
                    <div>
                        <button>В проверке</button>
                        <button v-if="isVisibleButtonWork">В работе</button>
                        <button>Выполнена</button>
                        <button>Отмененна</button>
                    </div>
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
        },

        isVisibleButtonWork() {
            if (store.getters.getProfile.isDeveloper && this.activeRowTask.developer_id == store.getters.getProfile.user.id) {
                return true;
            }
            return false;
        },

        isVisibleButtonCheck() {

        },
        isVisibleButtonSuccess() {

        },

        isVisibleButtonCancel() {

        },
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