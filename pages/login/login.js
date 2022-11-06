import { eventLogin } from "../../src/scripts/events.js";
import { getAdmAuth } from "../../src/scripts/request.js";

eventLogin()
await getAdmAuth()

const home = document.querySelector(".btn-home-login")

home.addEventListener("click", () => {

    window.location.assign("../../index.html")
})

const cadastro = document.querySelectorAll(".btn-cadastro-login")

cadastro.addEventListener("click", () => {

    window.location.assign("../../pages/cadastro/cadastro.html")
})
