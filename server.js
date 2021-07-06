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

app.get('/joe', async(req, res) => { 
     let b = books.sort(function (a, b) {
        if (a.id < b.id) {
            return -1;
        } else if (a.id > b.id) {
            return 1;
        } else {
            return 0;
        }
    });
  res.json(b)
})
app.get('/1112', async(req, res) => { 
    const b = books.length;
    // for(let i = 0; i < array.length; ++i){
    //     if(array[i] == 2)
    //         count++;
    //         console.log(b.length);
    // }
    console.log(b.length);
 res.json(b)
})




app.listen(3000, () => {
  console.log('Start server at port 3000.')
})
