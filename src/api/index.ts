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

const getContractDeveloper = async function (client_id?: string, active?: boolean) {
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

const saveContract = async function (client_id: string) {
    const res = await http.post("/contract", { clientId: client_id });
    return res.data;
}

const saveClient = async function (name: string, surname: string, patronymic: string, telephone: string, password: string) {
    const res = await http.post("/client", { name, surname, patronymic, telephone, password });
    return res.data;
}

const saveDeveloper = async function (name: string, surname: string, patronymic: string, telephone: string, password: string) {
    const res = await http.post("/developer", { name, surname, patronymic, telephone, password });
    return res.data;
}

const saveTask = async function (theme: string, message: string, developer_id: string) {
    const res = await http.post("/taks", { theme, message, developer_id, });
    return res.data;
}


const taskAdminGet = async function (status_id: string | null, client_id: string | null, developer_id: string | null) {
    const res = await http.get("/taks/all", {
        params: { status_id, client_id, developer_id }
    });
    return res.data;
}


const taskUserGet = async function (status_id: string | null, developer_id: string | null) {
    const res = await http.get("/taks",
        {
            params: { status_id, developer_id }
        }
    );
    return res.data;
}


const updateStatusTask = async function (status_id: string | null, taks_id: string | null) {
    const res = await http.put("/taks/status", null,
        {
            params: { status_id, task_id: taks_id }
        }
    );
    return res.data;
}

const api = {
    auth,
    getProfile,
    exit,

    getClientList,
    getDeveloperList,
    getContractDeveloper,
    getContractClient,

    saveContract,
    saveClient,
    saveDeveloper,
    saveTask,

    taskAdminGet,
    taskUserGet,
    updateStatusTask,

}

export {
    api
}