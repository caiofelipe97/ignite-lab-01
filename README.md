# Ignite Lab 1.0
## Tecnologies
- NestJS
- GraphQL
- Apache Kafka
- Next.js
- Prisma
- Apollo Client (GraphQL)
- Auth0 (For authentication)

## Features

### Purchases Service
- [Admin] Create Product
- [Admin] List Products

- [Auth] List User Purchases

- [Public] Buy Product
- [Public] List Products by availability

### Classroom Service
- [Admin] List User Enrollments
- [Admin] List Students
- [Admin] List Courses
- [Admin] Course Sign up

- [Auth] List User Couses
- [Auth] Access Course Content

## How to run
- Run `docker-compose up -d` to run the DB, kafka, Kafka-UI and zookeeper.
- Run `npm start:dev` to start all backend projects: `purchases`, `classroom` and `gateway`.
- Run `yarn dev` on the web project to start the reactJS project


### ENV VARIABLES
- Purchases server .env file:
```
AUTH0_AUDIENCE=
AUTH0_DOMAIN=
DATABASE_URL=
KAFKA_BROKERS=
```
- Classroom server .env file:
```
AUTH0_AUDIENCE=
AUTH0_DOMAIN=
DATABASE_URL=
```
- Web .env.local file:
```
AUTH0_SECRET=
AUTH0_CLIENT_ID=
AUTH0_CLIENT_SECRET=
AUTH0_BASE_URL
AUTH0_AUDIENCE=
AUTH0_ISSUER_BASE_URL=
```
