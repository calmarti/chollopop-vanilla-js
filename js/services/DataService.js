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

    request: async function (url, method, body = {}) {
        const config = {
            method: method,
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(body)
        }
        const response = await fetch(url, config)
        try {
            const parsedResponse = await response.json()   //probar error al parsear a ver que message da
            
            if (response.ok) {
                //console.log('ok:', parsedResponse)
                return parsedResponse
            }
            else {
                //console.log('not ok:', parsedResponse)
                throw parsedResponse.message        //OJO: confirmar con pruebas que no es necesario un new Error
            }
        }
        catch (error) {
            throw error
        }

    },
    
    registerUser: async function (username, password) {       //probar con 'arrow-function' para saber a quien asignaría el 'this' 
        const url = 'http://127.0.0.1:8000/auth/register'
        return await this.request(url, 'POST', {username, password} )

    },

    loginUser: async function (username, password)  {
        const url = 'http://127.0.0.1:8000/auth/login'
        const result = await this.request(url, 'POST', {username, password} )
        const token = result.accessToken
        localStorage.setItem('AUTH_TOKEN', token)

    },

    isAuthed: async () => {
        return localStorage.getItem('AUTH_TOKEN') !== null
    }
        
}
//http://127.0.0.1:8000/api/items
//https://pixnio.com/free-images/2017/09/07/2017-09-07-07-59-31.jpg
