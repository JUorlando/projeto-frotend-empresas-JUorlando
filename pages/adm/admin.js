import { logout } from "../../src/scripts/eventLogout.js";
import { eventCreat } from "../../src/scripts/events.js";
import { filterEventCompany } from "../../src/scripts/filter.js";
import { renderSelectAdmin, renderSelectCompany, renderSelectCompanyModal, renderSelectUserModal, renderSelectUsers } from "../../src/scripts/render.js";

filterEventCompany()

logout()

await eventCreat()

await renderSelectAdmin()

await renderSelectCompany()

await renderSelectCompanyModal()

await renderSelectUsers()

await renderSelectUserModal()

const button = document.querySelector(".btn-open")
    
const modal = document.querySelector(".dialog-1")

const buttonClose = document.querySelector(".close-modal")

button.addEventListener("click", () => {
    modal.showModal()
})

buttonClose.addEventListener("click", () => {

    modal.close()
})
