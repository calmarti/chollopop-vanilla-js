import MessageController from './controllers/MessageController.js'
import LoaderController from './controllers/LoaderController.js'
import newItemController from './controllers/newItemController.js'
import DataService from './services/DataService.js'


window.addEventListener('DOMContentLoaded', function() {

    if (! DataService.isAuth()){
        const queryString = '?next=/newitem.html'
        window.location.href = `/login.html${queryString}`
    }

    const messageDiv = document.querySelector('.message-container')
    new MessageController(messageDiv)

    const form = document.querySelector('form')
    new newItemController(form)




})