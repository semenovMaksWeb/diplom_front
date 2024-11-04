import { api } from "@/api"
import store from "@/store";
import { onMounted, reactive } from "vue"

export const contractTable = reactive({
    isLoading: false,
    total: 0,

    columns: [
        {
            label: "ID",
            field: "id",
            width: "3%",
            sortable: true,
            isKey: true,
        },
        {
            label: "date_create",
            field: "date_create",
            width: "10%",
            sortable: true,
        },
        {
            label: "date_end",
            field: "date_end",
            width: "10%",
            sortable: true,
        },
        {
            label: "id_client",
            field: "id_client",
            width: "10%",
            sortable: true,
        },
        {
            label: "name_client",
            field: "name_client",
            width: "15%",
            sortable: true,
        }
    ],
    "is-hide-paging": true,
    rows: [],
})

export function ContractTable() {
    onMounted(async () => {
        contractTable.isLoading = true;
        let result: never[] = [];

        if (store.getters.getProfile.isDeveloper) {
            result = await api.getContractDeveloper();
        } else {
            result = await api.getContractClient();
        }

        contractTable.rows = result;
        contractTable.total = result.length;
        contractTable.isLoading = false;
    })
    return {
        contractTable
    }
}