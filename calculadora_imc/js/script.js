import {modal} from './modal.js'
import {AlertError} from './alert-error.js'
import {notANumber} from './utils.js'
import { IMC } from './utils.js'

// Variáveis 
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

/* Eventos */ 

form.onsubmit = event => {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    const showAlertError = notANumber(weight) || notANumber(height)

    if (showAlertError) {
        AlertError.open()
        return;
    } 

    AlertError.close()


    const result = IMC(weight, height)
    const message = `Seu IMC é de ${result}`

    modal.message.innerText = message
    modal.open()
}

