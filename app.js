alert('Boas vindas ao jogo do numero secreto');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt(`Escolha um numero entre 1 e ${numeroMaximo}`);
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O numero secreto e menor que ${chute}`);
        } else {
            alert(`O numero secreto e maior que ${chute}`);
        }
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Voce descobriu o numero secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

/* // DESAFIOS 1

// 1. Mostre um alerta com a mensagem "Boas vindas ao nosso site!".
alert('Boas vindas ao nosso site!');

// 2. Declare uma variável chamada nome e atribua a ela o valor "Lua".
let nome = 'Lua';

// 3. Crie uma variável chamada idade e atribua a ela o valor 25.
let idade = 25;

// 4. Defina uma variável numeroDeVendas e atribua a ela o valor 50.
let numeroDeVendas = 50;

// 5. Defina uma variável saldoDisponivel e atribua a ela o valor 1000.
let saldoDisponivel = 1000;

// 6. Exiba um alerta com o texto "Erro! Preencha todos os campos"
alert('Erro! Preencha todos os campos');

// 7. Declare uma variável chamada mensagemDeErro e atribua a ela o valor "Erro! Preencha todos os campos" Agora exiba um alerta com o valor da variável mensagemDeErro.
let mensagemDeErro = 'Erro! Preencha todos os campos'
alert(mensagemDeErro);

// 8. Para o próximo código, use um novo prompt para perguntar o nome do usuário e armazená-lo em uma variável, pode chamá-la de nome ou adicionar o que desejar.
nome = prompt('Digite o seu nome:');

// 9. Peça ao usuário para digitar sua idade usando um prompt e armazene-a na variável idade.
idade = prompt('Digite a sua idade:');

// 10. Agora, para validar a idade que capturamos no desafio 09, caso a idade seja maior ou igual que 18, exiba um alerta com a mensagem "Pode tirar a habilitação!".
if (idade >= 18) {
    alert('Pode tirar a habilitacao!');
} 

// DESAFIOS 2

// 1. Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
let diaDaSemana = prompt('Qual é o dia da semana?');
if (diaDaSemana == 'Sábado') {
    alert('Bom fim de semana!');
} else if (diaDaSemana == 'Domingo') {
    alert('Bom fim de semana!');
} else {
    alert('Boa semana!');
}

// 2. Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
let numero = prompt('Digite um positivo ou negativo');
if (numero > 0) {
    alert('Número positivo!');
} else {
    alert('Número negativo!');
}

// 3. Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
pontuacao = 105;
if (pontuacao >= 100) {
    console.log('Parabéns, você venceu!');
} else {
    console.log('Tente novamente para ganhar.');
}

// 4. Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
let saldoConta = 500; // Exemplo de saldo
alert(`Seu saldo é de R$${saldoConta}.`);

// 5. Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
let nome = prompt('Qual o seu nome?');
alert(`Boas vindas ${nome}`);

// DESAFIOS 3

// 1. Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
let contador = 1;
while (contador <= 10) {
    alert(contador)
    contador++;
}

// 2. Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
contador = 10;
while (contador >= 0) {
    alert(contador)
    contador--;
}

// 3. Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
let numeroMaximo = prompt("Digite um número para a contagem regressiva:");

while (numeroMaximo >= 0) {
    console.log(numeroMaximo);
    numeroMaximo--;
}

// 4. Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
numeroMaximo = prompt("Digite um número para a contagem progregressiva:");
contador = 0;

while (contador <= numeroMaximo) {
    console.log(contador);
    contador++
}

// DESAFIOS FINAIS

// 1. Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
console.log('Boas vindas');

// 2. Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.
let nome = 'Lobao';
console.log(`Ola, ${nome}!`);

// 3. Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .
nome = 'Lobao';
alert(`Olá, ${nome}!`);

// 4. Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.
let linguagemPreferida = prompt('Qual  a linguagem de programação que você mais gosta?');
console.log(linguagemPreferida);

// 5. Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
let valor1 = 42;
let valor2 = 8;
let resultado = valor1 + valor2;

console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`)

// 6. Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.
valor1 = 10;
valor2 = 8;
resultado = valor1 - valor2;

console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${resultado}.`);

// 7. Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.
let idade = prompt('Digite a sua idade:');
if (idade > 17) {
    console.log('Você é maior de idade.');
} else {
    console.log('Você é menor de idade.');
}

// 8. Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.
var numero = parseFloat(prompt("Digite um número:"));


if (numero > 0) {
    console.log("O número é positivo.");
} else if (numero < 0) {
    console.log("O número é negativo.");
} else {
    console.log("O número é zero.");
}

// 9. Use um loop while para imprimir os números de 1 a 10 no console.
numero = 1;
while (numero <= 10) {
    console.log(numero);
    numero++;
}

// 10. Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.
let nota = 8;

if (nota >= 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

// 11. Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.
let numeroAleatorio = Math.random();
console.log(numeroAleatorio);

// 12. Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
numeroInteiroAleatorio = parseInt(Math.random() * 10) + 1;
console.log(numeroInteiroAleatorio);

// 13. Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
numeroInteiroAleatorio = parseInt(Math.random() * 1000) + 1;
console.log(numeroInteiroAleatorio); */