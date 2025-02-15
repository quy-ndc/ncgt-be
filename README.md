
## Description

Generation Project.

## Project Structure

```bash
src
│── api
│   ├── user
│   │   ├── controllers
│   │   ├── services
│   │   ├── repositories
│   │   ├── entities
│   │   ├── dtos
│   │   ├── user.module.ts
│   │
│   ├── product
│   │   ├── controllers
│   │   ├── services
│   │   ├── repositories
│   │   ├── entities
│   │   ├── dtos
│   │   ├── product.module.ts
│
│── application
│   ├── helpers
│   ├── services (Generic domain-wide services)
│   ├── utils
│
│── domain
│   ├── constants
│   ├── entities
│   ├── enums
│   ├── models
│
│── infrastructure
│   ├── configurations
│   ├── extensions
│   ├── persistances
│   ├── repositories (Generic repositories)
│   ├── database.module.ts (Database connection logic)
│
│── shared
│   ├── middlewares
│   ├── interceptors
│   ├── filters
│   ├── decorators
│   ├── guards
│
│── main.ts
│── app.module.ts

```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Stay in touch

- Author - [MaxH2k3](https://twitter.com/kammysliwiec), [ndcQuy](...)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
