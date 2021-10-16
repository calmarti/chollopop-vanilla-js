import { itemView } from '../views.js';
import DataService from '../services/DataService.js';
import PubSub from '../services/PubSub.js'

export default class ListOfItemsController {

    constructor(element,page) {
        this.element = element
        this.renderListOfItems(page)
        

        PubSub.subscribe(PubSub.events.SEARCH, (keyword) => {
            this.handleSearchEvent(keyword)
        })

        PubSub.subscribe(PubSub.events.FILTER, (tag) => {
            this.handleFilterEvent(tag)
        })
    
    }

    async renderListOfItems(page) {

        PubSub.publish(PubSub.events.SHOW_LOADER)

        
        try {
            const items = await DataService.getListOfItems(page)
            if (items.length === 0) {
                return PubSub.publish(PubSub.events.HOME_EMPTY, 'Lo siento, no existe ningún anuncio por ahora') 
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

    async handleFilterEvent(tag){
        if (tag===''){
            this.renderListOfItems()
        }
        this.element.innerHTML = ''
        try{
            const items = await DataService.getItemsByTag(tag)
            let htmlContent = ''
            for (const item of items) {
                htmlContent = itemView(item);
                this.element.innerHTML += htmlContent
            }
        }catch(error){
            PubSub.publish(PubSub.events.SHOW_ERROR, error)
        }
        
    }

    
}