var temperatures = require('temperatures').convertTemperature;
var distances = require('distances').convertDistance;

exports.incTemperature = function(val, format) {
    return temperatures(val, format);
};

exports.incDistances = function(val, format) {
    return distances(val, format);
};