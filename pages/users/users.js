import { renderUserInfo } from "../../src/scripts/renderUser.js";

await renderUserInfo()

const buttonLogout = document.querySelector(".btn-logout-user")
 
buttonLogout.addEventListener("click", (event) => {

    event.preventDefault()

    localStorage.removeItem("userToken")
    localStorage.removeItem("typeUser")



    window.location.assign("../../index.html")
})
