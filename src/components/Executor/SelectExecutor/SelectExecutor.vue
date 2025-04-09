<template>
    <div class="form_elem_container">
        <label class="label" for="">{{ label }}</label>
        <select v-model="executorId">
            <option :value="null"></option>
            <option v-for="executor in executorList" :key="executor.id" :value="executor.id">{{ executor.name }}
            </option>
        </select>
    </div>
</template>

<script>
export default {
    name: "SelectExecutor",
    props: {
        executorIdProps: {},
        label: { type: String }
    },
    data() {
        return {
            executorId: this.executorIdProps,
        }

    },
    watch: {
        executorIdProps(val) {
            console.log(val);            
            this.executorId = val;
        },
        executorId(val) {
            this.$emit("changeExecutorId", val);
        }
    }
}
</script>


<script setup>
import { api } from '@/api';
import { onMounted, ref } from 'vue';

const executorList = ref();


onMounted(async () => {
    executorList.value = (await api.getExecutorList());
})
</script>