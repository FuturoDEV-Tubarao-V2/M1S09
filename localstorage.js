var nome = "Nicholas"
var jsonFrutas = '{"frutas": ["maçã", "banana", "laranja", "kiwi"]}'

/* Incluindo um dado no localstorage */
localStorage.setItem('primeiro-nome', nome)
localStorage.setItem('frutas', jsonFrutas)

var frutasStorage = localStorage.getItem('frutas')

var frutas = JSON.parse(frutasStorage)

console.log('FRUTAS CONVERTIDA PARA JS', frutas)

/**
 * Convertendo JS para JSON e incluir no localStorage
 */
var interesses = ['pesca', 'comer e dormir', 'programar']

var usuario = {
    nome: 'Aurora',
    idade: 5,
}

localStorage.setItem('meus-interesses', JSON.stringify(interesses))

var interessesStorage = localStorage.getItem('meus-interesses')

var interessesConvertido = JSON.parse(interessesStorage)

/**
 * Manipulando o DOM
 * incluindo cada interesse da lista no HTML
 */

var listaElemento = document.querySelector('ul')

interessesConvertido.forEach(interesse => {
    var li = document.createElement('li')
    li.innerHTML = interesse
    
    listaElemento.appendChild(li)
});