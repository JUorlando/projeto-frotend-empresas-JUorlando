import { renderSelect } from "./render.js";
import { getDepartaments } from "./request.js";

export async function filterEvent () {

    const mainFilter = document.querySelector(".ul-cards")
    const filterSelect = document.querySelector(".select")


    let getAll = await getDepartaments()
    
    filterSelect.addEventListener("change", (event) => {
        
        console.log(filterSelect.value)

            event.preventDefault()
    
            mainFilter.innerHTML = ''
            const filter = filterSelect.value
    
            console.log(filter)

    
            if(filter === "Selecionar Departamento") {
    
                renderSelect(getAll)
    
            } else {

                
                const filtredDescription = getAll.filter(element => element.sectors.description.includes(filter))

                console.log(filtredDescription)
                
                renderSelect(filtredDescription)

            }

        }) 
}