const api = async (url, method, body) =>{
    const header =  {
        "Content-Type": "application/json",                                                                                                
        "Access-Control-Origin": "*"
    }
    const init = {
        method: method,
        headers: header,
        body: JSON.stringify(body)
    }

    const data = await fetch(url,init)
    const result = data.json()
    return result
}

export default api
