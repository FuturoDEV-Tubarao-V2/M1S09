var textoElemento = document.querySelector('p')

async function getNews() {
    var response = await fetch('https://servicodados.ibge.gov.br/api/v3/noticias/?tipo=release')
    var data = await response.json()
    
    return data.items[0].titulo
}

document.addEventListener('DOMContentLoaded', async () => {
    var titulo = await getNews()
    textoElemento.innerText = titulo
})