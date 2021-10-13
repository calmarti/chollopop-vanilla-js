import { itemView , /* paginationView  */} from '../views.js';
import DataService from '../services/DataService.js';
import PubSub from '../services/PubSub.js'

export default class ListOfItemsController {

    constructor(element,page) {
        this.element = element
        console.log('desde el constructor', page)
        this.renderListOfItems(page)
        //this.renderPaginationBar()

        PubSub.subscribe(PubSub.events.SEARCH, (keyword) => {
            this.handleSearchEvent(keyword)
        })

        PubSub.subscribe(PubSub.events.FILTER, (tag) => {
            this.handleFilterEvent(tag)
        })
    
    }

    //TODO: refactorizar renderListofItems (cambiar nombre): separar la obtención de datos del server del renderizado

    async renderListOfItems(page) {

        PubSub.publish(PubSub.events.SHOW_LOADER)

        
        try {
            const items = await DataService.getListOfItems(page)
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

/*     renderPaginationBar(){
        const bar = this.element.querySelector('.pagination-bar')
        bar.innerHTML = paginationView()

    } */


    
    
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
        console.log(tag)
        if (tag==='reset'){
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