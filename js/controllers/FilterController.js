import PubSub from '../services/PubSub.js'

export default class FilterController {

    constructor(element){
        this.element = element
        this.attachEventListeners()

    }

    attachEventListeners(){
        this.element.addEventListener('change', ()=> {
            //console.log(this.element.value)
            PubSub.publish(PubSub.events.FILTER, this.element.value)

        })
    }




}