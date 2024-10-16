import { api } from "@/api";
import { ref } from "vue";
import { useCookies } from 'vue3-cookies';

export function FormLogin() {
    const { cookies } = useCookies();

    const telephone = ref("");
    const password = ref("");
    const isDeveloper = ref(false);

    const clickButton = async function () {
        const res = await api.auth(telephone.value, password.value, isDeveloper.value);
        cookies.set("token", res);
    }
    return {
        telephone,
        password,
        isDeveloper,
        clickButton
    }
}