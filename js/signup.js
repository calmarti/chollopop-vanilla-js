import MessageController from './controllers/MessageController.js'
import LoaderController from './controllers/LoaderController.js'
import PubSub from './services/PubSub.js'
import SignUpController from './controllers/SignUpController.js'
import NavbarController from "./controllers/NavbarController.js"


window.addEventListener('beforeunload', function() {
    const loader = document.querySelector('.loader-container')
    new LoaderController(loader)
    PubSub.publish(PubSub.events.SHOW_LOADER)
}) 

window.addEventListener('DOMContentLoaded', function(){
    PubSub.publish(PubSub.events.HIDE_LOADER)
    
    const navbar = document.querySelector('.navbar')
    const navbarController = new NavbarController(navbar) 
    navbarController.hideSecondButton()
    navbarController.disableSearchBox()
    navbarController.hideFilterMenu()
        
    const messageDiv = document.querySelector('.message-container')
    new MessageController(messageDiv)

    const form = document.querySelector('form#signup')
    new SignUpController(form)

})