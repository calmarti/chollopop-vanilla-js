import PubSub from "../services/PubSub.js"
import DataService from "../services/DataService.js"

export default class newItemController {

    constructor(element) {
        this.element = element
        this.attachEventListeners()
    }

    //TODO: poner primera letra de newItemController en mayúsculas en el nombre y en sus imports e invocaciones!
    //TODO: validar el campo precio como número
    //TODO: validar el campo foto como una URL 

    attachEventListeners() {
        this.element.addEventListener('submit', async event => {
            event.preventDefault()

          
            if (this.element.checkValidity()) {
                try {

                    const data = new FormData(this.element)

                    const name = data.get('name')
                    const price = data.get('price')
                    const buyorsale = data.get('buyorsale')
                    const tag = data.get('tag')
                    const picture = data.get('picture')
                    
                    //console.log(itemData)

                    PubSub.publish(PubSub.events.SHOW_LOADER)   //TODO: arreglar, no se muestra el loader al hacer la petición!
                    const result = await DataService.postNewItem(name, price, buyorsale, tag, picture)   //probar a eliminar el 'result' dejando solo la ejecución del await
                    
                    this.element.querySelector('.create-item').setAttribute('disabled', 'disabled')

                    PubSub.publish(PubSub.events.SHOW_SUCCESS, 'Tu anuncio ha sido creado')
                    //TODO: gestionar el evento click de 'Close': refresca la página (aquí o bien en MessageController)
              
                }
                catch (error) {
                    PubSub.publish(PubSub.events.SHOW_ERROR, error)

                }finally{
                    PubSub.publish(PubSub.events.HIDE_LOADER)
                }

            
        }
            else {
                const controlsArray = Array.from(this.element.elements)
                let message = ''
                for (const control of controlsArray) {
                    if (control.validity.valueMissing) {
                        message += `El campo ${control.name} es obligatorio\n`   //no escribe las newlines                                          
                    }
                PubSub.publish(PubSub.events.SHOW_ERROR, message)    
                }
            }
        })
    }
}

