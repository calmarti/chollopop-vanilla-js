import ItemDetailController from './controllers/ItemDetailController.js'
import LoaderController from './controllers/LoaderController.js'
import MessageController from './controllers/MessageController.js'
import NavbarController from "./controllers/NavbarController.js"
import DataService from "./services/DataService.js"


window.addEventListener('DOMContentLoaded', function() {
       
    const loader = document.querySelector('.loader-container')
    new LoaderController(loader)

    const messageDiv = document.querySelector('.message-container')
    new MessageController(messageDiv)

    const navbar = document.querySelector('.navbar')
    const navbarController = new NavbarController(navbar)
    
    if (DataService.isAuth()){
        navbarController.renderAuthNavbar()
    }

    const url = new URLSearchParams(window.location.search)
    const itemId = url.get('id')
    
    const containerDiv = document.querySelector('.item-container')

    new ItemDetailController(containerDiv, itemId)
    

})


