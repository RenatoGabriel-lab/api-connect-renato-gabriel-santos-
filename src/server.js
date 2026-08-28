import express from 'express';
import userRoutes from './routes/userRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware global para interpretar JSON
app.use(express.json());

// Registro do conjunto de rotas de usuários
app.use(userRoutes);

// Rota de Healthcheck
app.get('/health', (req, res) => {
  return res.status(200).json({
    status: 'OK',
    message: 'Servidor Connect operando perfeitamente!'
  });
});

// Inicialização do servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});