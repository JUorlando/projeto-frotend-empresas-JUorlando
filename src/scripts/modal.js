export function openModal (children) {
    const body = document.querySelector(".app")

    body.appendChild(children)
}

export function openModal2 (children) {
    const body = document.querySelector(".form-modal-inputs-acess")

    body.appendChild(children)
}

export function openModal3 (children) {
    const body = document.querySelector(".ul-cards-users-2")

    body.appendChild(children)
}

export function modalCreat () {
    
    const button = document.querySelector(".btn-open")
    
    const modal = document.querySelector(".dialog-1")

    const buttonClose = document.querySelector(".close-modal")

    button.addEventListener("click", () => {
        modal.showModal()
    })

    buttonClose.addEventListener("click", () => {

        modal.close()
    })

}

modalCreat()