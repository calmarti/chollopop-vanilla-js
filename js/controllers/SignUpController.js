import DataService from "../services/DataService.js"
import PubSub from "../services/PubSub.js"

export default class SignUpController {
    
    //TODO¿proteccion contra HTML injection?
    //TODO: arreglar evento de carga (en .html) y el css de eventos de error y éxito
    //OJO: tal vez el loader debe ir sólo al enviar el formulario al backend
    //TODO: arreglar posible conflicto entre validación de igualdad de contraseñas y el minlength (¿usar setCustomValidity?)

    constructor(element) {
        
        this.element = element
        this.attachEventListeners()
        this.whileTypePasswordsMatch()
        this.whileTypeValidation()
    }


    whileTypeValidation() {
        const inputList = this.element.querySelectorAll('input')
        const button = this.element.querySelector('button')
        Array.from(inputList).forEach(input => {
            input.addEventListener('input', event => {

                if (this.element.checkValidity()) {
                    
                    button.removeAttribute('disabled')
                }
                else {
                    button.setAttribute('disabled', true)
                }
            })
        })
    }


    whileTypePasswordsMatch() {
        const passwordControls = this.element.querySelectorAll('input[type="password"]')
            passwordControls.forEach(control => {
            control.addEventListener('input', control => {
                let passwords = []
                
                for (control of passwordControls) {
                    
                    if (!passwords.includes(control.value)) {
                        passwords.push(control.value)
                    }
                    if (passwords.length === 1) {
                        passwordControls.forEach(control => {
                            control.setCustomValidity('')
                        })
                    }
                    else {
                        passwordControls.forEach(control => {
                            control.setCustomValidity('Las contraseñas no coinciden')
                            //en un campo texto justo de bajo del control podría ir: control.validationMessage
                        })
                    }
                }
            })
        })
    }

    attachEventListeners() {


        this.element.addEventListener('submit', async event => {
            event.preventDefault()

            //hacer todas las validaciones necesarias
            if (this.element.checkValidity()) {
                try {
                    const username = this.element.querySelector('input[name="username"]').value
                    const password = this.element.querySelector('input[name="password"]').value
                    

                    /*  const controls = new FormData(this.element)
                     const username = controls.get('username')
                     const password = controls.get('password') */


                    const result = await DataService.registerUser(username, password)
                   
                    PubSub.publish(PubSub.events.SHOW_SUCCESS, 'Registrado con éxito')

                }
                catch (error) {
                    PubSub.publish(PubSub.events.SHOW_ERROR, error)
                }
            }
            else {
                //console.log('THIS.ELEMENT', this.element)
                //console.log('THIS.ELEMENT.ELEMENTS', this.element.elements)
                let message = ``
                Array.from(this.element.elements).forEach(control => {
                    if (control.validity.valid === false) {
                        message += `${control.name}: ${control.validationMessage}\n`    //¿porque ignora el newline?
                    }
                })

                PubSub.publish(PubSub.events.SHOW_ERROR, message)
            }

        })

    }


}
      





















