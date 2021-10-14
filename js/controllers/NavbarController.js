import { navbarView } from '../views.js'

export default class NavbarController{

    constructor(element){
        this.element = element
        this.renderDefaultNavbar()
       
    }

    //TODO: esconder el tag-menu del navbar cuando corresponda
   
    renderDefaultNavbar(){
        this.element.innerHTML = navbarView()
    }

    changeButtons(){
        const firstButton = this.element.querySelector('#first-button')
        firstButton.innerText = 'Salir'
        firstButton.setAttribute('href', '/')

        firstButton.addEventListener('click', (ev) => {
            ev.preventDefault()
            //localStorage.removeItem('AUTH_KEY')
            localStorage.clear()
            window.location.href = '/'
        })


        const secondButton = this.element.querySelector('#second-button')
        secondButton.innerText = 'Crea un anuncio!'
        secondButton.setAttribute('href', '/newitem.html')
    }
    

    hideButtons(){
        //const form = this.element.querySelector('form')
        //form.hidden = true     
        //form.remove()     //los estilos de bootstrap parecen prevalecer sobre 'form.hidden=true' por lo que uso remove()
       
        this.element.querySelector('#first-button').style.display = 'none'
        this.element.querySelector('#second-button').style.display = 'none'
    }

    hideSecondButton(){
        this.element.querySelector('#second-button').style.display ='none' 
        //form.hidden = true     
       
    }

    disableSearchBox(){
        this.element.querySelector('#search').setAttribute('disabled','disabled')
    }

    hideFilterMenu(){
        this.element.querySelector('#filter').hidden=true
        //setAttribute('disabled', 'disabled')
    }

}
    


  



