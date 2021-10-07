import ItemDetailController from './controllers/ItemDetailContainer.js'
import MessageController from './controllers/MessageController.js'


window.addEventListener('DOMContentLoaded', function() {
    
    const messageDiv = document.querySelector('.message-container')
    new MessageController(messageDiv)

    const url = new URLSearchParams(window.location.search)
    const itemId = url.get('id')
    
    const containerDiv = document.querySelector('.item-container')

    new ItemDetailController(containerDiv, itemId)
    

})


