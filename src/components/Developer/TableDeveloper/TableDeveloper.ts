import { api } from "@/api"
import { onMounted, reactive } from "vue"

export const tableDeveloper = reactive({
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

export function TableDeveloper() {
 
    onMounted(async () => {
        tableDeveloper.isLoading = true;
        const result = await api.getDeveloperList();
        tableDeveloper.rows = result;
        tableDeveloper.total = result.length;
        tableDeveloper.isLoading = false;
    })
    return {
        tableDeveloper
    }
}