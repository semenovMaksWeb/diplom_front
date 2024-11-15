import { loaderTableTask } from "@/script/loaderTable"
import { onMounted, reactive } from "vue"

export const taskTable = reactive({
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
            label: "theme",
            field: "theme",
            width: "10%",
            sortable: true,
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
            label: "client_name",
            field: "client_name",
            width: "15%",
            sortable: true,
        },
        {
            label: "developer_name",
            field: "developer_name",
            width: "15%",
            sortable: true,
        },
        {
            label: "status_name",
            field: "status_name",
            width: "15%",
            sortable: true,
        }
    ],
    "is-hide-paging": true,
    rows: [],
})

export function TaskTable() {

    onMounted(async () => {
        loaderTableTask();
    })
    return {
        taskTable
    }
}