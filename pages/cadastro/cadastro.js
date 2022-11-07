import { eventCadastro } from "../../src/scripts/eventCadastro.js"

eventCadastro()

const home = document.querySelector(".btn-home-cadastro")

home.addEventListener("click", () => {

    window.location.assign("../../index.html")
})

const i = document.querySelector(".btn-retornar")

i.addEventListener("click", () => {

    window.location.assign("../../index.html")
})