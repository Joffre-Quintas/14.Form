import { inputs, validationName } from "./validationInputName.js"
import { inputCPF,validationCPF } from "./validationCPF.js"
import { email,validationEmail } from "./validationInputEmail.js"
import { inputCEP, findCEP } from "./cepAPI.js"

inputs.forEach(input => input.addEventListener('blur', (event) => { 
    validationName(event)
}));
inputCPF.addEventListener('blur', validationCPF);
email.addEventListener('blur', validationEmail);
inputCEP.addEventListener('blur', (input) => {
    findCEP(input)
})