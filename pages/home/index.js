import { filterEvent } from "../../src/scripts/filter.js";
import { renderSelect } from "../../src/scripts/renderHome.js"
import { getDepartaments } from "../../src/scripts/request.js";

const department = await getDepartaments()

await renderSelect(department)

await filterEvent()

const login = document.querySelector(".btn-login-index")

login.addEventListener("click", () => {

    window.location.assign("../../pages/login/login.html")
})

const cadastro = document.querySelector(".btn-cadastro-index")

cadastro.addEventListener("click", () => {

    window.location.assign("../../pages/cadastro/cadastro.html")
})