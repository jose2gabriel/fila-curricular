export class FilaCircular<T> {
    private dados: (T | null)[];
    private inicio: number;
    private fim: number;
    private tamanho: number;
    private capacidade: number;

    constructor(capacidade: number) {
        this.capacidade = capacidade;
        this.dados = new Array(capacidade).fill(null);
        this.inicio = 0;
        this.fim = 0;
        this.tamanho = 0;
    }

    enfileirar(valor: T): boolean {
        if (this.tamanho === this.capacidade) return false;
        this.dados[this.fim] = valor;
        this.fim = (this.fim + 1) % this.capacidade;
        this.tamanho++;
        return true;
    }

    desenfileirar(): T | null {
        if (this.tamanho === 0) return null;
        const valor = this.dados[this.inicio];
        this.dados[this.inicio] = null;
        this.inicio = (this.inicio + 1) % this.capacidade;
        this.tamanho--;
        return valor;
    }

    primeiro(): T | null {
        return this.tamanho === 0 ? null : this.dados[this.inicio];
    }

    estaVazia(): boolean {
        return this.tamanho === 0;
    }

    estaCheia(): boolean {
        return this.tamanho === this.capacidade;
    }

    quantidade(): number {
        return this.tamanho;
    }

    capacidadeMaxima(): number {
        return this.capacidade;
    }

    espacosLivres(): number {
        return this.capacidade - this.tamanho;
    }

    exibirFila(): void {
        if (this.tamanho === 0) {
            console.log("Fila vazia");
            return;
        }
        let itens: T[] = [];
        for (let i = 0; i < this.tamanho; i++) {
            const index = (this.inicio + i) % this.capacidade;
            itens.push(this.dados[index] as T);
        }
        console.log("Fila:", itens.join(" -> "));
    }
}
