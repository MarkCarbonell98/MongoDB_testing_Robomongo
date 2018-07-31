const assert = require('assert');
const mongoose = require('mongoose');
const Author = require('../models/author');

//Describe test
describe('nesting records', () => {

      beforeEach((done) => {
            mongoose.connection.collections.authors.drop(() => {
                  done();
            });
      });

      //creates tests
      it('Creates an author with sub-documents', (done) => {
            let pat = new Author({
                  name: 'Patrick Rothfuss',
                  books: [{title: 'Name of the Wind', pages: 400}]
            });

            pat.save().then(() => {
                  Author.findOne({name: 'Patrick Rothfuss'}).then((result) => {
                        assert(result.books.length === 1);
                        done();
                  });
            });
      });

      it('Adds a book to an author', (done) => {
            let pat = new Author({
                  name: 'Patrick Rothfuss',
                  books: [{title: 'Name of the Wind', pages: 400}]
            });
            pat.save().then(() => {
                  Author.findOne({name: 'Patrick Rothfuss'}).then((result) => {
                        //add a book to the books array
                        result.books.push({title: 'Jesus es marico', pages: 1000});
                        result.save().then(() => {
                              Author.findOne({name: 'Patrick Rothfuss'}).then((result) => {
                                    assert(result.books.length === 2);
                                    done();
                              });
                        });
                  });
            });
      });
});