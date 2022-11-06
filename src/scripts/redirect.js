
export function buttonHome () {

    const home = document.querySelectorAll(".btn-home")
    
    home.forEach(button => {
    
        button.addEventListener("click", () => {
    
            window.location.assign("../../index.html")
            console.log("click")
        })
    })
}

export function buttonLogin () {

    const login = document.querySelectorAll(".btn-login")
    
    login.forEach(button => {
    
        button.addEventListener("click", () => {
    
            window.location.assign("../../pages/login/login.html")
        })
    })
}

export function buttonCadastro () {

    const cadastro = document.querySelectorAll(".btn-cadastro")
    
    cadastro.forEach(button => {
    
        button.addEventListener("click", () => {
    
            window.location.assign("../../pages/cadastro/cadastro.html")
        })
    })
}