export default {

    getListOfItems: async function () {
        const url = 'http://127.0.0.1:8000/api/items'
        const response = await fetch(url)
        if (response.ok) {
            const data = await response.json()
            //console.log(data)
            return data
        }
        else {
            throw new Error('No se pudo obtener la lista de anuncios')
        }
    },
  
    registerUser: async function (username, password) {
        const params = {username, password}
        console.log(params)
        const url = 'http://127.0.0.1:8000/auth/register'
        const config = {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({username, password})
        }
        console.log(config)
        const response = await fetch(url, config)
        
        if (response.ok) {
            try{
                const parsedResponse = await response.json()   //probar error al parsear a ver que message da
                return parsedResponse
            }
            catch(error){
                throw error.message
            }
        }
        else {
            console.log(response)
            throw 'No se pudo registrar el usuario'
        }
    }


}



//http://127.0.0.1:8000/api/items
//https://pixnio.com/free-images/2017/09/07/2017-09-07-07-59-31.jpg
