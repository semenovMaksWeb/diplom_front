import { api } from "@/api";
import { contractTable } from "@/components/Contract/ContractTable";
import { taskTable } from "@/components/Task/TaskTable/TaskTable";
import store from "@/store"

export const loaderTableContact = async (filterClient?: string, filterActive?: boolean) => {
    contractTable.isLoading = true;
    let result;
    if (store.getters.getProfile.isDeveloper) {
        result = await api.getContractDeveloper(filterClient, filterActive);
    } else {
        result = await api.getContractClient(filterActive);
    }
    contractTable.rows = result;
    contractTable.total = result.length;
    contractTable.isLoading = false;
}

export const loaderTableTask = async () => {
    taskTable.isLoading = true;
    let result;
    if (store.getters.getProfile.isDeveloper) {
        result = await api.taskAdminGet();
    } else {
        result = await api.taskUserGet();
    }
    taskTable.rows = result;
    taskTable.total = result.length;
    taskTable.isLoading = false;
}