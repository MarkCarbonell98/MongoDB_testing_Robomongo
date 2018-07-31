const mongoose = require('mongoose');
const schema = mongoose.Schema;

//Create schema and model

const aoeCharSchema = new schema({
      name: String,
      weight: Number,
      alive: Boolean
});

const aoeChar = mongoose.model('aoechar', aoeCharSchema);

module.exports = aoeChar;