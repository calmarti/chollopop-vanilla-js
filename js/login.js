import MessageController from './controllers/MessageController.js'
import LoginController from './controllers/LoginController.js'

window.addEventListener('DOMContentLoaded', () => {
    const messageDiv = document.querySelector('.message-container')
    new MessageController(messageDiv)

    const form = document.querySelector('form')
    new LoginController(form)

})