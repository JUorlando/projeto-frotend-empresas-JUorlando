import { renderSelectAdmin } from "./render.js"
import { toast } from "./toast.js"
import { toastEsp } from "./toastCadastroLogin.js"

const baseUrl = "http://localhost:6278/"

export async function getDepartaments() {

    try {
        const request = await fetch("http://localhost:6278/companies", {
            method: "GET",
            header: {
                "Content-type": "application/json",
            }
        })

        if (request.ok) {

            const response = await request.json()

            return response

        }
    }
    catch (err) {
        console.log(err)
    }
}

export async function getCadastro(body) {

    try {
        const request = await fetch("http://localhost:6278/auth/register", {

            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(body)
        })

        if (request.ok) {

            const response = await request.json()

            toastEsp("Sucesso!")

            setTimeout(() => {

                window.location.replace("../../pages/login/login.html")

                return response

            }, 4000)
        } else {

            toastEsp("Erro!")
        }

    }
    catch (err) {

        console.log(err)

    }
}

export async function getLogin(body) {

    console.log(body)

    try {
        const request = await fetch("http://localhost:6278/auth/login", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(body)
        })

        if (request.ok) {

            const response = await request.json()

            localStorage.setItem("userToken", response.token)

            toast("Sucesso!", "Login realizado com sucesso!")

            getAdmAuth(response.token)

        } else {

            toastEsp("Erro!")
        }
    }
    catch (err) {

        console.log(err)

    }
}

export async function getAdmAuth(token) {

    await fetch("http://localhost:6278/auth/validate_user", {
        method: "GET",
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
    })
        .then(res => {
            if (res.ok) {
                return res.json()
            }
        })
        .then(res => {
            if (res.is_admin == true) {
                localStorage.removeItem("typeUser", "users")
                localStorage.setItem("typeUser", "adm")
                setTimeout(() => {

                    window.location.assign("/pages/adm/admin.html")

                }, 4000)
            } else {
                localStorage.removeItem("typeUser", "adm")
                localStorage.setItem("typeUser", "users")
                setTimeout(() => {
                    
                    window.location.assign("/pages/users/users.html")
                }, 4000)
            }
        })

}

export async function getUsers() {

    try {

        const request = await fetch("http://localhost:6278/users", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("userToken")}`,
            },

        })

        if (request.ok) {

            const response = await request.json()

            return response

        }
    }
    catch (err) {
        console.log(err)
    }

}

export async function getUsersOutOfWork() {

    try {

        const request = await fetch("http://localhost:6278/admin/out_of_work", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("userToken")}`,
            },

        })

        if (request.ok) {

            const response = await request.json()

            return response

        }
    }
    catch (err) {
        console.log(err)
    }

}

export async function getDepartamentsAll() {


    try {

        const request = await fetch("http://localhost:6278/departments", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("userToken")}`,
            },
        })

        if (request.ok) {

            const response = await request.json()

            return response

        }
    }
    catch (err) {
        console.log(err)
    }

}

export async function EditDepartments(body, id) {

    await fetch(`${baseUrl}departments/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("userToken")}`,
        },
        body: JSON.stringify(body)
    })
        .then(res => res.json())
        .then(res => renderSelectAdmin(res))
}


export async function deleteDepartments(id) {

    console.log(id)

    await fetch(`${baseUrl}departments/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("userToken")}`,
        },
    })
        .then(res => res.json())
        .then(res => console.log(res))
}

export async function editUsers(body, id) {

    await fetch(`${baseUrl}admin/update_user/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("userToken")}`,
        },
        body: JSON.stringify(body)
    })
        .then(res => res.json())
        .then(res => console.log(res))

}


export async function deleteUsers(id) {

    await fetch(`${baseUrl}admin/delete_user/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("userToken")}`,
        },
    })
        .then(res => res.json())
        .then(res => console.log(res))
}

export async function creatDepartment(body) {

    try {

        const request = await fetch(`${baseUrl}departments`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("userToken")}`,
            },
            body: JSON.stringify(body)
        })

        if (request.ok) {

            const response = await request.json()

            return response

        }
    }
    catch (err) {
        console.log(err)
    }

}

export async function hire(body) {

    console.log(body)

    try {

        const request = await fetch("http://localhost:6278/departments/hire/", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("userToken")}`,
            },
            body: JSON.stringify(body)
        })

        if (request.ok) {

            const response = await request.json()

            toast("Sucesso!", "Funcionário Contratado.")

            setTimeout(() => {

                window.location.assign("../../pages/adm/admin.html")

            }, 1000)

        } else {

            toast("Erro!", "Aconteceu algo inesperado.")
        }
    }
    catch (err) {

        console.log(err)

    }
}

export async function getUserInfo() {

    try {

        const request = await fetch("http://localhost:6278/users/profile", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("userToken")}`,
            },

        })

        if (request.ok) {

            const response = await request.json()

            return response

        }
    }
    catch (err) {
        console.log(err)
    }

}

export async function newUserInfo(body) {

    try {

        const request = await fetch("http://localhost:6278/users", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("userToken")}`,
            },
            body: JSON.stringify(body)
        })

        if (request.ok) {

            const response = await request.json()

            return response

        }
    }
    catch (err) {
        console.log(err)
    }

}

export async function dismiss(id) {

    try {

        const request = await fetch(`http://localhost:6278/departments/dismiss/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("userToken")}`,
            },
        })

        if (request.ok) {

            const response = await request.json()

            return response

        }
    }
    catch (err) {
        console.log(err)
    }

}

export async function getCoWorks() {

    try {

        const request = await fetch("http://localhost:6278/users/departments/coworkers", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("userToken")}`,
            },

        })

        if (request.ok) {

            const response = await request.json()

            return response

        }
    }
    catch (err) {
        console.log(err)
    }

}