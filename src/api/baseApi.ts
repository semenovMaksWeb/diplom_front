import { useCookies } from "vue3-cookies";
import axios from "axios"
import router from "@/router";
import { toast } from "vue3-toastify";

const http = axios.create({
    baseURL: "http://localhost:3000/",
});

const { cookies } = useCookies();

http.interceptors.request.use((res) => {
    res.headers["Authorization"] = cookies.get("token");
    return res;
});

// Добавляем перехват ответов
http.interceptors.response.use(function (response) {
    return response;
}, async function (error) {
    const textError = error.response.data.message ?? error;
    toast(textError, {
        "theme": "auto",
        "type": "error",
        "dangerouslyHTMLString": true
    })

    if (error.status === 403 && router.currentRoute.value.name !== "AuthView") {
        await router.push("AuthView");
    }
    return false;
});


export { http }