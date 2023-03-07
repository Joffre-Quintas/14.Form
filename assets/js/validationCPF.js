import { createErrorMsg, removeErrorMsg } from "./createErrorMsg.js";
import { messageError } from "./objectErrorMsg.js";

export const inputCPF = document.getElementById('cpf')

export function validationCPF(input) {
    removeErrorMsg(input)

    const value = input.target.value;
    const regexName = /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/;
    let mensage = ''

    createErrorMsg(input,mensage)
    if(value == '') {
        createErrorMsg(input, messageError.nullCamp)

    } else if(!regexName.test(value)) {
        createErrorMsg(input, messageError.CPFexample)
    } else if(value.includes(' ')) {
        createErrorMsg(input, messageError.notTrim)
    }
    
}

// inputCPF.addEventListener('blur', validationCPF)

