exports.OwnApp = function () {
  var temperatures = require('./temperatures');
  var distances = require('./distances');

  return {
    temperature : temperatures,
    distance : distances
  }
};