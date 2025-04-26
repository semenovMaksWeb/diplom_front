import { api } from "@/api"
import { ActiveButtonTable } from "@/script/activeButtonTable";
import { onMounted, reactive } from "vue"
const { buttonDisplay, tableLoadingFinishClient } = ActiveButtonTable();

export const tableClient = reactive({
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
            label: "Имя",
            field: "name",
            width: "10%",
            sortable: true,
        },
        {
            label: "Фамилия",
            field: "surname",
            width: "10%",
            sortable: true,
        },
        {
            label: "Отчество",
            field: "patronymic",
            width: "10%",
            sortable: true,
        },
        {
            label: "Телефон",
            field: "telephone",
            width: "15%",
            sortable: true,
        },
        {
            label: "Активность",
            field: "active",
            width: "10%",
            sortable: true,
        },
        {
            label: "",
            width: "15%",
            display: buttonDisplay
        }
    ],
    "is-hide-paging": true,
    rows: [],
})

export function clientTableUpdateRow(row: any) {
    const findIndex = tableClient.rows.findIndex((e: any) => e.id == row.id);
    const rows = tableClient.rows as any;
    rows[findIndex] = row;
}

export function FormTableClient() {
    onMounted(async () => {
        tableClient.isLoading = true;
        const result = await api.getClientList();
        tableClient.rows = result;
        tableClient.total = result.length;
        tableClient.isLoading = false;
    })
    return {
        tableClient,
        tableLoadingFinishClient
    }
}