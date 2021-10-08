import PubSub from "../services/PubSub.js"
import DataService from "../services/DataService.js"
import { itemDetailView } from "../views.js"

export default class ItemDetailController {

    constructor(element, itemId) {
        this.element = element
        this.showItemDetail(itemId)
        console.log(itemId)


    }
    //proteger del HTML injection
    async showItemDetail(itemId) {
        try {
            const item = await DataService.getItemDetail(itemId)
            DataService.addCanBeDeletedProperty(item)
            this.element.innerHTML = itemDetailView(item)
            const button = this.element.querySelector('button')

            //TODO: refactorizar en función aparte
            //TODO: mensaje de confirmación al usuario antes de borrar el anuncio

            if (button) {
                button.addEventListener('click', async () => {
                    await DataService.deleteItem(itemId)
                    window.location.href = '/?message=deleted-item'
                    button.setAttribute('disabled', 'disabled')
                })
            }

        }
        catch (error) {
            PubSub.publish(PubSub.events.SHOW_ERROR, error)
        }

    }



}


