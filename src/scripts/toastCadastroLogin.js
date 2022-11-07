export function toastEsp (title) {

    const body = document.querySelector(".container")

    const container = document.createElement("div")
    container.classList.add("toast-container")

    const image = document.createElement("img")

    if(title == "Sucesso!"){

        container.classList.add("sucesstoast")

        image.src = "../../src/img/toastok.png"

    }  else {

        container.classList.add("sucesstoast")

        image.src = "../../src/img/toasterror.png"

    }

    const textContainer = document.createElement("div")


    textContainer.append(image)

    container.append(textContainer)

    body.appendChild(container)

}