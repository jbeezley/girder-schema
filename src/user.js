var model = require('./model');
var access = require('./access-control');

module.exports = Object.assign({
    _modelType: {
        static: 'user'
    },
    admin: {
        chance: 'bool'
    },
    firstName: {
        faker: 'name.firstName'
    },
    lastName: {
        faker: 'name.lastName'
    },
    login: {
        faker: 'internet.userName'
    },
    public: {
        chance: 'bool'
    }
}, access, model);
