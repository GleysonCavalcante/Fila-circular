🌀 Fila Circular (Circular Queue)

A FilaCircular é uma implementação da estrutura de dados fila (FIFO) utilizando a técnica de alocação circular, permitindo um uso mais eficiente do espaço em memória.
Ela mantém os elementos organizados em um array fixo e utiliza aritmética modular para “dar a volta” quando chega ao final do vetor.

🔍 Como funciona?

A fila controla quatro informações principais:

🔸 itens → array onde os valores são armazenados

🔸 inicio → posição do elemento mais antigo

🔸 fim → posição onde o próximo elemento será inserido

🔸 qtd → quantidade atual de elementos

🔸 capacidade → tamanho máximo da fila

Quando fim chega ao último índice, ele volta para o início:

novoIndice = (indiceAtual + 1) % capacidade


Isso evita desperdício de espaço, mantendo a fila sempre contínua e eficiente.

⚙️ Métodos Implementados
✅ inserir(valor: number)

Adiciona um novo valor ao final da fila.
Se estiver cheia, exibe uma mensagem e não adiciona.

❎ remover(): number | null

Remove e retorna o elemento mais antigo (no início).
Se a fila estiver vazia, retorna null e avisa o usuário.

primeiro(): number | null

Retorna o primeiro elemento sem removê-lo, permitindo apenas consulta.

📭 vazia(): boolean

Retorna true se a fila não possui elementos.

📦 cheia(): boolean

Retorna true quando a fila está no limite da capacidade.

📝 exibir()

Mostra a fila atual na ordem lógica correta, mesmo se os índices estiverem “girados” pelo comportamento circular.
