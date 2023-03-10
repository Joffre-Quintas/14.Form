import { createErrorMsg, removeErrorMsg } from "./createErrorMsg.js";
import { messageError } from "./objectErrorMsg.js";

export const inputName = document.querySelector('#name')
export const inputLastName = document.querySelector('#lastName')

export const inputs = [inputName, inputLastName]

export function validationName(input) {
    removeErrorMsg(input)

    const value = input.target.value;
    const regexName = /[a-zA-Z]/;
    let mensage = ''

    createErrorMsg(input,mensage)
    if(value == '') {
        createErrorMsg(input, messageError.nullCamp)

    } else if(!regexName.test(value)) {
        createErrorMsg(input, messageError.justLetters)
    } else if(value.includes(' ')) {
        createErrorMsg(input, messageError.notTrim)
    }
    
}


// inputs.forEach(input => input.addEventListener('blur', (event) => { 
//     validationName(event)
// })) 
