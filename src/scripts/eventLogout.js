
export function logout () {

    const buttonLogout = document.querySelector(".btn-logout")
 
    buttonLogout.addEventListener("click", (event) => {

        event.preventDefault()
    
        localStorage.removeItem("UsersData")
        localStorage.removeItem("userToken")
        localStorage.removeItem("typeUser")
        localStorage.removeItem("dataCompany")
        localStorage.removeItem("AllDepartaments")


        window.location.assign("../../index.html")
    })

}

logout()

const btnCriar = document.querySelector("#btn-criar")

btnCriar.addEventListener("click", () => {

    setTimeout(() => {

        window.location.assign("../../pages/adm/admin.html")

    }, 500)

})