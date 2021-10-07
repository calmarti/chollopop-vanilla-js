import PubSub from "../services/PubSub.js"
import DataService from "../services/DataService.js"

export default class newItemController {

    constructor(element) {
        this.element = element
        this.attachEventListeners()
    }

    //TODO: proteger contra HTML injection

    attachEventListeners() {
        this.element.addEventListener('submit', async event => {
            event.preventDefault()


            if (this.element.checkValidity()) {
                try {
                    
                    const data = new FormData(this.element)
                    
                       const name = data.get('itemname')
                       const price = data.get('price')
                       const buysale = data.get('buy-sale')
                       const picture = data.get('picture')
                    
                    //console.log(itemData)
                    const result = await DataService.postNewItem(name, price, buysale, picture)   //probar a eliminar el 'result' dejando solo la ejecución del await
                    PubSub.publish(PubSub.events.SHOW_SUCCESS, 'Tu anuncio ha sido creado')
                }
                catch (error) {
                    PubSub.publish(PubSub.events.SHOW_ERROR, error)
                }

            }
            else {
                //set custom validity here
                //PubSub.publish(PubSub.events.SHOW_ERROR, error)
            }

        })
    }



}

