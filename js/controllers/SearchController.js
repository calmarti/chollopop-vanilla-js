import PubSub from "../services/PubSub.js"


    const debounce = (func, timeout = 500) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
  } 


export default class SearchController{
    constructor(element){
        this.element = element
        this.attachEventListeners()
    }
    
    attachEventListeners(){
        this.element.addEventListener('input',  
                    debounce(() => {                                
                PubSub.publish(PubSub.events.SEARCH, this.element.value)
            }, 500)                 
         
        )
    }


}

