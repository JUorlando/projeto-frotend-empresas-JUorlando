
export function getLocalStorage () {

    const company = JSON.parse(localStorage.getItem("dataCompany")) || []

    return company

}

export function getLocalStorageToken () {

    const id = JSON.parse(localStorage.getItem("userToken")) || []

    return id

}