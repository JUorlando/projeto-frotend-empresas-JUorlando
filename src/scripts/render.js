import { editPost, deleteForm, editUser, deleteUser, acessForm } from "../../src/scripts/form.js"
import { openModal, openModal2 } from "./modal.js";
import { getDepartaments, getDepartamentsAll, getUsers, getUsersOutOfWork } from "./request.js";

export async function renderSelect () {

    const department = await getDepartaments()

    console.log(department)

    department.forEach(element => {

        const tagUl = document.querySelector(".ul-cards")

        let tagLi = document.createElement("li")
        let tagName = document.createElement("h2")
        let tagHours = document.createElement("p")
        let tagDescription = document.createElement("p")

        tagLi.classList.add("li-card")
        tagName.classList.add("h2-card")
        tagHours.classList.add("p-card")
        tagDescription.classList.add("setor-card")

        tagName.innerText = element.name
        tagHours.innerText = element.opening_hours
        tagDescription.innerText = element.sectors.description

        tagLi.append(tagName, tagHours, tagDescription)
        tagUl.append(tagLi)
        
    });
}

export async function renderSelectCompany () {

    const department = await getDepartamentsAll(localStorage.getItem("userToken"))

    department.forEach(element => {

        const tagSelect = document.querySelector(".select-company")

        let tagOption = document.createElement("option")

        tagOption.classList.add("options")

        tagOption.innerText = element.companies.name
        tagOption.value = element.companies.name

        tagSelect.append(tagOption)
        
    });
}

await renderSelectCompany()

export async function renderSelectCompanyModal () {

    const department = await getDepartaments(localStorage.getItem("userToken"))

    department.forEach(element => {

        const tagSelect = document.querySelector(".select-company-modal")

        let tagOption = document.createElement("option")

        tagOption.classList.add("options-modal")

        tagOption.innerText = element.name
        tagOption.value = element.uuid

        tagSelect.append(tagOption)
        
    });
}

await renderSelectCompanyModal()

export async function renderSelectUserModal () {

    const users = await getUsersOutOfWork(localStorage.getItem("userToken"))

    users.forEach(element => {

        const tagSelect = document.querySelector(".select-usuario")

        let tagOption = document.createElement("option")

        tagOption.classList.add("options")

        // const buttonHire = document.querySelector(".btn-hire")

        // buttonHire.addEventListener("click", (event) => {
    
        //     event.preventDefault()

        //     const contratando = formHire(element.username, element.professional_level, element.name, element.department_uuid, element.uuid)

        //     openModal3(contratando) 
            
        // })

        tagOption.innerText = element.username
        tagOption.value = element.username

        tagSelect.append(tagOption)
        
    });
}

renderSelectUserModal()

export async function renderSelectAdmin () {

    const department = await getDepartamentsAll(localStorage.getItem("userToken"))

    department.forEach(element => {

        const tagUl = document.querySelector(".ul-cards-admin")

        const modal = document.querySelector(".dialog-2")

        const buttonClose = document.querySelector(".close-modal-2")

        let tagLi = document.createElement("li")
        let tagName = document.createElement("h2")
        let tagCompany = document.createElement("p")
        let tagDescription = document.createElement("p")
        let tagForm = document.createElement("form")
        let tagEye = document.createElement("button")
        let tagEdit = document.createElement("button")
        let tagDelete = document.createElement("button")

        tagLi.classList.add("li-card-admin")
        tagName.classList.add("h2-card-admin")
        tagCompany.classList.add("p-card-admin")
        tagDescription.classList.add("setor-card-admin")
        tagForm.classList.add("form-buttons")
        tagEye.classList.add("buttons-eye")
        tagEdit.classList.add("buttons-edit")
        tagDelete.classList.add("buttons-delete")

        tagEye.addEventListener("click", (event) => {

            event.preventDefault()

            modal.showModal()

            const formAcess = acessForm(element.name, element.description, element.companies.name, element.uuid)
            openModal2(formAcess)
        })

        buttonClose.addEventListener("click", () => {

            modal.close()
        })

        tagEdit.addEventListener("click", (event) => {

            event.preventDefault()

            const formEdit = editPost(element.description, element.uuid)
            openModal(formEdit)
        })

        tagDelete.addEventListener("click",(event) => {

            event.preventDefault()

            const formDelete = deleteForm(element.name, element.uuid)
            openModal(formDelete)
        })

        tagName.innerText = element.name
        tagCompany.innerText = element.companies.name
        tagDescription.innerText = element.description

        tagForm.append(tagEye, tagEdit, tagDelete)
        tagLi.append(tagName, tagDescription, tagCompany, tagForm)
        tagUl.append(tagLi)
        
    });
}

await renderSelectAdmin()

export async function renderSelectUsers () {

    const users = await getUsers(localStorage.getItem("userToken"))

    users.forEach(element => {

        const tagUl = document.querySelector(".ul-cards-users")

        let tagLi = document.createElement("li")
        let tagName = document.createElement("h2")
        let tagDescription = document.createElement("p")
        let tagCompany = document.createElement("p")
        let tagForm = document.createElement("form")
        let tagEdit = document.createElement("button")
        let tagDelete = document.createElement("button")

        tagLi.classList.add("li-card-users")
        tagName.classList.add("h2-card-users")
        tagCompany.classList.add("p-card-users")
        tagDescription.classList.add("setor-card-users")
        tagForm.classList.add("form-buttons")
        tagEdit.classList.add("buttons-edit")
        tagDelete.classList.add("buttons-delete")

        tagEdit.addEventListener("click", (event) => {

            event.preventDefault()

            const editando = editUser(element.kind_of_work, element.professional_level, element.uuid)
            openModal(editando)
        })

        tagDelete.addEventListener("click", (event) => {

            event.preventDefault()

            const deleteForm = deleteUser(element.username, element.uuid)
            openModal(deleteForm)
        })

        tagEdit.type = "button"

        tagName.innerText = element.username
        tagCompany.innerText = element.name
        tagDescription.innerText = element.professional_level

        tagForm.append(tagEdit, tagDelete)
        tagLi.append(tagName, tagDescription, tagCompany, tagForm)
        tagUl.append(tagLi)
        
    });
}

await renderSelectUsers()

export async function renderHire () {

    const users = await getUsersOutOfWork(localStorage.getItem("userToken"))

    users.forEach(element => {
        
    });

    const department = await getDepartamentsAll(localStorage.getItem("userToken"))

    department.forEach(elt => {
        
    });


}

renderHire()