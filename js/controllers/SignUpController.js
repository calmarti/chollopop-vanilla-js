import DataService from "../services/DataService.js"
import PubSub from "../services/PubSub.js"

export default class SignUpController {

    constructor(element) {

        this.element = element
        this.attachEventListeners()

    }

    whileTypeValidation() {
        const inputList = this.element.querySelectorAll('input')
        const button = this.element.querySelector('button')
        Array.from(inputList).forEach(input => {
            input.addEventListener('input', () => {

                if (this.element.checkValidity()) {

                    button.removeAttribute('disabled')
                }
                else {
                    button.setAttribute('disabled', true)
                }
            })
        })
    }


    checkPasswordsMatch() {
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
                        })
                    }
                }
            })
        })
    }

    attachEventListeners() {

        this.element.addEventListener('submit', async event => {
            event.preventDefault()

            if (this.element.checkValidity()) {
                try {
                    const username = this.element.querySelector('input[name="username"]').value
                    const password = this.element.querySelector('input[name="password"]').value


                    PubSub.publish(PubSub.events.SHOW_LOADER)
                    await DataService.registerUser(username, password)

                    PubSub.publish(PubSub.events.SHOW_SUCCESS, 'Registrado con éxito')

                }
                catch (error) {
                    PubSub.publish(PubSub.events.SHOW_ERROR, error)
                }
                finally {
                    PubSub.publish(PubSub.events.HIDE_LOADER)
                }
            }
            else {

                let message = ''
                Array.from(this.element.elements).forEach(control => {
                    if (control.validity.valid === false) {
                        message += `${control.name}: ${control.validationMessage}`
                    }
                })

                PubSub.publish(PubSub.events.SHOW_ERROR, message)
            }

        })

        this.checkPasswordsMatch()
        this.whileTypeValidation()

    }


}






















