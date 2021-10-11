import LoaderController from "./controllers/LoaderController.js"
import MessageController from './controllers/MessageController.js'
import PubSub from "./services/PubSub.js"
import LoginController from './controllers/LoginController.js'
import NavbarController from "./controllers/NavbarController.js"
import DataService from "./services/DataService.js"


window.addEventListener('beforeunload', function() {
    const loader = document.querySelector('.loader-container')
    new LoaderController(loader)
    PubSub.publish(PubSub.events.SHOW_LOADER)
}) 


window.addEventListener('DOMContentLoaded', function() {
    //PubSub.publish(PubSub.events.HIDE_LOADER)

/*     const navbar = document.querySelector('.navbar')     //TODO: al meter navbar ya el login no devuelve el token ni redirige al index 
    const navbarController = new NavbarController(navbar)  */
      
    const messageDiv = document.querySelector('.message-container')
    new MessageController(messageDiv)

    const form = document.querySelector('form')
    new LoginController(form)

})

    
//PubSub.publish(PubSub.events.HIDE_LOADER)