
export async function renderSelect (elt) {

    elt.forEach(element => {

        const tagUl = document.querySelector(".ul-cards")

        let tagLi = document.createElement("li")
        let tagName = document.createElement("h2")
        let tagHours = document.createElement("p")
        let tagDescription = document.createElement("p")

        tagLi.classList.add("li-card")
        tagName.classList.add("h2-card")
        tagHours.classList.add("p-card")
        tagDescription.classList.add("setor-card")

        tagName.innerText = element.name
        tagHours.innerText = element.opening_hours
        tagDescription.innerText = element.sectors.description

        tagLi.append(tagName, tagHours, tagDescription)
        tagUl.append(tagLi)
        
    });
}

export async function renderSelectCompany (elt) {

    elt.forEach(element => {

        const tagSelect = document.querySelector(".select-company")

        let tagOption = document.createElement("option")

        tagOption.classList.add("options")

        tagOption.innerText = element.name
        tagOption.value = element.name

        tagSelect.append(tagOption)
        
    });
}

export async function renderSelectAdmin (elt) {

    elt.forEach(element => {

        const tagUl = document.querySelector(".ul-cards-admin")

        let tagLi = document.createElement("li")
        let tagName = document.createElement("h2")
        let tagCompany = document.createElement("p")
        let tagDescription = document.createElement("p")
        let tagForm = document.createElement("form")
        let tagEye = document.createElement("button")
        let tagEdit = document.createElement("button")
        let tagDelete = document.createElement("button")

        tagLi.classList.add("li-card-admin")
        tagName.classList.add("h2-card-admin")
        tagCompany.classList.add("p-card-admin")
        tagDescription.classList.add("setor-card-admin")
        tagForm.classList.add("form-buttons")
        tagEye.classList.add("buttons-eye")
        tagEdit.classList.add("buttons-edit")
        tagDelete.classList.add("buttons-delete")

        tagName.innerText = element.sectors.description
        tagCompany.innerText = element.name
        tagDescription.innerText = element.description

        tagForm.append(tagEye, tagEdit, tagDelete)
        tagLi.append(tagName, tagDescription, tagCompany, tagForm)
        tagUl.append(tagLi)
        
    });
}

export async function renderSelectUsers (elt) {

    console.log(elt)

    elt.forEach(element => {

        const tagUl = document.querySelector(".ul-cards-users")

        let tagLi = document.createElement("li")
        let tagName = document.createElement("h2")
        let tagCompany = document.createElement("p")
        let tagDescription = document.createElement("p")
        let tagForm = document.createElement("form")
        let tagEdit = document.createElement("button")
        let tagDelete = document.createElement("button")

        tagLi.classList.add("li-card-users")
        tagName.classList.add("h2-card-users")
        tagCompany.classList.add("p-card-users")
        tagDescription.classList.add("setor-card-users")
        tagForm.classList.add("form-buttons")
        tagEdit.classList.add("buttons-edit")
        tagDelete.classList.add("buttons-delete")

        tagName.innerText = element.sectors.description
        tagCompany.innerText = element.name
        tagDescription.innerText = element.description

        tagForm.append(tagEdit, tagDelete)
        tagLi.append(tagName, tagCompany, tagDescription, tagForm)
        tagUl.append(tagLi)
        
    });
}