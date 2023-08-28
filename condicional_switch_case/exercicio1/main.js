let valor1 = parseFloat(prompt('digite um numero'))
let valor2 = parseFloat(prompt('digite outro numero'))
let operador = prompt(' digite um operador')
let mensagem

switch (operador){
    case '+':
        resultado = valor1 + valor2;
        mensagem = "o resultado é " + resultado;
    break;

    case '-':
        resultado = valor1 - valor2;
        mensagem = "o resultado é " + resultado;
    break;

    case '*':
        resultado = valor1 * valor2;
        mensagem = "o resultado é " + resultado;
    break;

    case '/':
        resultado = valor1 / valor2
        mensagem = "o resultado é " + resultado
    break;

    default:
    mensagem = "operador invalido"
}
alert(mensagem)