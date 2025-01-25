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

const getOrganization = async function (active?: boolean) {
    const res = await http.get("/organization", { params: { active } });
    return res.data;
}

const saveOrganization = async function (name: string) {
    const res = await http.post("/organization", { name: name, active: true });
    return res.data;
}

const updateOrganization = async function (id: number, active: boolean, name: string) {
    const res = await http.put("/organization", { id, active, name });
    return res.data;
}

const updateClient = async function (id: number, active: boolean) {
    const res = await http.put("/client", { id, active });
    return res.data;
}

const updateDeveloper = async function (id: number, active: boolean) {
    const res = await http.put("/developer", { id, active });
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

const updateTask = async function (id: number, theme: string, message: string, developer_id: string) {
    const res = await http.put("/taks", { id, theme, message, developer_id },);
    return res.data;
}

const getIdTask = async function (id: number) {
    const res = await http.get("/taks/id", { params: { id } });
    return res.data;
}

const api = {
    auth,
    getProfile,
    exit,

    getClientList,
    getDeveloperList,
    getOrganization,

    saveOrganization,
    saveClient,
    saveDeveloper,
    saveTask,

    taskAdminGet,
    taskUserGet,

    updateStatusTask,
    updateTask,
    updateOrganization,
    updateClient,
    updateDeveloper,

    getIdTask
}

export {
    api
}