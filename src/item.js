var common = require('./common');

module.exports = Object.assign({
    _modelType: {
        static: 'item'
    },
    baseParentId: {
        hasOne: 'user',
        get: '_id'
    },
    baseParentType: {
        static: 'user'
    },/*
    folderId: {
        hasOne: 'folder'
    },*/
    size: {
        faker: 'random.number'
    }
}, common);
