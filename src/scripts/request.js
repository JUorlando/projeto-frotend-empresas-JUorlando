import { renderSelectUsers } from "./render.js"
import { toast } from "./toast.js"

const baseUrl = "http://localhost:6278/"

export async function getDepartaments() {

    try {
        const request = await fetch(baseUrl + "companies", {
            method: "GET",
            header: {
                "Content-type": "application/json",
            }
        })

        if (request.ok) {

            const response = await request.json()

            localStorage.setItem("dataCompany", JSON.stringify(response))

            return response

        }
    }
    catch (err) {
        console.log(err)
    }
}

export async function getCadastro(body) {

    try {
        const request = await fetch(baseUrl + "auth" + "/register", {

            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(body)
        })

        if (request.ok) {

            const response = await request.json()

            toast("Sucesso!")

            setTimeout(() => {

                window.location.replace("./login/index.html")

                return response

            }, 4000)
        } else {

            toast("Erro!")
        }

    }
    catch (err) {

        console.log(err)

    }
}

export async function getLogin(body) {

    console.log(body)

    try {
        const request = await fetch(baseUrl + "auth" + "/login", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(body)
        })

        if (request.ok) {

            const response = await request.json()

            console.log(response.token)

            localStorage.setItem("userToken", response.token)

            getAdmAuth(response.token)

            getUsers(response.token)

            toast("Sucesso!")

            setTimeout(() => {

            }, 4000)
        } else {

            toast("Erro!")
        }
    }
    catch (err) {

        console.log(err)

    }
}

export async function getAdmAuth(token) {

    await fetch(baseUrl + "auth/" + "validate_user", {
        method: "GET",
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
    })
        .then(res => {
            if (res.ok) {
                return res.json()
            } else {
                return toast("Erro!")
            }
        })
        .then(res => {
            console.log(res)
            if(res.is_admin == true){
                localStorage.removeItem("typeUser", "users")
                localStorage.setItem("typeUser", "adm")
                // window.location.assign("/pages/adm/admin.html")
            } else {
                localStorage.removeItem("typeUser", "adm")
                localStorage.setItem("typeUser", "users")
                // window.location.assign("/pages/users/users.html")
            }
        })

}

export async function getUsers(token) {

    console.log(token)

    try {
        const request = await fetch(baseUrl + "users", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authentication": `Bearer ${token}`,
            }
        })

        console.log(request)

        if (request.ok) {
            console.log(request)
            const response = await request.json()

            console.log(response)

            localStorage.setItem("UsersData", JSON.stringify(response))

            return response

        }
    }
    catch (err) {
        console.log(err)
    }
}
