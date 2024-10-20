import { api } from "@/api"
import { onMounted, reactive } from "vue"

export function FormTableClient() {
    const table = reactive({
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
                label: "Name",
                field: "name",
                width: "10%",
                sortable: true,
            },
            {
                label: "Surname",
                field: "surname",
                width: "10%",
                sortable: true,
            },
            {
                label: "Patronymic",
                field: "patronymic",
                width: "10%",
                sortable: true,
            },
            {
                label: "Telephone",
                field: "telephone",
                width: "15%",
                sortable: true,
            }
        ],
        "is-hide-paging": true,
        rows: [],
    })
    onMounted(async () => {
        table.isLoading = true;
        const result = await api.getClientList();
        table.rows = result;
        table.total = result.length;
        table.isLoading = false;
    })
    return {
        table
    }
}