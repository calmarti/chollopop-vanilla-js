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
                //TODO: ¿protección contra HTML injection?
                const username = this.element.querySelector('input[type="text"]').value   //TODO: potencial cambio a 'email' 
                const password = this.element.querySelector('input[type="password"]').value
                const params = new URLSearchParams(window.location.search)
                try {
                    PubSub.publish(PubSub.events.SHOW_LOADER)  //TODO: arreglar, no se muesta el loader!
                    const result = await DataService.loginUser(username, password)
                    //probar a eliminar el 'result' dejando solo la ejecución del await (ya que no devuelve realmente nada)
                    window.location.href = params.get('next') || '/'
                    //TODO: redireccionar a un 'index.html' sin los botones de login y registrarse (identificar primero donde iría esto) 
                    //TODO: impedir que se muestra la página de login si el usuario está autenticado (¿en login.js?) --- pensarlo bien pues podría ser rizar el rizo y dificultar la evaluación    
                } catch (error) {
                    PubSub.publish(PubSub.events.SHOW_ERROR, error) //no pilla el 'wrong username/pasword' (se debe algo en el handling de errors de request())
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
