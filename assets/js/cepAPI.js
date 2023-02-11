import { createErrorMsg } from "./createErrorMsg.js"

const inputCEP = document.querySelector('#cep')


async function findCEP(cepNumber) {
    try {
        const cep = await fetch(`https://viacep.com.br/ws/${cepNumber}/json/`)
        const convertCEP = await cep.json()
        if(convertCEP.erro) {
            throw console.log('CEP não encontrado')
        }
        const city = document.querySelector('#city')
        const neighborhood = document.querySelector('#neighborhood')
        const street = document.querySelector('#street')
        
        city.value =  convertCEP.localidade
        neighborhood.value =  convertCEP.bairro
        street.value =  convertCEP.logradouro
    }
    catch(e) {
        console.log(e)
    }
}

inputCEP.addEventListener('blur', ()=> {
    findCEP(inputCEP.value)
})