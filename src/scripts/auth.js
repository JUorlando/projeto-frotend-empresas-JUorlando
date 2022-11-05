import { getLocalStorageToken } from "./localSotrage.js"
import { getAdmAuth } from "./request.js"

export function authentication () {

    const token = getLocalStorageToken()

    if(token){
        getAdmAuth(token)
    }
}