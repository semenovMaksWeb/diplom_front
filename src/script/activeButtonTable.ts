export function ActiveButtonTable() {
    const buttonDisplay = function (row: any) {
        const buttonText = `<button class="button is-rows-el quick-btn" data-id=${row.id}>Изменить активность</button>`
        return buttonText;
    }

    const tableLoadingFinishOrganization = (elements: any) => {
        setTimeout(() => {
            for (const element of elements) {
                element.onclick = () => {
                    console.log("запрос на изменение и рефреш! tableLoadingFinishOrganization");
                }
            }
        }, 100);
    };

    const tableLoadingFinishClient = (elements: any) => {
        setTimeout(() => {
            for (const element of elements) {
                element.onclick = () => {
                    console.log("запрос на изменение и рефреш! tableLoadingFinishClient");
                }
            }
        }, 100);
    };

    const tableLoadingFinishDeveloper = (elements: any) => {
        setTimeout(() => {
            for (const element of elements) {
                element.onclick = () => {
                    console.log("запрос на изменение и рефреш! tableLoadingFinishDeveloper");
                }
            }
        }, 100);
    };

    return {
        buttonDisplay,
        tableLoadingFinishOrganization,
        tableLoadingFinishDeveloper,
        tableLoadingFinishClient
    }
}