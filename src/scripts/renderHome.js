import { getDepartaments } from "./request.js";
import { filterEvent } from "./filter.js";

export async function renderSelect (elt) {

    console.log(elt)


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