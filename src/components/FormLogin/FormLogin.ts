import { api } from "@/api";
import router from "@/router";
import store from "@/store";
import { ref } from "vue";
import { useCookies } from 'vue3-cookies';

export function FormLogin() {
    const { cookies } = useCookies();

    const telephone = ref("");
    const password = ref("");
    const isExecutor = ref(false);

    const clickButton = async function () {
        const res = await api.auth(telephone.value, password.value, isExecutor.value);
        cookies.set("token", res);
        await store.dispatch("acitonProfile");
        await router.push("/");
    }
    return {
        telephone,
        password,
        isExecutor,
        clickButton
    }
}