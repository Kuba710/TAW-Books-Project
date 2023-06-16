import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import mongoConverter from '../service/mongoConverter';
import * as _ from "lodash";

const BookSchema = new mongoose.Schema({
    title: {type: String},
    image_url: {type: String},
    description: {type: String},
    author: {type: String}
}, {
    collection: 'books'
}); 
BookSchema.plugin(uniqueValidator);

const BookModel = mongoose.model('books', BookSchema);

async function query() {
    const result = await BookModel.find({});
    {
        if (result) {
            return mongoConverter(result);
        }
    }
}

async function get(id) {
    return await BookModel.find({}).then(function (results) {
      if (results) {
        return mongoConverter(results);
      }
    });
  }

async function deleteBook(id) {
    return await BookModel.findByIdAndRemove(id).then(function (result) {
        if (result) {
            return mongoConverter(result);
        }
    });
}

async function addBook(book) {
    const newBook = new BookModel(book);
    return newBook.save().then(function(result) {
        if (result) {
            return mongoConverter(result);
        }
    });
}

  async function editBook(id, book) {
    return BookModel.findByIdAndUpdate(id, book, { new: true }).then(function(result) {
      if (result) {
        return mongoConverter(result);
      } else {
        throw new Error('Dokument o podanym identyfikatorze nie istnieje.');
      }
    });
  }
  
 export default {
     query: query,
     get: get,
     addBook, addBook,
     deleteBook: deleteBook,
     editBook: editBook,

     model: BookModel
 };
