export default {

    getListOfItems: async function () {
        const url = 'http://127.0.0.1:8000/api/items'
        const response = await fetch(url)
        console.log(response)
        if (response.ok) {
            const data = await response.json()
            return data
        }
        else{
            throw new Error('Error al intentar mostrar la lista de anuncios')
        }
    }
}