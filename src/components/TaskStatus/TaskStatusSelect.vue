<template>
    <div class="form_elem_container">
        <label class="label">{{ label }}</label>
        <select v-model="statusTaskId">
            <option :value="null"></option>
            <option v-for="statusTask in statusTaskList" :key="statusTask.id" :value="statusTask.id">{{ statusTask.name
            }}
            </option>
        </select>
    </div>
</template>

<script>
export default {
    name: "TaskStatusSelect",
    props: {
        statusTaskIdProps: {},
        label: { type: String }
    },
    data() {
        return {
            statusTaskId: this.statusTaskIdProps,
        }

    },
    watch: {
        statusTaskIdProps(val) {
            console.log(val);
            this.statusTaskId = val;
        },
        statusTaskId(val) {
            this.$emit("changeStatusTaskId", val);
        }
    }
}
</script>


<script setup>
import { api } from '@/api';
import { onMounted, ref } from 'vue';

const statusTaskList = ref();


onMounted(async () => {
    statusTaskList.value = (await api.getStatusTask());
})
</script>