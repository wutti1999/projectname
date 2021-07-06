const express = require('express')
const app = express()
const books = require('./db')

app.get('/', (req, res) => {
    //; 22160
    let b = []
    books.find(item => {
        console.log(111 );
        if(item.title.includes("Fast and")){
            console.log(item.title);
            b.push(item) 
        }
    })
  res.json(b)
})

app.get('/joe', (req, res) => {
    //; 22160
    let b = []
    books.find(item => {
        console.log(111 );
        if(item.id.includes("Fast and")){
            console.log(item.title);
            b.push(item) 
        }
    })
  res.json(b)
})



app.listen(3000, () => {
  console.log('Start server at port 3000.')
})
