import DataService from "../services/DataService.js"
import PubSub from "../services/PubSub.js"


export default class EditItemController {

    constructor(element, itemId) {
        this.element = element
        this.showOldDataInEditForm(itemId)
        this.attachEventListeners(itemId)

    }



    async showOldDataInEditForm(itemId) {
        const oldData = await DataService.getItemDetail(itemId)
        this.element.querySelector('input[name="name"]').value = oldData.name
        this.element.querySelector('input[name="price"]').value = oldData.price
        this.element.querySelector('select[name="buyorsale"]').value = oldData.buyorsale
        this.element.querySelector('select[name="tag"]').value = oldData.tag
        this.element.querySelector('input[name="picture"]').value = oldData.picture

    }


    attachEventListeners(itemId) {
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

                    const result = await DataService.editItem(itemId, name, price, buyorsale, tag, picture)

                    PubSub.publish(PubSub.events.SHOW_SUCCESS, 'Tu anuncio ha sido modificado')

                }
                catch (error) {
                    PubSub.publish(PubSub.events.SHOW_ERROR, error)

                } finally {
                    PubSub.publish(PubSub.events.HIDE_LOADER)
                }


            }
            else {
                const controlsArray = Array.from(this.element.elements)
                let message = ''
                for (const control of controlsArray) {
                    if (control.validity.valueMissing) {
                        message += `El campo ${control.name} es obligatorio\n`   //ignora el newline                                         
                    }
                    PubSub.publish(PubSub.events.SHOW_ERROR, message)
                }
            }
        })
    }


}

