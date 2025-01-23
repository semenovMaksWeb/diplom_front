import { ActiveButtonTable } from "@/script/activeButtonTable";
import { loaderTableContact } from "@/script/loaderTable";
import { onMounted, reactive } from "vue"

const { buttonDisplay, tableLoadingFinishOrganization } = ActiveButtonTable();

export const organizationTable = reactive({
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
            label: "name",
            field: "name",
            width: "10%",
            sortable: true,
        },
        {
            label: "active",
            field: "active",
            width: "10%",
            sortable: true,
        },
        {
            label: "button",
            width: "15%",
            display: buttonDisplay
        }
    ],
    "is-hide-paging": true,
    rows: [],
})

export function organizationTableUpdateRow(row: any) {
    const findIndex = organizationTable.rows.findIndex((e: any) => e.id == row.id);
    const rows = organizationTable.rows as any;
    rows[findIndex] = row;
}

export function OrganizationTable() {
    onMounted(async () => {
        loaderTableContact();
    })
    return {
        organizationTable,
        tableLoadingFinishOrganization
    }
}