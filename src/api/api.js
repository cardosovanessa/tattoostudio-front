const api = async (url, method, body) =>{
<<<<<<< HEAD
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
=======
  const header =  {
    "Content-Type": "application/json",                                                                                                
    "Access-Control-Origin": "*"
}
  const init = {
    method: method,
    headers: header,
    body: JSON.stringify ( body )
  }

  const data = await fetch (url, init)
  const result = data.json()
  return result   
}

export default api;
>>>>>>> 268e90bb3a82dbbe3c0762332120ebbe09f6b815
