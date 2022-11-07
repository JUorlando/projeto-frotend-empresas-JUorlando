import { eventLogin } from "../../src/scripts/eventsLogin.js";

eventLogin()

const home = document.querySelector(".btn-home-login")

home.addEventListener("click", () => {

    window.location.assign("../../index.html")
})

const cadastre = document.querySelector(".btn-cadastre")

cadastre.addEventListener("click", () => {

    window.location.assign("../../pages/cadastro/cadastro.html")
})