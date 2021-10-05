import MessageController from './controllers/MessageController.js'
import LoaderController from './controllers/LoaderController.js'
import SignUpController from './controllers/SignUpController.js'

window.addEventListener('DOMContentLoaded', function(){

    const loaderDiv = document.querySelector('.loader-container')
    new LoaderController(loaderDiv)
    
    const messageDiv = document.querySelector('.message-container')
    new MessageController(messageDiv)

    const form = document.querySelector('form')
    new SignUpController(form)

})