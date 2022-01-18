##  graphql-mongodb

Projeto do curso https://www.udemy.com/course/nestjs-zero-to-hero/.

### Instruções

* MongDB: docker run --name mongo -p 27017:27017 -d mongo
* Rodar projeto: npm run start:dev
* Playground: http://127.0.0.1:3000/graphql
* Exemplos:
```
mutation {
  createLesson(
    createLessonInput: {
      name: "Spanish class",
      startDate: "2022-01-04T15:00:00Z",
      endDate: "2022-01-04T15:30:00Z"
    }
  ) {
    id,
    name,
    startDate,
    endDate
  }
}

query {
  lessons {
    id
    name
    startDate
    endDate
  }
}

query {
  lesson (id: "afff792d-9eb9-4171-8cb3-c58437b86cb3") {
    id
    name
    startDate
    endDate
  }
}

mutation {
  createStudent(
    createStudentInput: {
      firstName: "Emanoeli",
      lastName: "Madalosso"
    }
  ) {
    id
    firstName
    lastName
  }
}

query {
  students {
    id
    firstName
    lastName
  }
}

query {
  student (id: "b0ea495e-b28d-4490-92af-f8734e03dcef") {
    id
    firstName
    lastName
  }
}
```