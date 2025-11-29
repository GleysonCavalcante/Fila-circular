export class FilaCircular {
    private itens: (number | null)[]
    private inicio: number
    private fim: number
    private qtd: number
    private capacidade: number

    constructor(tamanho: number) {
        this.capacidade = tamanho
        this.itens = new Array(tamanho).fill(null)
        this.inicio = 0
        this.fim = 0
        this.qtd = 0
    }

    inserir(valor: number) {
        if (this.qtd === this.capacidade) {
            console.log("A fila está cheia!")
            return
            
        }

        this.itens[this.fim] = valor
        this.fim = (this.fim + 1) % this.capacidade
        this.qtd++
    }

    remover(): number | null {
        if (this.qtd === 0) {
            console.log("A fila está vazia!")
            return null
        }

        const removido = this.itens[this.inicio]
        this.itens[this.inicio] = null
        this.inicio = (this.inicio + 1) % this.capacidade
        this.qtd--
        return removido
    }

    primeiro(): number | null {
        return this.qtd > 0 ? this.itens[this.inicio] : null
    }

    vazia(): boolean {
        return this.qtd === 0
    }

    cheia(): boolean {
        return this.qtd === this.capacidade
    }

    exibir() {
        if (this.vazia()) {
            console.log("Fila vazia")
            return
        }

        let resultado: (number | null)[] = []
        let idx = this.inicio

        for (let i = 0; i < this.qtd; i++) {
            resultado.push(this.itens[idx])
            idx = (idx + 1) % this.capacidade
        }

        console.log(resultado)
    }
}
