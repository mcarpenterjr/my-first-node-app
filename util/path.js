const path = require('path');

// helper function to get the root directory of the current proccess
module.exports = path.dirname(process.mainModule.filename);