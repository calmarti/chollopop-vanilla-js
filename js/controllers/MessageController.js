import PubSub from '../services/PubSub.js'
import {errorView, successView, emptyView} from '../views.js'

export default class MessageController{
    constructor(element){
        this.element = element
                
        PubSub.subscribe(PubSub.events.SHOW_ERROR, error => {
            this.showError(error)
        })
        PubSub.subscribe(PubSub.events.SHOW_SUCCESS, message => {
            this.showSuccess(message)
        })

        PubSub.subscribe(PubSub.events.SHOW_EMPTY, message => {
            this.showEmpty(message)
        })

    }
    
    attachCloseButtonListener(button){
        button.addEventListener('click', () => {
            this.element.innerHTML = ''
        })
    }
    
    
    showError(error){
        this.element.innerHTML = errorView(error)
        const button = this.element.querySelector('button')
        this.attachCloseButtonListener(button)
    }
        
     
    showSuccess(success){
        this.element.innerHTML = successView(success)
        const button = this.element.querySelector('button')
        this.attachCloseButtonListener(button)
    }
        
    showEmpty(message){                
        this.element.innerHTML = emptyView(message)
        const button = this.element.querySelector('button')
        this.attachCloseButtonListener(button)
    }


}