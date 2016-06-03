module.exports = {
    _id: {
        chance: 'hash({length: 24})'
    },
    created: {
        faker: 'date.past'
    },
    updated: {
        eval: 'faker.date.between(object.created, new Date())'
    }
};
