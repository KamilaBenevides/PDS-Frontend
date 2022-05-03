# Processo para rodar o back

### Requisitos

- Node.js na versão mais recente, estou rodando em 16.13.2.
- Se você está na versão mais recente, já tem `yarn`. Caso não, instale-o.
- Caso você queira rodar local, vai precisar de um postgres server ou se conectar com um banco qualquer Postgres.
- Confira o .env.exemple e crie um .env com as configurações reais.

### Comandos

- `yarn` para instalar as dependências
- `yarn prisma:migrate`
- `yarn prisma:generate`
- `yarn start:local` para iniciar o APP.

Você poderá fazer queries pro server em `http://localhost:4000/`
