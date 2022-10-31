
export function getLocalStorage () {

    const company = JSON.parse(localStorage.getItem("dataCompany")) || []

    return company

}