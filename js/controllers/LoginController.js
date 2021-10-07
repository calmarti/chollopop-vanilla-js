import DataService from '../services/DataService.js'
import PubSub from '../services/PubSub.js'

export default class LoginController {

    constructor(element) {
        this.element = element
        this.attachEventListeners()

    }
    attachEventListeners() {
        this.element.addEventListener('submit', async event => {
            event.preventDefault()

            if (this.element.checkValidity()) {
                //¿protección contra HTML injection?
                const username = this.element.querySelector('input[type="text"]').value   //potencial cambio a 'email' 
                const password = this.element.querySelector('input[type="password"]').value
                try {
                    const result = await DataService.loginUser(username, password)
                    //probar a eliminar el 'result' dejando solo la ejecución del await
                    const params = new URLSearchParams(window.location.search)
                    window.location.href = params.get('next') || '/'


                } catch (error) {
                    PubSub.publish(PubSub.events.SHOW_ERROR, error)
                }

            } else {
                PubSub.publish(PubSub.events.SHOW_ERROR, 'Los campos no pueden estar vacíos')
            }



        })

    }


}
