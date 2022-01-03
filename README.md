##  graphql-mongodb

Projeto do curso https://www.udemy.com/course/nestjs-zero-to-hero/.

### Instruções

* MongDB: docker run --name mongo -p 27017:27017 -d mongo
* Rodar projeto: npm run start:dev
* Exemplos
```
mutation {
  createLesson(
    name: "Spanish class",
    startDate: "2022-01-04T15:00:00Z",
    endDate: "2022-01-04T15:30:00Z"
  ) {
    name,
    startDate,
    endDate
  }
}
```