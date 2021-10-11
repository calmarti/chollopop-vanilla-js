import PubSub from '../services/PubSub.js'
import { loaderView } from "../views.js"


export default class LoaderController {
    constructor(element) {
        this.element = element            
        PubSub.subscribe(PubSub.events.SHOW_LOADER, () => {
            this.showLoader()
        })
        PubSub.subscribe(PubSub.events.HIDE_LOADER, () => {
            this.hideLoader()
        })
    }

    showLoader(){
        return this.element.innerHTML = loaderView()
        
    }

     hideLoader(){
        this.element.querySelector('.spinner-border').removeAttribute('class') 
        
    } 


}