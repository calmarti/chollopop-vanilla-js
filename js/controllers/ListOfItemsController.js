import { itemView } from '../views.js';
import DataService from '../services/DataService.js';
import PubSub from '../services/PubSub.js'

export default class ListOfItemsController {

    constructor(element) {
        this.element = element
        this.renderListOfItems()
     }

    async renderListOfItems() { 

        try {
            const items = await DataService.getListOfItems()    
            let htmlContent = '' 
            for (const item of items) {
                htmlContent += itemView(item); 
            }   
            this.element.innerHTML = htmlContent

        } catch (error) {
            PubSub.publish(PubSub.events.SHOW_ERROR, error)
            
        }
    }
               
}
