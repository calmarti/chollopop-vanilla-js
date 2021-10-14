import PubSub from "../services/PubSub.js"
import DataService from "../services/DataService.js"
import { itemDetailView} from "../views.js"

export default class ItemDetailController {

    constructor(element, itemId) {
        this.element = element
        this.showItemDetail(itemId)
    }


    //TODO: publicar eventos de éxito al editar y al borrar y luego crear para botón redirigir ?
    addEditFunctionality(itemId) {
        const button = this.element.querySelector('.edit-button')
        if (button) {
            button.addEventListener('click', () => {
                window.location.href = `/edititem.html?id=${itemId}`

            })
        }
    }


    addDeleteFunctionality(itemId) {
        const button = this.element.querySelector('.delete-button')
        if (button) {
            button.addEventListener('click', async () => {
                //TODO: mensaje de confirmación al usuario antes de borrar el anuncio, usar un modal de Bootstrap o algo así
                await DataService.deleteItem(itemId)
                window.location.href = '/?message=deleted-item'
                button.setAttribute('disabled', 'disabled')
            })
        }
    }


    async showItemDetail(itemId) {
        PubSub.publish(PubSub.events.SHOW_LOADER)

        try {
            const item = await DataService.getItemDetail(itemId)
            if (item === null){
                return PubSub.publish(PubSub.events.DETAIL_EMPTY, 'El anuncio que buscas no existe')
            }
            DataService.isItemCreator(item)
            this.element.innerHTML = itemDetailView(item)

            this.addEditFunctionality(itemId) 
            this.addDeleteFunctionality(itemId)

        }
        catch (error) {
            PubSub.publish(PubSub.events.SHOW_ERROR, error)
        }
        finally {
            PubSub.publish(PubSub.events.HIDE_LOADER)
        }

    }



}


