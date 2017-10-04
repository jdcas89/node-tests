const express = require('express')

var app = express()

app.get('/', (req, res) => {
  res.status(200).send({
    message: 'Hello world!',
    name: 'Todo App v1.0'
  })
})

app.get('/users', (req, res) => {
  res.status(200).send([
      {name: 'Juan David', age: 28},
      {name: 'Andres', age: 23},
      {name: 'Gank', age: 27},
    ])
})



app.listen(3000)

module.exports.app = app;