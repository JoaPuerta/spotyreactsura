


export async function servicioTOKEN(){


    //uri
    const URI="https://accounts.spotify.com/api/token"

    //datos
    const DATO1="grant_type=client_credentials"
    const DATO2="client_secret=53d208da95c64b2dbe5f0d6b5ef06787"
    const DATO3="client_id=72239046a4734a7e8c4e40a9b0be2903"
    
    //peticion
    const PETICION={
        method:"POST",
        headers:{"Content-type":"application/x-www-form-urlencoded"},
        body:DATO1+"&"+DATO2+"&"+DATO3    
    }

    //fetch
    let respuesta=await fetch(URI,PETICION)
    let datos=await respuesta.json()
    datos=datos.token_type+' '+datos.access_token;

    return datos



}