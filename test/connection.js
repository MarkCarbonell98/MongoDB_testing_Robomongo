const mongoose = require('mongoose');

//ES6 promises
mongoose.Promise = global.Promise;

//this is a mocha hook
before((done) => {
      //conect to the database, port must be specified
      mongoose.connect('mongodb://localhost:27017/testdatabase_marcoscarbonell', {useNewUrlParser: true});
      
      //tell the database when the connection has been made, similar to addeventlistener
      mongoose.connection.once('open', () => {
            console.log('The connection was succesful now dance bitch!');
            done();
      }).on('error', (error) => {
            console.log(`Connection error ${error}`);
            done();
      });
});

// drop (delete) the characters collection before each test
beforeEach((done) => {
      //Drop the collection
      //remember aoeChars are plural and an s must be added
      mongoose.connection.collections.aoechars.drop(() => {
            done();
      });
});