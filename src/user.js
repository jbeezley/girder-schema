var user = {
    _accessLevel: {
        values: [-1, 0, 1, 2, 100]
    },
    _id: {
        chance: 'hash({length: 24})'
    },
    _modelType: {
        static: 'user'
    },
    admin: {
        chance: 'bool'
    },
    created: {
        faker: 'date.past'
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
};

module.exports = user;
