import { eventCadastro } from "../../src/scripts/events.js";
import { getCadastro } from "../../src/scripts/request.js";

eventCadastro()

const login = document.querySelector(".btn-login-cadastro")

login.addEventListener("click", () => {

    window.location.assign("../../pages/login/login.html")
})

const home = document.querySelectorAll(".btn-home-cadastro")

home.addEventListener("click", () => {

    window.location.assign("../../index.html")
})