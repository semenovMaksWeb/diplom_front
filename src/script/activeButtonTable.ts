import { api } from "@/api";
import { clientTableUpdateRow, tableClient } from "@/components/Client/TableClient/TableClient";
import { executorTableUpdateRow, tableExecutor } from "@/components/Executor/TableExecutor/TableExecutor";
import { organizationTable, organizationTableUpdateRow } from "@/components/Organization/OrganizationTable";
import store from "@/store";
import { toast } from 'vue3-toastify';

export function ActiveButtonTable() {
    const buttonDisplay = function (row: any) {
        if (store.getters.getProfile?.isExecutor) {
            const buttonText = `<button class="button is-rows-el quick-btn" data-id=${row.id}>Изменить активность</button>`
            return buttonText;
        }
        return;
    }

    const tableLoadingFinishOrganization = (elements: any) => {
        setTimeout(() => {
            for (const element of elements) {
                element.onclick = async () => {
                    const activeRow: any = organizationTable.rows.find((e: any) => e.id == +element.dataset.id);
                    const row = await api.updateOrganization(activeRow.id, !activeRow.active, activeRow.name);
                    organizationTableUpdateRow(row);
                    toast(`Активность организации изменена`, {
                        "theme": "auto",
                        "type": "success",
                        "dangerouslyHTMLString": true
                    })
                }
            }
        }, 100);
    };

    const tableLoadingFinishClient = (elements: any) => {
        setTimeout(() => {
            for (const element of elements) {
                element.onclick = async () => {
                    const activeRow: any = tableClient.rows.find((e: any) => e.id == element.dataset.id);
                    await api.updateClient(activeRow.id, !activeRow.active);
                    clientTableUpdateRow({ ...activeRow, active: !activeRow.active });
                    toast(`Активность клиента изменена`, {
                        "theme": "auto",
                        "type": "success",
                        "dangerouslyHTMLString": true
                    })
                }
            }
        }, 100);
    };

    const tableLoadingFinishExecutor = (elements: any) => {
        setTimeout(() => {
            for (const element of elements) {
                element.onclick = async () => {
                    const activeRow: any = tableExecutor.rows.find((e: any) => e.id == element.dataset.id);
                    await api.updateExecutor(activeRow.id, !activeRow.active);
                    executorTableUpdateRow({ ...activeRow, active: !activeRow.active });
                    toast(`Активность испольнителя изменена`, {
                        "theme": "auto",
                        "type": "success",
                        "dangerouslyHTMLString": true
                    })
                }
            }
        }, 100);
    };

    return {
        buttonDisplay,
        tableLoadingFinishOrganization,
        tableLoadingFinishExecutor,
        tableLoadingFinishClient
    }
}