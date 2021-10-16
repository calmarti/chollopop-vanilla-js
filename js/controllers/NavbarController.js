import { navbarView } from '../views.js'

export default class NavbarController{

    constructor(element){
        this.element = element
        this.renderDefaultNavbar()
       
    }
   
    renderDefaultNavbar(){
        this.element.innerHTML = navbarView()
    }

    changeButtons(){
        const firstButton = this.element.querySelector('#first-button')
        firstButton.innerText = 'Salir'
        firstButton.setAttribute('href', '/')

        firstButton.addEventListener('click', (ev) => {
            ev.preventDefault()
            localStorage.clear()
            window.location.href = '/'
        })


        const secondButton = this.element.querySelector('#second-button')
        secondButton.innerText = 'Crea un anuncio!'
        secondButton.setAttribute('href', '/newitem.html')
    }
    

    hideButtons(){          
        this.element.querySelector('#first-button').style.display = 'none'
        this.element.querySelector('#second-button').style.display = 'none'
    }

    hideSecondButton(){
        this.element.querySelector('#second-button').style.display ='none' 
    }
             

    disableSearchBox(){
        this.element.querySelector('#search').setAttribute('disabled','disabled')
    }

    hideFilterMenu(){
        this.element.querySelector('#filter').hidden=true
    }
        

}
    


  



