import { api } from "@/api";
import { organizationTable } from "@/components/Organization/OrganizationTable";
import { taskTable } from "@/components/Task/TaskTable/TaskTable";
import store from "@/store"

export const loaderTableContact = async (filterActive: boolean = true) => {
    organizationTable.isLoading = true;
    if (store.getters.getProfile.isExecutor) {
        const result = await api.getOrganization(filterActive);
        organizationTable.rows = result;
        organizationTable.total = result.length;
        organizationTable.isLoading = false;
    }
}

export const loaderTableTask = async (status_id: string | null, executor_id: string | null, client_id: string | null) => {
    taskTable.isLoading = true;
    let result;
    if (store.getters.getProfile.isExecutor) {
        result = await api.taskAdminGet(status_id, client_id, executor_id);
    } else {
        result = await api.taskUserGet(status_id, executor_id);
    }
    taskTable.rows = result;
    taskTable.total = result?.length;
    taskTable.isLoading = false;
}