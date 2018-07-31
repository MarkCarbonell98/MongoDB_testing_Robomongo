const assert = require('assert');

//modules names are always uppercased (exporting the Schema)
const AoeChar = require('../models/aoeCharacters');

describe('Updating Records', () => {

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
      it('Update a record to the database', (done) => {
            AoeChar.findOneAndUpdate({name: 'William Wallace'}, {name: 'Eduardo el Zanquilargo'}).then(() => {
                  AoeChar.findOne({_id: William_Wallace._id}).then((result) => {
                        assert(result.name === 'Eduardo el Zanquilargo');
                        done();
                  });
            });
      });

      it('Increments the weight by one', (done) => {
            // .update retrieves all the records
            AoeChar.update({}, { $inc: {weight: 1} }).then(() => {
                  AoeChar.findOne({name: 'William Wallace'}).then((result) => {
                        assert(result.weight === 87);
                        done();
                  });
            });
      });
});