# Fila Circular em TypeScript

Este projeto implementa uma fila circular simples usando TypeScript.

## Funcionalidades
- Inserir elemento
- Remover elemento
- Ver o primeiro da fila
- Ver se está vazia
- Ver se está cheia
- Ver quantidade de elementos
- Exibir elementos
- Ver capacidade máxima
- Ver espaços livres


## Exemplo de uso {
   ``ts
import { FilaCircular } from "./fila";

const fila = new FilaCircular<number>(5);

fila.enfileirar(1);
fila.enfileirar(2);
fila.enfileirar(3);

fila.exibirFila();

console.log(fila.primeiro());
console.log(fila.desenfileirar());

fila.exibirFila();

}

## feito por :
Jose Gabriel de Oliveira Farias
