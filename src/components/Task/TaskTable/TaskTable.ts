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
        },
        {
            label: "button",
            width: "15%",
            display: function (row: any) {
                const buttonText = `<button class="is-rows-el quick-btn" data-id=${row.id}>Открыть заявку</button>`
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