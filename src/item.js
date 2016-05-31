
module.exports = {
    _id: {
        chance: 'hash({length: 24})'
    },
    _modelType: {
        static: 'item'
    },
    baseParentId: {
        hasOne: 'user',
        get: '_id'
    },
    baseParentType: {
        static: 'user'
    },
    created: {
        faker: 'date.past'
    },
    creatorId: {
        hasOne: 'user',
        get: '_id'
    },
    description: {
        faker: 'lorem.sentence'
    },/*
    folderId: {
        hasOne: 'folder'
    },*/
    name: {
        faker: 'commerce.productName'
    },
    size: {
        faker: 'random.number'
    },
    updated: {
        faker: 'date.past'
    }
};
