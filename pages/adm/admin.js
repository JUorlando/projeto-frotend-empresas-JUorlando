import { logout } from "../../src/scripts/eventLogout.js";
import { eventCreat, eventHire } from "../../src/scripts/events.js";
import { filterEventCompany } from "../../src/scripts/filter.js";
import { renderSelectAdmin, renderSelectCompany, renderSelectCompanyModal, renderSelectUserModal, renderSelectUsers } from "../../src/scripts/render.js";
import { getDepartamentsAll } from "../../src/scripts/request.js";

const department = await getDepartamentsAll(localStorage.getItem("userToken"))

filterEventCompany()

logout()

await eventHire()

await eventCreat()

await renderSelectAdmin(department)

await renderSelectCompany()

await renderSelectCompanyModal()

await renderSelectUsers()

await renderSelectUserModal()

const button = document.querySelector(".btn-open")
    
const modal = document.querySelector(".dialog-1")

const buttonClose = document.querySelector("#close-modal")


button.addEventListener("click", () => {
    modal.showModal()
})

buttonClose.addEventListener("click", () => {

    modal.close()
})

