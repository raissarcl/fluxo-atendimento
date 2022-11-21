# TESTE-M


<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>


## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Test

Adendo:

- **Uma issue foi aberta em relação ao problema**. 
- Os testes estão comentados e incompletos por ter havido um problema com a nova versão 0.3 do TypeORM em relação a sua integração com o Jest/NestJs e uso com os testes, precisei mudar toda a minha estratégia de escrita porque estava enviável, infelizmente não foi a tempo o suficiente para completá-lo. Abrirei uma Issue no repositório para registrar o problema enfrentado.

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```
# Swagger API

- rota: `http:localhost:3000/api/swagger`;

# Rodar Docker

```bash
 yarn docker:up
```
# Criar Admin Seed

- Rodar após a primeira inicialização do backend, para que o TypeORM faça a conexão e cria as tabelas pelo synchronize.

```bash
yarn db:seed
```
