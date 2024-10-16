import { http } from "./baseApi"

const api = {
    auth: async (telephone: string, password: string, isDeveloper: boolean) => {
        const res = await http.post("/authorization", {
            telephone, password, isDeveloper
        });
        return res.data;
    }
}

export {
    api
}