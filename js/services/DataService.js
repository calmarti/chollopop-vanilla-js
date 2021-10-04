export default {

    getListOfItems: async function () {
        const url = 'https://pixnio.com/free-images/2017/09/07/2017-09-07-07-59-31.jpg'
        const response = await fetch(url)
        if (response.ok) {
            const data = await response.json()
            return data
        }
        else{
            throw new Error('Error al intentar mostrar la lista de anuncios')
        }
    }
}

//http://127.0.0.1:8000/api/items
//https://pixnio.com/free-images/2017/09/07/2017-09-07-07-59-31.jpg
