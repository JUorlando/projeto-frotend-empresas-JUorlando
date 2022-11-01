import { toast } from "./toast.js"

const baseUrl = "http://localhost:6278/"

export async function getDepartaments () {

    try {
        const request = await fetch(baseUrl + "companies", {
            method: "GET",
            header:{
                "Content-type": "application/json",
            }
        })

        if(request.ok){

            const response = await request.json()
    
            localStorage.setItem("dataCompany", JSON.stringify(response))
    
            return response

        }
    }
    catch (err){
        console.log(err)
    }
}

export async function getCadastro (body) {

    try{
        const request = await fetch(baseUrl + "auth" + "/register", {
            method: "POST",
            headers:{
                "Content-type": "application/json",
            },
            body: JSON.stringify(body)
        })

        if(request.ok){

            const response = await request.json()

            console.log(response)

            localStorage.setItem("userDados", JSON.stringify(response))
    
            toast("Sucesso!")
    
            setTimeout(() => {
    
                // window.location.replace("./login/index.html")
            }, 4000)
        } else {

            toast("Erro!")
        }
    }
    catch (err){

        console.log(err)
    
    }
}

export async function getLogin (body) {

    console.log(body)

    try{
        const request = await fetch(baseUrl + "auth" + "/login", {
            method: "POST",
            headers:{
                "Content-type": "application/json",
            },
            body: JSON.stringify(body)
        })

        if(request.ok){

            const response = await request.json()

            localStorage.setItem("userId", JSON.stringify(response))
    
            toast("Sucesso!")
    
            setTimeout(() => {
    
                // window.location.replace("./login/index.html")
            }, 4000)
        } else {

            toast("Erro!")
        }
    }
    catch (err){

        console.log(err)
    
    }
}