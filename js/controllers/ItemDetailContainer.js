import PubSub from "../services/PubSub.js"
import DataService from "../services/DataService.js"
import { itemDetailView } from "../views.js"

export default class ItemDetailController{

    constructor(element, itemId){
        this.element = element
       
   

    }
    //pedir al DataService los datos del item a través del id    
    DataService.getItemDetail()

    //pasarle los datos a la vista
    showItemDetail(itemData){
        return itemDetailView(itemData)
    } 


}