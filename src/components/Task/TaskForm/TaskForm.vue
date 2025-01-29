<template>
    <teleport to="body">
        <div class="modal-wrapper" v-if="show" tabindex="-1" @keyup.esc="showUpdate(false)">
            <div class="modal-content">
                <div class="modal-header">Заявка # {{ activeRowTask.id }}</div>
                <div class="modal-body">
                    <TaskFormAdd :update="true" />
                    <div class="modal-footer">
                        <button @click="saveStatus(3)" class="button" v-if="isVisibleButtonCheck">К проверке
                            задачу</button>
                        <button @click="saveStatus(2)" class="button" v-if="isVisibleButtonWork">Взять в работу</button>
                        <button @click="saveStatus(4)" class="button" v-if="isVisibleButtonSuccess">Выполнить
                            задачу</button>
                        <button @click="saveStatus(5)" class="button" v-if="isVisibleButtonCancel">Отменить
                            задачу</button>
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
import { api } from '@/api';
import { TaskTableUpdateRow } from '../TaskTable/TaskTable';

export default {
    computed: {
        show() {
            return store.getters.getOpenModal;
        },

        activeRowTask() {
            return store.getters.getActiveRowTask
        },

        isVisibleButtonWork() {
            if (store.getters.getProfile.isExecutor && this.activeRowTask.executor_id == store.getters.getProfile.user.id) {
                return true;
            }
            return false;
        },

        isVisibleButtonCheck() {
            if (store.getters.getProfile?.isExecutor && this.activeRowTask.executor_id == store.getters.getProfile.user.id) {
                return true;
            }
            return false;
        },
        isVisibleButtonSuccess() {
            if (!store.getters.getProfile?.isExecutor && this.activeRowTask.status_name == "В проверке") {
                return true;
            }
            return false;
        },

        isVisibleButtonCancel() {
            return true;
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
        },
        async saveStatus(id_status) {
            await api.updateStatusTask(id_status, store.getters.getActiveRowTask.id);
            const newRow = await api.getIdTask(store.getters.getActiveRowTask.id);
            TaskTableUpdateRow(newRow);
            store.commit("saveOpenModal", false);
        }
    }

}
</script>

<style lang="less">
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
    border: 1px solid #000;
}

.modal-footer {
    display: flex;
    gap: 0 5px;
}
</style>