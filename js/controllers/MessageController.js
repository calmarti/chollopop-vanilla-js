import PubSub from '../services/PubSub.js'
import {errorView, successView, homeEmptyView, detailEmptyView} from '../views.js'

export default class MessageController{
    constructor(element){
        this.element = element
                
        PubSub.subscribe(PubSub.events.SHOW_ERROR, error => {
            this.showError(error)
        })
        PubSub.subscribe(PubSub.events.SHOW_SUCCESS, message => {
            this.showSuccess(message)
        })

        PubSub.subscribe(PubSub.events.HOME_EMPTY, message => {
            this.homeEmpty(message)
        })

        PubSub.subscribe(PubSub.events.DETAIL_EMPTY, message => {
            this.detailEmpty(message)
        })


    }
    
    attachCloseButtonListener(){
        const button = this.element.querySelector('button')
        button.addEventListener('click', () => {
            this.element.innerHTML = ''
        })
    }
    
    
    showError(error){
        this.element.innerHTML = errorView(error)
        this.attachCloseButtonListener()
    }
        
     
    showSuccess(success){
        this.element.innerHTML = successView(success)
        this.attachCloseButtonListener()
    }

    homeEmpty(message){
        this.element.innerHTML = homeEmptyView(message)
        this.attachCloseButtonListener()
    }
        
    detailEmpty(message){                
        this.element.innerHTML = detailEmptyView(message)
        this.attachCloseButtonListener()
    }

}