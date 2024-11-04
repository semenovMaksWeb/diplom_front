import { api } from "@/api";
import { contractTable } from "@/components/Contract/ContractTable";
import store from "@/store"

export const loaderTableContact = async (filterClient?: number, filterActive?: boolean) => {
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