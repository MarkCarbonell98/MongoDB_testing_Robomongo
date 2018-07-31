const assert = require('assert');

//modules names are always uppercased (exporting the Schema)
const AoeChar = require('../models/aoeCharacters');

describe('Deleting Records', () => {

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
      it('Delete a record from the database', (done) => {
            AoeChar.findOneAndRemove({name: 'William Wallace'}).then(() => {
                  AoeChar.findOne({name: 'William Wallace'}).then((result) => {
                        assert(result === null);
                        done();
                  })
            });
      });
});