"use strict";

let banco = [
  {'tarefa': 'estudar JS', 'status': ''},
  {'tarefa': 'netflix','status': 'checked' }
]

const criarItem = (tarefa, status) => {
  const item = document.createElement('label')
  item.classList.add('itens')
  item.innerHTML = `
  <input type="checkbox" ${status}>
  <div>${tarefa}</div>
  <input type="button" value="X">
  `
  document.getElementById('list').appendChild(item)
}
const limparTarefas = () =>
const list = 
const atualizarTela = () => {
  limparTarefas()
  banco.forEach ()
}
 atualizarTela()

