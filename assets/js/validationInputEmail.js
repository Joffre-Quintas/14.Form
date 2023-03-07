import { createErrorMsg, removeErrorMsg } from "./createErrorMsg.js";
import { messageError } from "./objectErrorMsg.js";

export const email = document.getElementById('email');

export function validationEmail (input) {
    removeErrorMsg(input);

    const value = input.target.value;
    const regexEmail = /^[A-z0-9._]+@[a-z0-9]+\.[a-z]+[\.]?[a-z]?/;
    let mensage = ''

    createErrorMsg(input,mensage)
    if(value == '') {
        createErrorMsg(input, messageError.nullCamp)

    } else if(!regexEmail.test(value)) {
        createErrorMsg(input, messageError.emailExample)
    } else if(value.includes(' ')) {
        createErrorMsg(input, messageError.notTrim)
    }
}

// email.addEventListener('blur', validationEmail)