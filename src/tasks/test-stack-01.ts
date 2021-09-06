import Stack from "src/structures/stack";

const stack = new Stack();

// Verificar se está vazio
console.log(`\nEstá vazio? R: ${stack.isEmpty()}.`);

for (let x = 0; x < 5; x++) {
  stack.push(x);
}

// Visualizar o último elemento
console.log(`\nO último elemento é o ${stack.peek()}!`);

stack.push(11);

// Verificar o tamanho e sem é vazio
console.log(`\nA stack tem ${stack.size()} elementos!`);
console.log(`\nEstá vazio? R: ${stack.isEmpty()}.`);

/*
 STACK
  11 -> TOPO
  04
  03
  02
  01
  00 -> BASE
*/

// Removendo valores (3 últimos), verificando o elemento ao topo e o tamanho
for (let x = 0; x < 3; x++) {
  stack.pop();
}

console.log(`\nO último elemento é o ${stack.peek()}!`);
console.log(`\nA stack tem ${stack.size()} elementos!`);

// Limpando a stack e verificando se está vazia
stack.clear();
console.log(`\nEstá vazio? R: ${stack.isEmpty()}.`);
