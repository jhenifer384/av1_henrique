const tarefas = [
  { id: 1, titulo: "Estudar Node", concluida: false },
  { id: 2, titulo: "Fazer telas no Figma", concluida: true }
];

function listarVolei() {
  return tarefas;
}

function criarVolei(titulo) {
  const novoId = tarefas.length ? tarefas[tarefas.length - 1].id + 1 : 1;
  const nova = { id: novoId, titulo: titulo, concluida: false };
  tarefas.push(nova);
  return nova;
}

function atualizarVolei(id, titulo, concluida) {
  const idx = tarefas.findIndex((t) => t.id === id);
  if (idx === -1) return null;
  if (titulo && titulo.trim() !== "") tarefas[idx].titulo = titulo;
  if (typeof concluida === "boolean") tarefas[idx].concluida = concluida;
  return tarefas[idx];
}

function excluirVolei(id) {
  const idx = tarefas.findIndex((t) => t.id === id);
  if (idx === -1) return false;
  tarefas.splice(idx, 1);
  return true;
}

export { listarVolei, criarVolei, atualizarVolei, excluirVolei };
