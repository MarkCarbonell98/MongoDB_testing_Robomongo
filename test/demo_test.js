const assert = require('assert');

//modules names are always uppercased
const AoeChar = require('../models/aoeCharacters');

describe('saving to the database', () => {
      //create a test
      it('it can save a record to the database', (done) => {
            const William_Wallace = new AoeChar({
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
});