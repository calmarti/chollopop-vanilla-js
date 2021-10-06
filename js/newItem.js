import MessageController from './controllers/MessageController.js'
import LoaderController from './controllers/LoaderController.js'
import newItemController from './controllers/newItemController.js'

window.addEventListener('DOMContentLoaded', () => {


    const messageDiv = document.querySelector('.message-container')
    new MessageController(messageDiv)

    const form = document.querySelector('form')
    new newItemController(form)




})