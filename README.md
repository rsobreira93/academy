## Technologies

[Nest](https://github.com/nestjs/nest);
[Nest Query](https://doug-martin.github.io/nestjs-query/);
[QraphQL](https://graphql.org/);
[TypeORM](https://typeorm.io/);
[Docker](https://www.docker.com/)

## Executando o projeto

### Ajustando o .env

Renomeie `.env.example` para `.env` e configure como desejar.

### Executando a postgres

```bash
$ docker-compose up -d
```

### Installation dependencies

```bash
$ yarn install

ou

yarn
```

### Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

### Test

```bash
# unit tests all tests
$ yarn test

# only a test
$ yarn test -o

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```

## License

Nest is [MIT licensed](LICENSE).
