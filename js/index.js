import ListOfItemsController from "./controllers/ListOfItemsController.js"
import MessageController from "./controllers/MessageController.js"

window.addEventListener('DOMContentLoaded', () => {
    const list = document.querySelector('.list')
    new ListOfItemsController(list)

    const message = document.querySelector('.message')
    new MessageController(message)

})