import { getCadastro, getLogin } from "./request.js"

export function eventCadastro () {

    const local = document.querySelector(".form-inputs")

    local.addEventListener("submit", async (event) => {

        event.preventDefault()

        const body = {
            username: event.target.children[0].value,
            password:event.target.children[2].value,
            email:event.target.children[1].value,
            professional_level: event.target.children[3].value,
        }

        await getCadastro(body)

    })
}

export function eventLogin () {

    const local = document.querySelector(".form-inputs-login")

    console.log(local)

    local.addEventListener("submit", async (event) => {

        event.preventDefault()

        const body = {

            email:event.target.children[0].value,
            password:event.target.children[1].value,
  
        }

        await getLogin(body)

    })
}