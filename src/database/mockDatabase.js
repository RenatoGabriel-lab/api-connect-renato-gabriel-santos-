import { randomUUID } from 'node:crypto';

/**
 * Estrutura de dados em memória responsável por armazenar os usuários
 * da API Connect durante o tempo de execução do servidor.
 */
export const users = [
  {
    id: randomUUID(),
    nome: 'Ana Silva',
    email: 'ana.silva@connect.com'
  },
  {
    id: randomUUID(),
    nome: 'Carlos Eduardo',
    email: 'carlos.eduardo@connect.com'
  }
];

/**
 * Função utilitária encarregada de gerar um ID único universal (UUID v4)
 * para a criação de novos registros de usuários.
 * @returns {string} UUID v4 formatado (ex: "f47ac10b-58cc-4372-a567-0e02b2c3d479")
 */
export const generateId = () => {
  return randomUUID();
};