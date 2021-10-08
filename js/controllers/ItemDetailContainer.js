import PubSub from "../services/PubSub.js"
import DataService from "../services/DataService.js"
import { itemDetailView } from "../views.js"

export default class ItemDetailController {

    constructor(element, itemId) {
        this.element = element
        this.showItemDetail(itemId)


    }

    async showItemDetail(itemId) {
        try {
            const item = await DataService.getItemDetail(itemId)
            this.element.innerHTML = itemDetailView(item)
        }
        catch (error) {
            PubSub.publish(PubSub.events.SHOW_ERROR, error)
        }

    }


} 


