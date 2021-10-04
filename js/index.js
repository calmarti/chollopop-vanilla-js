import ListOfItemsController from "./controllers/ListOfItemsController.js"
import MessageController from "./controllers/MessageController.js"
import LoaderController from "./controllers/LoaderController.js"

window.addEventListener('DOMContentLoaded', () => {
    
    
    const loaderDiv = document.querySelector('.loader-container')
    new LoaderController(loaderDiv)
    
    const messageDiv = document.querySelector('.message-container')
    new MessageController(messageDiv)

    const listDiv = document.querySelector('.list-container')
    new ListOfItemsController(listDiv)


})