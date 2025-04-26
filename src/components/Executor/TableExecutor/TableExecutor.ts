import { api } from "@/api"
import { ActiveButtonTable } from "@/script/activeButtonTable";
import { onMounted, reactive } from "vue"

const { buttonDisplay, tableLoadingFinishExecutor } = ActiveButtonTable();
export const tableExecutor = reactive({
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
            width: "15%",
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

export function executorTableUpdateRow(row: any) {
    const findIndex = tableExecutor.rows.findIndex((e: any) => e.id == row.id);
    const rows = tableExecutor.rows as any;
    rows[findIndex] = row;
}

export function TableExecutor() {
 
    onMounted(async () => {
        tableExecutor.isLoading = true;
        const result = await api.getExecutorList();
        tableExecutor.rows = result;
        tableExecutor.total = result.length;
        tableExecutor.isLoading = false;
    })
    return {
        tableExecutor,
        tableLoadingFinishExecutor
    }
}