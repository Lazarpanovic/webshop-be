## DB

How to create db

```bash
# db:create
$ yarn run db:create
```

How to generate a new migration

```bash
# db:migration:generate
$ npm run db:migration:generate --name=migration-name
```

How to run migrations

```bash
# db:migration:run
$ yarn run db:migration:run
```

How to revert last migration

```bash
# db:migration:revert
$ yarn run db:migration:revert
```

How to run all seeds

```bash
# db:seed
$ yarn run db:seed
```

How to run specific seeder

```bash
# db:seed
$ yarn run db:seed --seed ExampleSeeder
```

How to drop db

```bash
# db:drop
$ yarn run db:drop
```

How to setup db - (drop -> create -> migrate -> seed)

```bash
# db:setup
$ yarn run db:setup
```

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```
