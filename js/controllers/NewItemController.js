import PubSub from "../services/PubSub.js"
import DataService from "../services/DataService.js"

export default class NewItemController {

    constructor(element) {
        this.element = element
        this.attachEventListeners()
    }

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
                    
                  

                    PubSub.publish(PubSub.events.SHOW_LOADER)   
                    const result = await DataService.postNewItem(name, price, buyorsale, tag, picture)   
                    
                    this.element.querySelector('.create-item').setAttribute('disabled', 'disabled')

                    PubSub.publish(PubSub.events.SHOW_SUCCESS, 'Tu anuncio ha sido creado')
                               
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
                        
                        message += `El campo ${control.name} es obligatorio \n`
                                                                                                        
                    }
                    
                    PubSub.publish(PubSub.events.SHOW_ERROR, message)    
                }
            }
        })
    }
}
