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
                    const itemData = {}
                    const data = new FormData(this.element)
                    for (const key of data.keys()) {
                        itemData[key] = data.get(key)
                    }
                    console.log(itemData)

                    const result = await DataService.postNewItem(itemData)
                    
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

