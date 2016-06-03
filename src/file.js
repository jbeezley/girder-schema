var common = require('./common');

module.exports = Object.assign({
    _modelType: {
        static: 'file'
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
}, common);
