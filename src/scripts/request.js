
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