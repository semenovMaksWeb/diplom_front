<template>
    <div class="form_elem_container">
        <label class="label" for="">{{ label }}</label>
        <select v-model="developerId">
            <option :value="null"></option>
            <option v-for="developer in developerList" :key="developer.id" :value="developer.id">{{ developer.name }}
            </option>
        </select>
    </div>
</template>

<script>
export default {
    name: "SelectDeveloper",
    props: {
        developerIdProps: {},
        label: { type: String }
    },
    data() {
        return {
            developerId: this.developerIdProps,
        }

    },
    watch: {
        developerIdProps(val) {
            console.log(val);            
            this.clientId = val;
        },
        developerId(val) {
            this.$emit("changeDeveloperId", val);
        }
    }
}
</script>


<script setup>
import { api } from '@/api';
import { onMounted, ref } from 'vue';

const developerList = ref();


onMounted(async () => {
    developerList.value = (await api.getDeveloperList());
})
</script>