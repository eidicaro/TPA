let numero = prompt('digite um numero de 1 a 12')
let mensagem

selecionarMes(numero);
exibirMes(numero);

function selecionarMes(mes_escolhido){
    switch(mes_escolhido){
        case '1':
                mensagem = "o mês é janeiro";
            break;
            
        case '2':
                mensagem = 'o mês é fevereiro';
            break;
        
        case '3':
                mensagem = 'o mês é março';
            break;
        
        case '4':
                mensagem = 'o mês é abril';
            break;
        
        case '5':
                mensagem = 'o mês é maio';
            break;
        
        case '6':
                mensagem = 'o mês é junho';
            break;
        
        case '7':
                mensagem = 'o mês é julho';
            break;
        
        case '8':
                mensagem = 'o mês é agosto';
            break;
        
        case '9':
                mensagem = 'o mês é setembro';
            break;
        
        case '10':
                mensagem = 'o mês é outubro';
            break;
        
        case '11':
                mensagem = 'o mês é novembro';
            break;
        
        case '12':
                mensagem = 'o mês é dezembro';
            break;
        
        default:
                mensagem =' numero invalido'
        }
}

// return fará o ponteiro sair da função e ir para outra
// if (number(mes_escolhido) < 1) "isso converte ,dentro da função, a variavel em numero"

function exibirMes(mes_escolhido){
    alert(mensagem)
}

