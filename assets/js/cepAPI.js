import { createErrorMsg, removeErrorMsg } from "./createErrorMsg.js"

const inputCEP = document.querySelector('#cep')

// Função para mudar os inputs do setor do CEP
function adressContentReplace(convertCEP) {
    const city = document.querySelector('#city')
    const neighborhood = document.querySelector('#neighborhood')
    const street = document.querySelector('#street')

    city.value =  convertCEP.localidade || ''
    neighborhood.value =  convertCEP.bairro || ''
    street.value =  convertCEP.logradouro || ''    
}

// Função assíncrona para localizar o CEP
async function findCEP(input) { 
    removeErrorMsg(input)  
    if(input.target.value == '') {
        createErrorMsg(input, '*Preencha o campo')
        adressContentReplace()
    } else {
        try {
            const cep = await fetch(`https://viacep.com.br/ws/${input.target.value}/json/`)
            const convertCEP = await cep.json()
            
            if(convertCEP.erro) {
                createErrorMsg(input,'*CEP não encontrado')
                adressContentReplace(convertCEP)
            } else {
                adressContentReplace(convertCEP)
            }
        }
        catch(e) {
        }
    }
}

inputCEP.addEventListener('blur', (input) => {
    findCEP(input)
})