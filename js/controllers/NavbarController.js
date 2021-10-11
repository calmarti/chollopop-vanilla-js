import { navbarView } from '../views.js'

export default class NavbarController{

    constructor(element){
        this.element = element
        this.renderDefaultNavbar()
        
    }

    //TODO: cambiar nombre a renderDefaultNavabar
    renderDefaultNavbar(){
        this.element.innerHTML = navbarView()
    }

    renderAuthNavbar(){
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
    

    renderSimpleNavbar(){
        const form = this.element.querySelector('form')
        //form.hidden = true     
        form.remove()     //los estilos de bootstrap parecen prevalecer sobre 'form.hidden=true' por lo que uso remove()
        
    }

    renderSimpleAuthNavbar(){

    }

        
    
    //Si usuario autenticado ==> elimina botones login y signup y añade botón crear anuncio en: index y detail 
    //TODO: En detail: elimina search box y search button, solo muestra Home, crear anuncio y salir 

    //TODO: En login y signup: solo muestra Home si está autenticado
    //TODO: En newitem: solo muestra Home y salir 
    //TODO: En edititem: solo muestra Home y salir


}

