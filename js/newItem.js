import MessageController from './controllers/MessageController.js'
import LoaderController from './controllers/LoaderController.js'
import newItemController from './controllers/newItemController.js'
import DataService from './services/DataService.js'
import PubSub from './services/PubSub.js'
import NavbarController from "./controllers/NavbarController.js"


window.addEventListener('beforeunload', function() {
    const loader = document.querySelector('.loader-container')
    new LoaderController(loader)
    PubSub.publish(PubSub.events.SHOW_LOADER)
}) 

window.addEventListener('DOMContentLoaded', function() {
    PubSub.publish(PubSub.events.HIDE_LOADER)

    if (!DataService.isAuth()){
        const queryString = '?next=/newitem.html'
        window.location.href = `/login.html${queryString}`
    }

    const navbar = document.querySelector('.navbar')
    const navbarController = new NavbarController(navbar)
    navbarController.changeButtons()
    navbarController.disableSearchBox()
    navbarController.hideFilterMenu()
    navbarController.hideSecondButton()
    

    const messageDiv = document.querySelector('.message-container')
    new MessageController(messageDiv)


    const form = document.querySelector('form#newitem')
    new newItemController(form)




})