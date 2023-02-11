import { createErrorMsg } from "./createErrorMsg.js";

const inputName = document.querySelector('#name')
const inputLastName = document.querySelector('#lastName')

const inputs = [inputName, inputLastName]

function validationName(input) {
    const value = input.target.value;
    const regexName = /[a-zA-Z]/;
    let mensage = ''

    if(value == '') {
        mensage = '*Preencha o campo vazio'
        createErrorMsg(input, mensage)
    } else if(!regexName.test(value)) {
        mensage = '*Apenas letras'
        createErrorMsg(input, mensage)
    }
    
}


inputs.forEach(input => input.addEventListener('blur', (event) => { 
    validationName(event)
})) 
