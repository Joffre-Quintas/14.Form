export function createErrorMsg (input, mensage) {
    const divFather = input.target.parentElement

    try{
        divFather.querySelector('.error_msg').remove()
    } catch(e) {
    }

    const errorMsg = document.createElement('span')
    errorMsg.classList.add('error_msg')
    console.log(divFather)
    divFather.appendChild(errorMsg)
    errorMsg.innerHTML = mensage
}
