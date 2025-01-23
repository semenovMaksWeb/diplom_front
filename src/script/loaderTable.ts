import { api } from "@/api";
import { organizationTable } from "@/components/Organization/OrganizationTable";
import { taskTable } from "@/components/Task/TaskTable/TaskTable";
import store from "@/store"

export const loaderTableContact = async (filterActive: boolean = true) => {
    organizationTable.isLoading = true;
    if (store.getters.getProfile.isDeveloper) {
        const result = await api.getOrganization(filterActive);
        organizationTable.rows = result;
        organizationTable.total = result.length;
        organizationTable.isLoading = false;
    }
}

export const loaderTableTask = async (status_id: string | null, developer_id: string | null, client_id: string | null) => {
    taskTable.isLoading = true;
    let result;
    if (store.getters.getProfile.isDeveloper) {
        result = await api.taskAdminGet(status_id, client_id, developer_id);
    } else {
        result = await api.taskUserGet(status_id, developer_id);
    }
    taskTable.rows = result;
    taskTable.total = result.length;
    taskTable.isLoading = false;
}