import DataService from "../services/DataService.js"
import PubSub from "../services/PubSub.js"

export default class SignUpController {

    //TODO: publicar eventos de error, éxito y carga

    constructor(element) {
        this.element = element
        this.attachEventListeners()

    }

    attachEventListeners() {


        this.element.addEventListener('submit', async event => {
            event.preventDefault()

            //hacer todas las validaciones necesarias
            if (this.element.checkValidity()) {
                try {
                    const usernameElem = this.element.querySelector('input[name="username"]')
                    const username = usernameElem.value
                    const passwordElem = this.element.querySelector('input[name="password"]')
                    const password = passwordElem.value

                    /*  const controls = new FormData(this.element)
                     const username = controls.get('username')
                     const password = controls.get('password') */


                    const result = await DataService.registerUser(username, password)
                    console.log(result)
                    PubSub.publish(PubSub.events.SHOW_SUCCESS, 'Registrado con éxito')

                }
                catch (error) {
                    PubSub.publish(PubSub.events.SHOW_ERROR, error)
                }
            }
            else {
                console.log('THIS.ELEMENT', this.element)
                console.log('THIS.ELEMENT.ELEMENTS', this.element.elements)
                let message = ``
                Array.from(this.element.elements).forEach(control => {
                    if (control.validity.valid === false) {
                        message += `${control.name}: ${control.validationMessage}\n`    //¿porque ignora el newline?
                    }
                })
                PubSub.publish(PubSub.events.SHOW_ERROR, message)
            }

            //proteccion contra HTML injection?

        })

        //habilitación o no del botón mientras el usuario teclea (antes del evento 'submit')
        const inputList = this.element.querySelectorAll('input')
        const button = this.element.querySelector('button')
        

        Array.from(inputList).forEach(input => {
            input.addEventListener('input', event => {
                if (this.element.checkValidity()) {
               
                    button.removeAttribute('disabled')
                }
                else{
                    button.setAttribute('disabled', true)
                }
            })
        })
        
        //TODO: validar confirmacion de contraseña en tiempo real



  

    }
}














