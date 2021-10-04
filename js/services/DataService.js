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
    }
}


//http://127.0.0.1:8000/api/items
//https://pixnio.com/free-images/2017/09/07/2017-09-07-07-59-31.jpg
