import LoaderController from "./controllers/LoaderController.js"
import MessageController from './controllers/MessageController.js'
import PubSub from "./services/PubSub.js"
import LoginController from './controllers/LoginController.js'
import NavbarController from "./controllers/NavbarController.js"
import DataService from "./services/DataService.js"



window.addEventListener('DOMContentLoaded', function() {
    const loader = document.querySelector('.loader-container')
    new LoaderController(loader)
    PubSub.publish(PubSub.events.SHOW_LOADER)

    const navbar = document.querySelector('.navbar')    
    const navbarController = new NavbarController(navbar)  
    navbarController.hideButtons()
    navbarController.disableSearchBox()
    navbarController.hideFilterMenu()
    
    const messageDiv = document.querySelector('.message-container')
    new MessageController(messageDiv)
    
    const form = document.querySelector('form#login')
    new LoginController(form)
    
   
})

    
window.addEventListener('load', function(){
    PubSub.publish(PubSub.events.HIDE_LOADER)

})