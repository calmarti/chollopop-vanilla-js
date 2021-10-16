import PubSub from "../services/PubSub.js"
import DataService from "../services/DataService.js"
import { itemDetailView} from "../views.js"

export default class ItemDetailController {

    constructor(element, itemId) {
        this.element = element
        this.showItemDetail(itemId)
    }


    addEditFeature(itemId) {
        const button = this.element.querySelector('.edit-button')
        if (button) {
            button.addEventListener('click', () => {
                window.location.href = `/edititem.html?id=${itemId}`

            })
        }
    }


    addDeleteFeature(itemId) {
        const button = this.element.querySelector('.delete-button')
        if (button) {
            button.addEventListener('click', async () => {
                
                const answer = window.confirm('¿Seguro que quieres borrar el anuncio?')
                if (answer===true){
                    try{
                        await DataService.deleteItem(itemId)
                        window.location.href = '/?message=deleted-item'
                    }catch(error){
                        PubSub.publish(PubSub.events.SHOW_ERROR,error)
                        button.setAttribute('disabled', 'disabled')
                    }
                }             
                
                
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

            this.addEditFeature(itemId) 
            this.addDeleteFeature(itemId)

        }
        catch (error) {
            PubSub.publish(PubSub.events.SHOW_ERROR, error)
        }
        finally {
            PubSub.publish(PubSub.events.HIDE_LOADER)
        }

    }



}


