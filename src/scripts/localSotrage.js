export function getLocalStorageToken () {

    const id = JSON.parse(localStorage.getItem("userToken")) || []

    return id

}
