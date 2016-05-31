module.exports = {
    _id: {
        chance: 'hash({length: 24})'
    },
    _modelType: {
        static: 'file'
    },
    created: {
        faker: 'date.past'
    },
    creatorId: {
        hasOne: 'user',
        get: '_id'
    },
    exts: {
        static: []
    },
    itemId: {
        hasOne: 'item',
        get: '_id'
    },
    name: {
        faker: 'system.fileName'
    },
    size: {
        faker: 'random.number'
    }
};
