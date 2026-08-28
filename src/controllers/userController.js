import { users, generateId } from '../database/mockDatabase.js';

/**
 * Retorna a listagem completa de usuários cadastrados.
 * Status: 200 OK
 */
export const getAllUsers = (req, res) => {
  return res.status(200).json(users);
};

/**
 * Busca e retorna um único usuário pelo ID fornecido na URL.
 * Status: 200 OK ou 404 Not Found
 */
export const getUserById = (req, res) => {
  const { id } = req.params;

  const user = users.find((user) => user.id === id);

  if (!user) {
    return res.status(404).json({
      error: 'Usuário não encontrado.',
      details: `Nenhum registro localizado para o ID '${id}'.`
    });
  }

  return res.status(200).json({ data: user });
};

/**
 * Cadastra um novo usuário com validação rigorosa de entrada.
 * Status: 201 Created ou 400 Bad Request
 */
export const createUser = (req, res) => {
  const { nome, email } = req.body;

  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).json({
      error: 'Requisição inválida.',
      details: 'O corpo da requisição (JSON) não pode estar vazio.'
    });
  }

  if (!nome || !email) {
    return res.status(400).json({
      error: 'Campos obrigatórios ausentes.',
      details: 'Os campos "nome" e "email" são de preenchimento obrigatório.'
    });
  }

  const nomeFormatado = String(nome).trim();
  const emailFormatado = String(email).trim().toLowerCase();

  if (nomeFormatado.length < 3) {
    return res.status(400).json({
      error: 'Nome inválido.',
      details: 'O campo "nome" deve conter no mínimo 3 caracteres.'
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailFormatado)) {
    return res.status(400).json({
      error: 'E-mail inválido.',
      details: 'O formato do e-mail fornecido não é válido.'
    });
  }

  const emailInUse = users.some((user) => user.email === emailFormatado);
  if (emailInUse) {
    return res.status(400).json({
      error: 'Conflito de dados.',
      details: `O e-mail '${emailFormatado}' já está cadastrado no sistema.`
    });
  }

  const newUser = {
    id: generateId(),
    nome: nomeFormatado,
    email: emailFormatado
  };

  users.push(newUser);

  return res.status(201).json({ data: newUser });
};

/**
 * Atualiza um usuário existente com base no ID da URL.
 * Status: 200 OK, 400 Bad Request ou 404 Not Found
 */
export const updateUser = (req, res) => {
  const { id } = req.params;
  const { nome, email } = req.body;

  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex === -1) {
    return res.status(404).json({
      error: 'Usuário não encontrado.',
      details: `Impossível atualizar. Nenhum registro localizado para o ID '${id}'.`
    });
  }

  if (!nome || !email) {
    return res.status(400).json({
      error: 'Campos obrigatórios ausentes.',
      details: 'Os campos "nome" e "email" são necessários para a atualização.'
    });
  }

  const nomeFormatado = String(nome).trim();
  const emailFormatado = String(email).trim().toLowerCase();

  const emailInUse = users.some(
    (user) => user.email === emailFormatado && user.id !== id
  );

  if (emailInUse) {
    return res.status(400).json({
      error: 'Conflito de dados.',
      details: 'O e-mail informado já está em uso por outro usuário.'
    });
  }

  users[userIndex] = {
    id,
    nome: nomeFormatado,
    email: emailFormatado
  };

  return res.status(200).json({ data: users[userIndex] });
};

/**
 * Remove um usuário do array em memória.
 * Status: 204 No Content ou 404 Not Found
 */
export const deleteUser = (req, res) => {
  const { id } = req.params;

  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex === -1) {
    return res.status(404).json({
      error: 'Usuário não encontrado.',
      details: `Impossível excluir. Nenhum registro localizado para o ID '${id}'.`
    });
  }

  users.splice(userIndex, 1);

  return res.status(204).send();
};
