import MessageController from './controllers/MessageController.js'
import SignUpController from './controllers/SignUpController.js'
/* import LoaderController from './controllers/LoaderController.js'
import PubSub from './services/PubSub.js'


new LoaderController(loaderDiv)

PubSub.publish(PubSub.events.SHOW_LOADER) */


window.addEventListener('DOMContentLoaded', function(){
    
    const messageDiv = document.querySelector('.message-container')
    new MessageController(messageDiv)

    const form = document.querySelector('form')
    new SignUpController(form)

})