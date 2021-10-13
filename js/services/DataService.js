
export default {


    request: async function (url, method = 'GET', body = {}) {
        //console.log('body:', body, 'method:', method, 'url:', url)
        const config = {
            method: method,
            headers: { 'content-type': 'application/json' },
        }
        if (config.method === 'POST' || config.method === 'PUT') {
            let params = JSON.stringify(body)
            //console.log('params:', params)
            params = this.escapeHTML(params)
            config['body'] = params

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

            else if (response.status === 404) {
                const id = new URLSearchParams(window.location.search).get('id')
                if (id) {
                    parsedResponse['empty'] = true
                    return parsedResponse
                }
                else {
                    throw `${response.statusText}`
                }

            }
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
        const url = `http://127.0.0.1:8000/api/items?_page=${page}`
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

    postNewItem: async function (name, price, buysale, picture) {
        const url = 'http://127.0.0.1:8000/api/items'
        return await this.request(url, 'POST', { name, price, buysale, picture })
    },


    editItem: async function (itemId, name, price, buysale, picture) {
        //console.log('parametros de editItem:', itemId, name, price, buysale, picture)
        const url = `http://127.0.0.1:8000/api/items/${itemId}`
        return await this.request(url, 'PUT', { name, price, buysale, picture })
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

    escapeHTML(input) {      //TODO: mejorar función (ampliar lista de chars)
        return input.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    },

        isItemCreator: function (item) {            //mover o refactorizar en función de creación de anuncio
        item.isItemCreator = this.parseToken() === item.userId 
        
    
        //console.log(item.canBeDeleted)
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


