import { EditDepartments,  deleteDepartments, editUsers, deleteUsers, newUserInfo} from "./request.js"
import { renderSelectAdmin, renderSelectUsers } from "./render.js"
import { renderUserInfo } from "./renderUser.js"
import { toast } from "./toast.js"

export const editPost = (description, id) => {
    console.log(description)
    const formulario = document.createElement("form")
    formulario.classList.add("formbase")

    formulario.innerHTML = `
        <section id="modal-container" class="modal-container">
        <div class="big-box">
        <div class="div-modal">
        <button id="close-modal" class="close-modal" type="button">X</button>
        </div>
        <h2 class="title-modal">Editar Departamento</h2>
        <div class="form-modal-inputs">
        <input class="title-description" placeholder="Digite seu titulo aqui..."  value="${description}" name="description">
        <button id="btn-editar" class="button-modal-2" type="submit">Editar o departamento</button>
        </div>
        </div>
        </section>
    `

    const btnEdit = formulario.querySelector("#btn-editar")

    btnEdit.addEventListener("click", () => {

        toast("Sucesso!", "Informações salvas com sucesso.")

        setTimeout(() => {

            window.location.assign("../../pages/adm/admin.html")

        }, 500)

    })


    const btnClose = formulario.querySelector("#close-modal")

    btnClose.addEventListener("click", function () {


        formulario.remove()
    })

    formulario.addEventListener("submit", async (event) => {

        event.preventDefault()

        const inputs = [...event.target]

        console.log(inputs)

        const post = {}

        console.log(post)

        inputs.forEach(({ name, value }) => {

            if (name) {
                post[name] = value
            }
        })

        await EditDepartments(post, id)
        await renderSelectAdmin()
    })

    return formulario
}


export const deleteForm = (name, id) => {

    const formulario = document.createElement("form")
    formulario.classList.add("formbase")

    formulario.insertAdjacentHTML("beforeend", `
    <section class="modal-container-delete show-modal">
    <div class="big-box-delete">
    <div class="div-modal-delete">
    <button class="close-modal-delete">X</button>
    </div>
    <div class="div-text-modal-delete">
    <h3 class="title-delete">Realmente deseja deletar o Departamento ${name} e demitir seus funcionários?</h3>
    </div>
    <div class="form-buttons-modal-delete">
    <button id="btn-excluir" class="button-modal-2-delete" type="submit">Confirmar</button>
    </div>
    </div>
    </section>
    `)

    const btnDelete = formulario.querySelector("#btn-excluir")

    btnDelete.addEventListener("click", async() => {

        toast("Sucesso!", "Informações salvas com sucesso.")

        setTimeout(() => {

            window.location.assign("../../pages/adm/admin.html")

        }, 500)

    })


    const btnCloseDelete = formulario.querySelector(".close-modal-delete")

    btnCloseDelete.addEventListener("click", function () {

        formulario.remove()

    })

    formulario.addEventListener("submit", async (event) => {
        event.preventDefault()

        await deleteDepartments(id)
        await renderSelectAdmin()

    })

    return formulario
}

export const acessForm = ( name, description, company, id ) => {

    const formulario = document.createElement("form")
    const body = document.querySelector(".app")

    body.append(formulario)

    formulario.classList.add("formbase")

    formulario.innerHTML = `
        <h2 id="h2-acess" >${name}</h2>
        <p id="p-acess">${description}</p>
        <p>${company}</p>
    `
    const buttonClose = document.querySelector(".close-modal-2")

    buttonClose.addEventListener("click", () => {

        formulario.remove()

        window.location.assign("../../pages/adm/admin.html")
    })

    formulario.addEventListener("submit", async (event) => {
        event.preventDefault()

        const inputs = [...event.target]

        const post = {}

        inputs.forEach(({ name, value }) => {

            if (name) {
                post[name] = value
            }
        })

        await EditDepartments(post, id)
        await renderSelectAdmin()
    })

    return formulario
}

export const editUser = (modalidade, nivel, id) => {

    const formulario = document.createElement("form")
    formulario.classList.add("formbase")

    formulario.innerHTML = `
        <section id="modal-container" class="modal-container">
        <div class="big-box">
        <div class="div-modal">
        <h2 class="title-modal">Editar Departamento</h2>
        <button id="close-modal" class="close-modal" type="button">X</button>
        </div>
        <div class="form-modal-inputs">
        <input class="title" placeholder="Digite seu titulo aqui..."  value="${modalidade}" name="kind_of_work">
        <input class="title" placeholder="Digite seu titulo aqui..."  value="${nivel}" name="professional_level">
        <button id="btn-editar" class="button-modal-2" type="submit">Editar</button>
        </div>
        </div>
        </section>
    `

    const btnEdit = formulario.querySelector("#btn-editar")

    btnEdit.addEventListener("click", () => {

        toast("Sucesso!", "Informações salvas com sucesso.")

        setTimeout(() => {

            window.location.assign("../../pages/adm/admin.html")

        }, 500)

    })


    const btnClose = formulario.querySelector("#close-modal")

    btnClose.addEventListener("click", function () {


        formulario.remove()
    })

    formulario.addEventListener("submit", async (event) => {

        event.preventDefault()

        const inputs = [...event.target]

        console.log(inputs)

        const post = {}

        console.log(post)

        inputs.forEach(({ name, value }) => {

            if (name) {
                post[name] = value
            }
        })

        await editUsers(post, id)
        await renderSelectUsers()
    })

    return formulario
}


export const deleteUser = (name, id) => {

    const formulario = document.createElement("form")
    formulario.classList.add("formbase")

    formulario.insertAdjacentHTML("beforeend", `
    <section class="modal-container-delete show-modal">
    <div class="big-box-delete">
    <div class="div-modal-delete">
    <button class="close-modal-delete">X</button>
    </div>
    <div class="div-text-modal-delete">
    <h3 class="title-delete-2">Realmente deseja remover o usuário ${name}?</h3>
    </div>
    <div class="form-buttons-modal-delete">
    <button id="btn-excluir" class="button-modal-2-delete" type="submit">Confirmar</button>
    </div>
    </div>
    </section>
    `)

    const btnDelete = formulario.querySelector("#btn-excluir")

    btnDelete.addEventListener("click", async() => {

        toast("Sucesso!", "Informações salvas com sucesso.")

        setTimeout(() => {

            window.location.assign("../../pages/adm/admin.html")

        }, 500)

    })


    const btnCloseDelete = formulario.querySelector(".close-modal-delete")

    btnCloseDelete.addEventListener("click", function () {

        formulario.remove()

    })

    formulario.addEventListener("submit", async (event) => {
        event.preventDefault()

        await deleteUsers(id)
        await renderSelectUsers()

    })

    return formulario
}

export const formEditUser = (username, email, password) => {

    const formulario = document.createElement("form")
    formulario.classList.add("formbase")

    formulario.innerHTML = `
        <section id="modal-container" class="modal-container">
        <div class="big-box">
        <div class="div-modal">
        <h2 class="title-modal">Editar Perfil</h2>
        <button id="close-modal" class="close-modal" type="button">X</button>
        </div>
        <div class="form-modal-inputs">
        <input class="title" placeholder="Seu nome"  value="${username}" name="username">
        <input class="title" type="password" placeholder="Sua senha"  value="${password}" name="password">
        <input class="title" placeholder="Seu e-mail"  value="${email}" name="email">
        <button id="btn-editar" class="button-modal-2" type="submit">Editar perfil</button>
        </div>
        </div>
        </section>
    `

    const btnEdit = formulario.querySelector("#btn-editar")

    btnEdit.addEventListener("click", () => {

        toast("Sucesso!", "Informações salvas com sucesso.")

        setTimeout(() => {

            window.location.assign("../../pages/users/users.html")
            

        }, 500)

    })


    const btnClose = formulario.querySelector("#close-modal")

    btnClose.addEventListener("click", function () {


        formulario.remove()
    })

    formulario.addEventListener("submit", async (event) => {

        event.preventDefault()

        const inputs = [...event.target]

        const post = {}

        console.log(post)

        inputs.forEach(({ name, value }) => {

            if (name) {
                post[name] = value
            }
        })

        await newUserInfo(post)
        await renderUserInfo()
    })

    return formulario
}