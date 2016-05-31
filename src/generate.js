var mocker = require('mocker-data-generator');

mocker()
    .schema('user', require('./user'), 2)
    .schema('item', require('./item'), 10)
    .schema('file', require('./file'), 5)
    .build(function (data) {
        console.log(JSON.stringify(data, null, 2));
    });
