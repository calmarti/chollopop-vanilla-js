import { itemView } from '../views.js';
import DataService from '../services/DataService.js';
import PubSub from '../services/PubSub.js'

export default class ListOfItemsController {

    constructor(element) {
        this.element = element
        this.renderListOfItems()
        PubSub.subscribe(PubSub.events.SEARCH, (keyword) => {
            this.handleSearchEvent(keyword)

        })
    }


    async renderListOfItems() {

        PubSub.publish(PubSub.events.SHOW_LOADER)

        
        try {
            const items = await DataService.getListOfItems()
            if (items.length === 0) {
                return PubSub.publish(PubSub.events.SHOW_EMPTY, 'Lo siento, no existe ningún anuncio por ahora') //probar con Db.json
            }
            let htmlContent = ''
            for (const item of items) {
                htmlContent = itemView(item);
                this.element.innerHTML += htmlContent
            }

        } catch (error) {
            PubSub.publish(PubSub.events.SHOW_ERROR, error.message)

        } finally {
            PubSub.publish(PubSub.events.HIDE_LOADER)
        }


    }
    
    async handleSearchEvent(keyword) {
        console.log('desde listofitemscontroller:', keyword)
        this.element.innerHTML = ''
        try {
            const items = await DataService.search(keyword)
            let htmlContent = ''
            for (const item of items) {
                htmlContent = itemView(item);
                this.element.innerHTML += htmlContent
            }
        }

        catch (error) {
            PubSub.publish(PubSub.events.SHOW_ERROR, error)
        }

    }

}