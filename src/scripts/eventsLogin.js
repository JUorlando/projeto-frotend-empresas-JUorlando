import { getLogin } from "./request.js"

export function eventLogin () {

    const local = document.querySelector(".form-inputs-login")

    local.addEventListener("submit", async (event) => {

        event.preventDefault()

        const body = {

            email:event.target.children[0].value,
            password:event.target.children[1].value,
  
        }

        await getLogin(body)

    })
}

const cadastro = document.querySelector(".btn-cadastro-login")

cadastro.addEventListener("click", () => {

    window.location.assign("../../pages/cadastro/cadastro.html")
})