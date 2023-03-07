import { createErrorMsg, removeErrorMsg } from "./createErrorMsg.js";
import { messageError } from "./objectErrorMsg.js";

const inputName = document.querySelector('#name')
const inputLastName = document.querySelector('#lastName')

const inputs = [inputName, inputLastName]

function validationName(input) {
    removeErrorMsg(input)

    const value = input.target.value;
    const regexName = /[a-zA-Z]/;
    let mensage = ''

    createErrorMsg(input,mensage)
    if(value == '') {
        createErrorMsg(input, messageError.nullCamp)

    } else if(!regexName.test(value)) {
        // mensage = '*Apenas letras'
        createErrorMsg(input, messageError.justLetters)
    } else if(value.includes(' ')) {
        createErrorMsg(input, messageError.notTrim)
    }
    
}


inputs.forEach(input => input.addEventListener('blur', (event) => { 
    validationName(event)
})) 
