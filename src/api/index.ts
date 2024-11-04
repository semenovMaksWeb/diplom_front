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

const getDeveloperList = async function () {
    const res = await http.get("/developer");
    return res.data;
}

const getContractDeveloper = async function (client_id?: number, active?: boolean) {
    const res = await http.get("/contract", {
        params: {
            client_id,
            active
        }
    });
    return res.data;
}


const getContractClient = async function (active?: boolean) {
    const res = await http.get("/contract/id", { params: { active } });
    return res.data;
}

const api = {
    auth,
    getProfile,
    exit,
    getClientList,
    getDeveloperList,
    getContractDeveloper,
    getContractClient
}

export {
    api
}