import DataService from '../services/DataService.js'
import PubSub from '../services/PubSub.js'

export default class LoginController {
    constructor(element) {
        this.element = element
        this.attachSubmitEventListener()


    }
    
    attachSubmitEventListener() {
        this.element.addEventListener('submit', async event => {
            event.preventDefault()

            if (this.element.checkValidity()) {
               
                const username = this.element.querySelector('input[type="text"]').value  
                const password = this.element.querySelector('input[type="password"]').value
                const params = new URLSearchParams(window.location.search)
                try {
                    PubSub.publish(PubSub.events.SHOW_LOADER)  
                    await DataService.loginUser(username, password)
                    window.location.href = params.get('next') || '/'
                    
                     
                } catch (error) {
                    PubSub.publish(PubSub.events.SHOW_ERROR, error)
                }
                finally{
                    PubSub.publish(PubSub.events.HIDE_LOADER)
                }

            } else {
                PubSub.publish(PubSub.events.SHOW_ERROR, 'Debes llenar ambos campos')
            }
        })
    }
}



