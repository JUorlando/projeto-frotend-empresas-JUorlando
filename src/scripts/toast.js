export function toast (title, message) {

    const body = document.querySelector(".container")

    const container = document.createElement("div")
    container.classList.add("toast-container")

    const icon = document.createElement("img")
    icon.alt = `Mensagem de ${title}`

    if(title == "Sucesso!"){
        container.classList.add("sucesstoast")
        icon.src = "../../src/img/sucess.png"
    } 

    const textContainer = document.createElement("div")

    const h3 = document.createElement("h3")
    h3.innerText = title

    const span = document.createElement("span")
    span.innerText = message

    textContainer.append(h3, span)

    container.append(icon, textContainer)

    body.appendChild(container)

}