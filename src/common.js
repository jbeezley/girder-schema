var model = require('./model');
var access = require('./access-control');
var creator = require('./creator');
var named = require('./named');

module.exports = Object.assign(
    {},
    creator,
    access,
    model
);
