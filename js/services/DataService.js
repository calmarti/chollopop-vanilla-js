
export default {


    request: async function (url, method = 'GET', body = {}) {
            const config = {
            method: method,
            headers: { 'content-type': 'application/json' },
        }
        if (config.method === 'POST' || config.method === 'PUT') {
            const escapedBody = this.escapeHTML(body)  
            const stringifiedBody= JSON.stringify(escapedBody)
            config['body'] = stringifiedBody
        }

        if (this.isAuth()) {

            const token = localStorage.getItem('AUTH_TOKEN')
            config.headers['Authorization'] = `Bearer ${token}`
        }


        const response = await fetch(url, config)

        try {

            let parsedResponse = await response.json()   //forzar un error al parsear 


            if (response.ok) {
                return parsedResponse
            }

            else if (response.status===404){
                return null
            }

/*              else if (response.status === 404) {

            const id = new URLSearchParams(window.location.search).get('id')
                if (id) {
                    parsedResponse['empty'] = true
                    return parsedResponse
                }
                else {
                    throw `${response.statusText}`
                }  
            }*/

            else {
                throw `${response.statusText}`
            } 


        }
        catch (error) {
            console.log(error)
            throw error
        }


    },

    getListOfItems: async function (page) {
        //const url = 'https://gambarmobil.com/foto/bmw/239955-3-series-bmw-f30-320i-lci-2017-last-model-0faab85f-bcb2-4086-a372-0610a900453a.jpeg'
        const url = `http://127.0.0.1:8000/api/items?_page=${page}&_limit=9`
        const parsedResponse = await this.request(url)
        //console.log(parsedResponse)        
        return parsedResponse

    },

    getItemDetail: async function (itemId) {
        const url = `http://127.0.0.1:8000/api/items/${itemId}`
        return await this.request(url, 'GET')
    },

    registerUser: async function (username, password) {       //probar con 'arrow-function' para saber a quien asignaría el 'this' 
        const url = 'http://127.0.0.1:8000/auth/register'
        return await this.request(url, 'POST', { username, password })

    },

    loginUser: async function (username, password) {
        const url = 'http://127.0.0.1:8000/auth/login'
        const result = await this.request(url, 'POST', { username, password })
        const token = result.accessToken
        localStorage.setItem('AUTH_TOKEN', token)


    },

    isAuth: function () {
        return localStorage.getItem('AUTH_TOKEN') !== null
    },

    postNewItem: async function (name, price, buyorsale, tag, picture) {
        const url = 'http://127.0.0.1:8000/api/items'
        return await this.request(url, 'POST', { name, price, buyorsale, tag, picture })
    },


    editItem: async function (itemId, name, price, buyorsale, tag, picture) {
        //console.log('parametros de editItem:', itemId, name, price, buysale, picture)
        const url = `http://127.0.0.1:8000/api/items/${itemId}`
        return await this.request(url, 'PUT', { name, price, buyorsale, tag, picture })
    },


    deleteItem: async function (itemId) {
        const url = `http://127.0.0.1:8000/api/items/${itemId}`
        return await this.request(url, 'DELETE')

    },

    parseToken: function () {
        const token = localStorage.getItem('AUTH_TOKEN')
        if (token === null) {
            return null
        }
        else {
            try {
                const payload = JSON.parse(atob(token.split('.')[1]))
                //console.log(payload)
                return payload.userId
            } catch (error) {
                throw error
            }
        }
    },

    escapeHTML(body) {      
                 
        for (const key of Object.keys(body)){
    
            body[key] = body[key]
            .replace(/&/g,'&amp;')
            .replace(/</g,'&lt;')
            .replace(/>/g,'&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;')
        }
        return body       
    },
        
     
        
      
        
           

    isItemCreator: function (item) {            //mover o refactorizar en función de creación de anuncio
    item.isItemCreator = this.parseToken() === item.userId 
        
    
    },

    search: function(keyword){
        const url = `http://127.0.0.1:8000/api/items?name_like=${keyword}`
        return this.request(url)

    },
    
    getItemsByTag: function(tag){
        const url = `http://127.0.0.1:8000/api/items?tag=${tag}`
        return this.request(url)

    }, 

/*     paginateItems: function(){
        const url = `http://127.0.0.1:8000/api/items?page=${page}`
        return this.request(url)
    } */



}


