let valor1 = parseFloat(prompt('digite um numero'))
let valor2 = parseFloat(prompt('digite outro numero'))
let operador = prompt(' digite um operador')
let soma = '+'
let subtracao = '-'
let multiplicacao = '*'
let divisao = '/'
if ( operador == soma){
    let conta = valor1 + valor2
    console.log(conta)
} else if ( operador == subtracao) {
    let conta = valor1 - valor2
    console.log(conta)
} else if ( operador == multiplicacao) {
    let conta = valor1 * valor2
    console.log(conta)
} else {
    let conta = valor1 / valor2
    console.log(conta)
}
