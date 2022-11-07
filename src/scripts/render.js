import { editPost, deleteForm, editUser, deleteUser, acessForm } from "../../src/scripts/form.js"
import { openModal, openModal2 } from "./modal.js";
import { getDepartamentsAll, getUsers, getUsersOutOfWork, getDepartaments, dismiss } from "./request.js";
import { toast } from "./toast.js";

export async function renderSelectCompany() {

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

export async function renderSelectCompanyModal() {

    const department = await getDepartaments()

    department.forEach(element => {

        const tagSelect = document.querySelector(".select-company-modal")

        let tagOption = document.createElement("option")

        tagOption.classList.add("options-modal")

        tagOption.innerText = element.name
        tagOption.value = element.uuid

        tagSelect.append(tagOption)

    });
}

export async function renderSelectUserModal() {

    const users = await getUsersOutOfWork(localStorage.getItem("userToken"))

    users.forEach(element => {

        const tagSelect = document.querySelector(".select-usuario")

        let tagOption = document.createElement("option")

        tagOption.classList.add("options")

        tagOption.innerText = element.username
        tagOption.value = element.uuid

        tagSelect.append(tagOption)

    });
}

export async function renderSelectAdmin(itens) {

    itens.forEach(element => {

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

        tagEye.id = element.uuid

        tagEye.addEventListener("click", async (event) => {


            event.preventDefault()

            modal.showModal()


            const formAcess = acessForm(element.name, element.description, element.companies.name, element.uuid)
            openModal2(formAcess)

            const btnHire = document.querySelector(".btn-hire")

            btnHire.id = tagEye.id



            const users = await getUsers(localStorage.getItem("userToken"))

            const tagUl = document.querySelector(".ul-cards-users-2")

            users.forEach(elt => {

                if (elt.department_uuid === btnHire.id) {


                    let tagLi = document.createElement("li")
                    let tagDiv = document.createElement("div")
                    let tagName = document.createElement("h2")
                    let tagDescription = document.createElement("p")
                    let tagCompany = document.createElement("p")
                    let tagDemitir = document.createElement("button")

                    tagLi.classList = "li-card-demitir"
                    tagDiv.classList = "div-card-demitir"
                    tagName.classList = "name-card-demitir"
                    tagDescription.classList = "descrip-card-demitir"
                    tagCompany.classList = "company-card-demitir"
                    tagDemitir.classList = "button-card-demitir"

                    tagName.innerText = elt.username
                    tagCompany.innerText = element.companies.name
                    tagDescription.innerText = element.description

                    tagDemitir.innerText = "Desligar"

                    tagDemitir.id = elt.uuid

                    tagDemitir.addEventListener("click", () => {

                        dismiss(elt.uuid)

                        toast("Sucesso!", "Funcionário demitido.")
                    })

                    tagDiv.append(tagName, tagDescription, tagCompany, tagDemitir)
                    tagLi.append(tagDiv)
                    tagUl.append(tagLi)

                }


            });

        })

        buttonClose.addEventListener("click", () => {

            modal.close()
        })

        tagEdit.addEventListener("click", (event) => {

            event.preventDefault()

            const formEdit = editPost(element.description, element.uuid)
            openModal(formEdit)
        })

        tagDelete.addEventListener("click", (event) => {

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

export async function renderSelectUsers() {

    const users = await getUsers(localStorage.getItem("userToken"))


    users.forEach(async element => {

        if (element.is_admin === false) {

            
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
                tagDescription.innerText = element.professional_level
                
                tagName.id = element.department_uuid
                
                const department = await getDepartamentsAll(localStorage.getItem("userToken"))
    
                department.forEach(async elt => {

                if (tagName.id === elt.uuid) {
                    tagCompany.innerText = elt.companies.name
                }

                tagForm.append(tagEdit, tagDelete)
                tagLi.append(tagName, tagDescription, tagCompany, tagForm)
                tagUl.append(tagLi)

            });

        }


    })

}
