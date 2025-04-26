import { loaderTableTask } from "@/script/loaderTable"
import store from "@/store";
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
            label: "Тема",
            field: "theme",
            width: "10%",
            sortable: true,
        },
        {
            label: "Дата задачи",
            field: "date_create",
            width: "15%",
            sortable: true,
        },
        {
            label: "Дата завершения",
            field: "date_end",
            width: "17%",
            sortable: true,
        },
        {
            label: "Клиент",
            field: "client_name",
            width: "15%",
            sortable: true,
        },
        {
            label: "Исполнитель",
            field: "executor_name",
            width: "15%",
            sortable: true,
        },
        {
            label: "Статус",
            field: "status_name",
            width: "15%",
            sortable: true,
        },
        {
            label: "",
            width: "15%",
            display: function (row: any) {
                const buttonText = `<button class="button is-rows-el quick-btn" data-id=${row.id}>Открыть заявку</button>`
                return buttonText;
            }
        }
    ],
    "is-hide-paging": true,
    rows: [],
})

export function TaskTable() {
    const tableLoadingFinish = (elements: any) => {
        setTimeout(() => {
            for (const element of elements) {
                element.onclick = () => {
                    const rowActive = taskTable.rows.find((row: any) => row.id == element.dataset.id);
                    store.commit("saveOpenModal", true);
                    store.commit("saveActiveRowTask", rowActive);
                }
            }
        }, 100);
    };


    onMounted(async () => {
        loaderTableTask(null, null, null);
    })
    return {
        tableLoadingFinish,
        taskTable
    }
}

export function TaskTableUpdateRow(row: any) {
    const findIndex = taskTable.rows.findIndex((e: any) => e.id == row.id);
    const rows = taskTable.rows as any;
    rows[findIndex] = row;
}

export function TaskTableAddRow(row: never) {
    taskTable.rows.push(row);
}