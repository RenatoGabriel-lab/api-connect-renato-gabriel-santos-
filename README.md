# api-connect-renato-gabriel-santos-
Prototipo de API
# API Connect

API RESTful modular e escalável desenvolvida em Node.js e Express para o gerenciamento de usuários. O projeto foi estruturado seguindo rigorosamente os princípios de **Separação de Responsabilidades (Separation of Concerns - SoC)**, garantindo uma arquitetura limpa, extensível e pronta para evolução em ambiente de startup.

---

## Objetivo da Aplicação

Oferecer uma interface de serviço para a realização de operações fundamentais de CRUD (Create, Read, Update, Delete) para registros de usuários. A API conta com validações de dados de entrada, prevenção de e-mails duplicados, padronização determinística das respostas HTTP e tratamento resiliente para recursos não encontrados (status 404).

---

## Tecnologias Utilizadas

* **Node.js**: Ambiente de execução JavaScript do lado do servidor (v20+).
* **Express**: Framework web minimalista para gerenciamento de rotas e middlewares.
* **Nodemon**: Ferramenta de desenvolvimento para recarregamento automático do servidor.
* **Crypto (Módulo Nativo)**: Utilizado com `randomUUID()` para geração de identificadores únicos universais (UUID v4).
* **ES Modules**: Sintaxe moderna de importação/exportação do ECMAScript (`import`/`export`).

---

## Arquitetura do Projeto

A aplicação aplica o padrão de Separação de Responsabilidades (SoC), dividindo o ecossistema nas seguintes pastas:

<img width="635" height="275" alt="image" src="https://github.com/user-attachments/assets/13fa0224-482f-46e2-8e8a-4055f2bcb1c4" />


api-connect/
├── node_modules/
├── src/
│   ├── controllers/
│   │   └── userController.js    # Regras de negócio e ciclo de requisição/resposta
│   ├── database/
│   │   └── mockDatabase.js      # Estrutura de dados e gerador de IDs em memória
│   ├── routes/
│   │   └── userRoutes.js        # Mapeamento de endpoints e verbos HTTP
│   └── server.js                # Ponto de entrada e inicialização do servidor Express
├── .gitignore                   # Arquivos ignorados pelo controle de versão Git
├── package.json                 # Metadados, scripts e dependências do projeto
└── README.md                    # Documentação (este arquivo)







