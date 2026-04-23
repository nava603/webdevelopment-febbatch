const express = require('express');

//express apllication
const app = express()
//middleware
app.use(express.json())

//fake database
let books = [
  { id: 1, title: "Book 1", author: "Author 1" },
  { id: 2, title: "Book 2", author: "Author 2" },
  { id: 3, title: "Book 3", author: "Author 3" },
];

//get all books
app.get('/books', (req, res) => {
  res.json(books);
});

app.post('/newbook', (req, res) => { 
    const newBook = {
        id: books.length + 1,
        title: req.body.title,
    }
    books.push(newBook);
    res.json(newBook);
    res.send('Book added successfully');

})
app.listen(3000,() => {
    console.log("Server is running on port 3000-http://localhost:3000");
})