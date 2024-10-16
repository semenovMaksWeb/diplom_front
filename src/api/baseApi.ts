import { useCookies } from "vue3-cookies";
import axios from "axios"

const http = axios.create({
    baseURL: "http://localhost:3000/",
});

const { cookies } = useCookies();

http.interceptors.request.use((res) => {
    res.headers.common["Authorization"] = cookies.get("token");
    return res;
});

export { http }