export default {

    getListOfItems: async function () {
        const url = 'http://127.0.0.1:8000/api/items?' 
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
        }
        if (config.method === 'POST'){
            config['body'] = JSON.stringify(body)
        }
        
        if (this.isAuth()){
            
            const token = localStorage.getItem('AUTH_TOKEN')
            config.headers['Authorization'] = `Bearer ${token}`
            
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

    isAuth: function() {
        return localStorage.getItem('AUTH_TOKEN') !== null
    },
        
    postNewItem: async function(name, price, buysale, picture) {
            const url = 'http://127.0.0.1:8000/api/items'
            return await this.request(url, 'POST', {name, price, buysale, picture})
    }, 

    getItemDetail: async function(itemId){                    
        const url = `http://127.0.0.1:8000/api/items/${itemId}`    
        return await this.request(url, 'GET')       
    },

    deleteItem: async function(itemId){
        const url = `http://127.0.0.1:8000/api/items/${itemId}`
        return await this.request(url, 'DELETE') 

    },
    parseToken: function(){
        const token = localStorage.getItem('AUTH_TOKEN')
        if (token === null){
            return null
        }
        else{
            try{
                const payload = JSON.parse(atob(token.split('.')[1]))
                //console.log(payload)
                return payload.userId
            }catch(error){
                throw error
            }
        } 
    },
    addCanBeDeletedProperty: function(item){            //mover o refactorizar en función de creación de anuncio
        if (this.parseToken() === item.userId){
            item.canBeDeleted = true
        }else{
            item.canBeDeleted = false
        }
        //console.log(item.canBeDeleted)
    } 

}
//http://127.0.0.1:8000/api/items
//https://pixnio.com/free-images/2017/09/07/2017-09-07-07-59-31.jpg
