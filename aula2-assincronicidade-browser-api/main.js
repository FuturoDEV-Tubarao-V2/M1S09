var buttonElement = document.querySelector('button')
var inputElement = document.querySelector('input')
var listaElemento = document.querySelector('ul')

const INTERESSES_KEY = 'meus-interesses'

buttonElement.addEventListener('click', (event) => {
    var value = inputElement.value;

    var lista = localStorage.getItem(INTERESSES_KEY)

    if(lista) {
        var listaConvertida = JSON.parse(lista) // ['', '']
        listaConvertida.push(value)

        localStorage.setItem(INTERESSES_KEY, JSON.stringify(listaConvertida))

        setTimeout(() => {
            alert('Interessse adicionado com sucesso')
        }, 1000);
    } else {
        var listaArray = [value]

        localStorage.setItem(INTERESSES_KEY, JSON.stringify(listaArray))
    }
});

function carregarInteresses() {
    var lista = localStorage.getItem(INTERESSES_KEY)

    if(lista) {
        var listaConvertida = JSON.parse(lista)
        // Limpar a lista
        listaElemento.innerHTML = ""
        // Depois adicionar um por um
        listaConvertida.forEach(interesse => {
            const li = document.createElement('li')
            // ...
        });
    }
}

/// Browser API

function func1() {
    console.log('primeiro aqui')
}
function func2() {
    console.log('com delay....')
}

setTimeout(func2, 1000) // 2s
func1();

setInterval(carregarInteresses, 1000)