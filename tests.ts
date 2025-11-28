import { FilaCircular } from "./fila";

const fila = new FilaCircular<number>(5);

fila.enfileirar(10);
fila.enfileirar(20);
fila.enfileirar(30);

fila.exibirFila();

console.log("Primeiro:", fila.primeiro());
console.log("Quantidade:", fila.quantidade());
console.log("Livres:", fila.espacosLivres());

console.log("Removido:", fila.desenfileirar());

fila.exibirFila();

fila.enfileirar(40);
fila.enfileirar(50);
fila.enfileirar(60);

fila.exibirFila();

console.log("Cheia?", fila.estaCheia());
