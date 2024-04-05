var minhaCondicao = true

var promessa = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(minhaCondicao) {
            resolve('aqui está os seus dados')
        }
        reject('deu erro na api')
    }, 2000)
})

promessa.then((value) => {
    console.log(value)
    var resposta = JSON.parse('sdjasjdnajnsdas') // 2s
    return resposta
}).then(segundoValor => {
    console.log(segundoValor)
}).catch(error => {
    console.error(error)
}).finally(() => {
    console.log('finalizou')
})