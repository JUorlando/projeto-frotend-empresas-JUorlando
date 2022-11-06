import { renderSelectAdmin } from "./render.js";
import { getDepartaments, getDepartamentsAll } from "./request.js";
import { renderSelect } from "./renderHome.js";

export async function filterEvent() {

    const mainFilter = document.querySelector(".ul-cards")
    const filterSelect = document.querySelector(".select")


    let getAll = await getDepartaments()

    filterSelect.addEventListener("change", (event) => {

        event.preventDefault()

        mainFilter.innerHTML = ''
        const filter = filterSelect.value


        if (filter === "Selecionar Departamento") {

            renderSelect()

        } else {


            const filtredDescription = getAll.filter(element => element.sectors.description.includes(filter))

            renderSelect(filtredDescription)

        }

    })
}

export async function filterEventCompany() {

    const mainFilter = document.querySelector(".ul-cards-admin")
    const filterSelect = document.querySelector(".select-company")


    let getAll = await getDepartamentsAll()

    filterSelect.addEventListener("change", (event) => {

        event.preventDefault()

        mainFilter.innerHTML = ''
        const filter = filterSelect.value


        if (filter === "Selecionar Departamento") {

            renderSelectAdmin(getAll)

        } else {


            const filtredDescription = getAll.filter(element => element.companies.name.includes(filter))

            renderSelectAdmin(filtredDescription)

        }

    })
}