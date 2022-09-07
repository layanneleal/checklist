"use strict";

let banco = []

const getBanco = () => JSON.parse(localStorage.getItem('list')) ?? []
const setBanco = (banco) => localStorage.setItem ('list', JSON.stringify(banco))
const Enter = 'Enter'

const criarItem = (tarefa, status, indice) => {
  const item = document.createElement('label')
  item.classList.add('itens')
  item.innerHTML = `
    <input type="checkbox" ${status} data-indice=${indice}>
    <div>${tarefa}</div>
    <input type="button" value="X" data-indice=${indice}>
  `
  document.getElementById('list').appendChild(item)
}

const limparTarefas = () => {
    const list = document.getElementById('list')
    while (list.firstChild) {
      list.removeChild(list.lastChild)
    }
}
 
const atualizarTela = () => {
  limparTarefas()
  const banco = getBanco()
  banco.forEach ((item, indice) => criarItem (item.tarefa, item.status, indice))
}
 
const inserirItem = (evento) => {
  const tecla = evento.key
  const texto = evento.target.value.toUpperCase()
  if (tecla === Enter) {
    const banco = getBanco()
    banco.push ({'tarefa': texto,'status': '' })
    setBanco(banco)
    atualizarTela()
    evento.target.value= ''
  }

}

const removerItem = (indice) => {
  const banco = getBanco()
  banco.splice (indice, 1)
  setBanco(banco)
  atualizarTela()

}

const atualizarItem = (indice) => {
  const banco = getBanco()
  banco[indice].status = banco[indice].status === '' ? 'checked' : ''
  setBanco(banco)
  atualizarTela()

}
const clickItem = (evento) => {
  const elemento = evento.target
  if (elemento.type === 'button') {
    const indice = elemento.dataset.indice
    removerItem(indice)
  }else if (elemento.type === 'checkbox') {
    const indice = elemento.dataset.indice
    atualizarItem (indice)

  }
}
document.getElementById('nItem').addEventListener('keypress', inserirItem)
document.getElementById('list').addEventListener('click', clickItem)
atualizarTela() 