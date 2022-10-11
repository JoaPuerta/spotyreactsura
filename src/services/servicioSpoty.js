export async function servicioSpoty(){

    const URI="https://api.spotify.com/v1/artists/790FomKkXshlbRYZFtlgla/top-tracks?market=US"

    const TOKEN="Bearer BQCbtIG16kwm6cX_0eiWoJO2c4HwXNvWZprL3RJ4smv6b5tlSavUFyDwBot1RgzRiDXja8cFO4jFlLnmjheHih7ZSAaJpDugl0yvMX-PWqz3GTFrKx-RnLUbud-dWqATvK1GomsCmNK3Z2cF8JfQEAOtsj5SrzNbmLi4Naqw-UB6uwD8WhQ3ZPdJzH96iBfOqPk"

    const PETICION={
        method:"GET",
        headers:{Authorization:TOKEN}
    }

    let respuesta=await fetch(URI,PETICION)
    let datos=await respuesta.json()

    return datos
}