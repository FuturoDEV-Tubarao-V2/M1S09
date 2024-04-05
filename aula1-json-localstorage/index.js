/** Convertendo JSON para JavaScript, adicionando um item à lista e convertendo novamente para JSON.*/
var string = '{"frutas": ["maçã", "banana", "laranja", "kiwi"]}'

var jsonConvertido = JSON.parse(string)

// console.log(jsonConvertido.frutas[1])
jsonConvertido.frutas.push('uva')

var jsonString = JSON.stringify(jsonConvertido)

console.log(jsonString)

/** ---------------------------------------------------- */

var frutas = '["maçã", "banana", "laranja", "kiwi"]'

/** Convertendo array do JSON */
var frutasLista = JSON.parse(frutas)

frutasLista.forEach(fruta => {
    console.log("NOME DA FRUTA: ", fruta)
});

var frutasNumeradas = frutasLista.map((fruta, index) => {
    return fruta + " " + (index + 1)
}) 


console.log(JSON.stringify(frutasNumeradas))