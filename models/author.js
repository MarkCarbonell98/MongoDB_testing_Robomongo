const mongoose = require('mongoose');
const schema = mongoose.Schema;

//Create schema and model (schemas are always uppercased)


const BookSchema = new schema({
      name: String,
      pages: Number,
});

const AuthorSchema = new schema({
      name: String,
      age: Number,
      books: [BookSchema]
});

const Autor = mongoose.model('author', AuthorSchema);

module.exports = Autor;