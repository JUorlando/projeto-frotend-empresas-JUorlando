export function toast (title, message) {

    const body = document.querySelector(".container")

    const container = document.createElement("div")
    container.classList.add("toast-container")

    if(title == "Sucesso!"){
        container.classList.add("sucesstoast")
    } 

    const textContainer = document.createElement("div")

    const h3 = document.createElement("h3")
    h3.innerText = title

    const span = document.createElement("span")
    span.innerText = message

    textContainer.append(h3, span)

    container.append(textContainer)

    body.appendChild(container)

}