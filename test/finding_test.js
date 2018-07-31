const assert = require('assert');

//modules names are always uppercased (exporting the Schema)
const AoeChar = require('../models/aoeCharacters');

describe('Finding Records', () => {

      let William_Wallace;

      beforeEach((done) => {
            William_Wallace = new AoeChar({
                  name: 'William Wallace',
                  weight: 86,
                  alive: false
            });
            // asynchronous request
            William_Wallace.save().then(() => {
                  assert(William_Wallace.isNew === false);
                  done();
            });
      });
      //create a test
      it('find one record from the database', (done) => {
            // AoeChar.find({}) this gets all the records of the compilation
            AoeChar.findOne({name: 'William Wallace'}).then((result) => {
                  assert(result.name === 'William Wallace');
                  done();
            });

      });

      it('find one record by ID from the database', (done) => {
            // AoeChar.find({}) this gets all the records of the compilation
            AoeChar.findOne({_id: William_Wallace._id}).then((result) => {
                  //comparing two objects doesnt work, they must be converted to strings
                  assert(result._id.toString() === William_Wallace._id.toString());
                  done();
            });

      });
});