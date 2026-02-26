import express from "express";

const app = express();

const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Olá mundo!");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
import { listarVolei, criarVolei } from "./tarefas.js";

// GET /tarefas - lista todas as tarefas em memória
app.get("/tarefas", (req, res) => {
  const lista = listarVolei();
  res.status(200).json(lista);
});

// POST /tarefas - cria uma nova tarefa com validação mínima
app.post("/tarefas", (req, res) => {
  const { titulo } = req.body;
  if (!titulo || titulo.trim() === "") {
    return res.status(400).json({ erro: "Título é obrigatório." });
  }
  const nova = criarVolei(titulo.trim());
  res.status(201).json(nova);
});