// 1. Pedir para o usuário digitar o primeiro número.
// 2. Pedir para o usuário digitar a operação (+, -, *, /, %).
// 3. Pedir para o usuário digitar o segundo número.
// 4. Fazer a validação dos dados de entrada (podemos
// somar letras?).
// 5. Verificar a operação escolhida, e salvar o valor em uma
// variável, tratando os casos especiais da matemática,
// como a divisão por zero.
// 6. Mostrar o resultado.


function calculadora() {
    
    let numero1 = parseFloat(prompt('Digite o primeiro número:'));
    let operacao= prompt('Escolha a operação desejada: +, -, *, / ou %');
    let numero2 = parseFloat(prompt('Digite o segundo número:'));
    let resultado;

    // Função para calcular a soma de dois números
    function soma(numero1, numero2) {
        return numero1 + numero2;
    }

    // Função para calcular a subtração de dois números
    function subtracao(numero1,numero2) {
        return numero1 - numero2;
        }
    function multiplicacao(numero1,numero2) {
        return numero1 * numero2;
        }
        function divisao(numero1,numero2) {
            return numero1 / numero2;
             }
        // Realiza a operação com base na escolha do usuário
        switch (operacao) {
             case '+':
                 resultado = soma(numero1 + numero2);
                 break;
            case '-':
                 resultado = subtracao(numero1 - numero2);
                break;
            case 'multiplicacao':
                resultado = multiplicacao(numero1 * numero2);
                break;
        case 'divisao':
             if   (numero2 === 0)  {
                resultado = 'Errado: divisao por zero';
                  } else  {
                  resultado = divisao(numero1 / numero2);
             break;
                  }
            case 'porcentagem':
                resultado = (numero1 % numero2);
                 break;
                   default:
                 resultado = ('Operação inválida');
        // Exibe o resultado da operação
                }
        console.log(`O resultado da ${operacao} é: ${resultado}`);
    // Chama a função principal para iniciar a calculadora
     calculadora();
     }
