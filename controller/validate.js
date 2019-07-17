var Model = require("../models");


var validator = {
  isUnique: function(modelName, field){
    return function(value, next) {
      Model = Model[modelName];
      var query = {};
      query[field] = value;

      Model.find({where: query, attributes: ["id"]}).then(obj => {
        if (obj) {
          next(field + ' "' + value + '" is already in use');
        } else {
          next();
        }
      }
    )};
  },
  // expire: function(modelName, field)

  //isHost: function(modelName, field)
}


module.exports = validator;