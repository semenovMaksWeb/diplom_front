import { http } from "./baseApi"

const auth = async function (telephone: string, password: string, isDeveloper: boolean) {
    const res = await http.post("/authorization", {
        telephone, password, isDeveloper
    });
    return res.data;
}

const getProfile = async function (token: string) {
    const res = await http.get("/getProfile", { params: { token } });
    return res.data;
}

const exit = async function (token: string) {
    const res = await http.get("/exit", { params: { token } });
    return res.data;
}

const getClientList = async function () {
    const res = await http.get("/client");
    return res.data;
}

const api = {
    auth,
    getProfile,
    exit,
    getClientList
}

export {
    api
}