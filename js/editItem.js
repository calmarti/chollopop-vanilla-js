import EditItemController from './controllers/EditItemController.js'
import LoaderController from './controllers/LoaderController.js'
import MessageController from './controllers/MessageController.js'
import DataService from './services/DataService.js'
import NavbarController from "./controllers/NavbarController.js"


window.addEventListener('DOMContentLoaded', function() {
    const url = new URLSearchParams(window.location.search)
    const itemId = url.get('id')
    console.log(itemId)

    if (!DataService.isAuth()){
        const queryString = `?next=/edititem.html?id=${itemId}`
        window.location.href = `/login.html${queryString}`
    }
       
    const loader = document.querySelector('.loader-container')
    new LoaderController(loader)

    const messageDiv = document.querySelector('.message-container')
    new MessageController(messageDiv)

    const navbar = document.querySelector('.navbar')
    const navbarController = new NavbarController(navbar)
    navbarController.disableSearchBox()
    
    if (DataService.isAuth()){
        navbarController.changeButtons()
    }


    const form = document.querySelector('form#edititem')

    new EditItemController(form, itemId)
    

})