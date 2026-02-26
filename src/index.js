
import {
  listarVolei,
  criarVolei,
  atualizarVolei,
  excluirVolei
} from "./tarefas.js";

listarVolei();

console.log("Adicionando nova tarefa");
criarVolei("Estudando para o enem");

atualizarVolei(1, "", true);
excluirVolei(2);

listarVolei();