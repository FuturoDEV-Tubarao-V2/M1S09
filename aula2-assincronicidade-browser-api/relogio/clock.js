var horasElemento = document.querySelector('.hour')
var minutosElemento = document.querySelector('.minutes')
var segundosElemento = document.querySelector('.seconds')
var buttonElement = document.querySelector('button')

function relogio() {
    var date = new Date()
    var horas = date.getHours().toString().padStart(2, '0')
    var minutos = date.getMinutes().toString().padStart(2, '0')
    var segundos = date.getSeconds().toString().padStart(2, '0')

    horasElemento.innerHTML = horas
    minutosElemento.innerHTML = minutos
    segundosElemento.innerHTML = segundos
}


var intervalClockId = setInterval(relogio, 1000)

buttonElement.addEventListener('click', () => {
    clearInterval(intervalClockId)
})