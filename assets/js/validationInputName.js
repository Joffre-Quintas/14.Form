import { createErrorMsg, removeErrorMsg } from "./createErrorMsg.js";

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
        mensage = '*Preencha o campo'
        createErrorMsg(input, mensage)
    } else if(!regexName.test(value)) {
        mensage = '*Apenas letras'
        createErrorMsg(input, mensage)
    }
    
}


inputs.forEach(input => input.addEventListener('blur', (event) => { 
    validationName(event)
})) 
