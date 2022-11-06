import { formEditUser } from "./form.js";
import { openModal4 } from "./modal.js";
import { getCoWorks, getUserInfo } from "./request.js";

export async function renderUserInfo() {

    const users = await getUserInfo(localStorage.getItem("userToken"))

    const tagSection = document.querySelector(".section-info")

    let tagDiv = document.createElement("div")
    let tagName = document.createElement("h2")
    let tagEmail = document.createElement("p")
    let tagNivel = document.createElement("p")
    let tagTipo = document.createElement("p")
    let tagForm = document.createElement("form")
    let tagEdit = document.createElement("button")

    tagDiv.classList.add("div-info")
    tagName.classList.add("name-info")
    tagEmail.classList.add("email-info")
    tagNivel.classList.add("nivel-info")
    tagTipo.classList.add("tipo-info")
    tagForm.classList.add("form-info")
    tagEdit.classList.add("buttons-edit")


    tagEdit.type = "button"

    tagEdit.addEventListener("click", async (event) => {

        const newUsers = await getUserInfo(localStorage.getItem("userToken"))

        
        
        event.preventDefault()
        
        const userInfoEdit = formEditUser(newUsers.username, newUsers.email)
        openModal4(userInfoEdit)

    })

    tagName.innerText = users.username
    tagEmail.innerText = users.email
    tagNivel.innerText = users.professional_level
    tagTipo.innerText = users.kind_of_work

    tagForm.append(tagEdit)
    tagDiv.append(tagName, tagEmail, tagNivel, tagTipo, tagForm)
    tagSection.append(tagDiv)

}

export async function renderCoworks () {

    const cowork = await getCoWorks(localStorage.getItem("userToken"))

    console.log(cowork)

    cowork.forEach(element => {

        const users = element.users

        const tagSection = document.querySelector(".section-cowork")
        
        let tagDiv = document.createElement("div")
        let tagCompanyName = document.createElement("h2")
        let tagDepartmentName = document.createElement("h2")
        
        tagDiv.classList = "div-cowork"
        tagCompanyName.classList = "company-cowork"
        tagDepartmentName.classList = "department-cowork"
        
        tagCompanyName.innerText = element.name
        tagDepartmentName.innerText = element.description
        
        users.forEach(elt=> {
            
            
            const tagUl = document.querySelector(".ul-cowork")
    
            let tagLi  = document.createElement("li")
            let tagName = document.createElement("p")
            let tagPosition = document.createElement("p")
    
            tagLi.classList = "li-cowork"
            tagName.classList = "name-cowork"
            tagPosition.classList = "position-cowork"
    
            tagName.innerText = elt.username
            tagPosition.innerText = elt.professional_level
    
    
            tagUl.append(tagLi, tagName, tagPosition)
            tagSection.append(tagDiv, tagCompanyName, tagDepartmentName, tagUl)
        });

        
    });
}

await renderCoworks()

