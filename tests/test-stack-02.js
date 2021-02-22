const Stack = require('../stack/stack-object');

const stack = new Stack();

// Adicionar novos elementos e visualizando eles
stack.push(10);
stack.push(5);
stack.push(20);
stack.push(50);


console.log(stack.toString());

// Verificar se o elemento está vazio
console.log(`A stack está vazia? R: ${stack.isEmpty()}`);

// Capturando o último elemento adicionado
console.log(`\nO último elemento adicionado foi o ${stack.peek()}.`);

// Removendo 2 elementos (dois últimos adicionados)
console.log(`\nAntes de remover havia ${stack.size()} elementos!`);
for (let x = 0; x < 2; x++) {
  stack.pop();
}
console.log(`\nDepois de remover ficaram ${stack.size()} elementos!`);