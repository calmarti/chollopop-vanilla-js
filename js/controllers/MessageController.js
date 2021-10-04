import PubSub from '../services/PubSub.js'
import {errorView, successView, emptyView} from '../views.js'

export default class MessageController{
    constructor(element){
        this.element = element
        
        
        PubSub.subscribe(PubSub.events.SHOW_ERROR, error => {
            this.showError(error)
        })
        PubSub.subscribe(PubSub.events.SHOW_SUCCESS, success => {
            this.showSuccess()
        })

        PubSub.subscribe(PubSub.events.SHOW_SUCCESS, empty => {
            this.showEmptyState()
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
        this.element.innerHTML = successView(error)
        const button = this.element.querySelector('button')
        this.attachCloseButtonListener(button)
    }
        
    showEmptyState(){
        this.element.innerHTML = emptyView()
        
    }


}