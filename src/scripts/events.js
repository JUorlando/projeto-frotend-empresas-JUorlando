import { creatDepartment, hire } from "./request.js"

export async function eventCreat () {

    const local = document.querySelector(".form-modal-inputs")

    local.addEventListener("submit", async (event) => {

        event.preventDefault()

        const body = {

            name:event.target.children[1].value,
            description:event.target.children[2].value,
            company_uuid:event.target.children[3].value
  
        }
        await creatDepartment(body)

    })
}

export async function eventHire () {

    const local = document.querySelector(".form-hire")

    local.addEventListener("submit", async (event) => {

        event.preventDefault()

        console.log(event.target[1].id)

        const body = {

            user_uuid:event.target[0].value,
            department_uuid:event.target[1].id
 
  
        }
        await hire(body)

    })
}

eventHire()
