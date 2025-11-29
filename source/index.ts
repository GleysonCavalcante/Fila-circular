import { FilaCircular } from "./filacircular"

const fila = new FilaCircular(5)

fila.inserir(10)
fila.inserir(20)
fila.inserir(30)

console.log("Fila atual:")
fila.exibir()

console.log("Removido:", fila.remover())

fila.inserir(40)
fila.inserir(50)

console.log("Fila depois das inserções:")
fila.exibir()
