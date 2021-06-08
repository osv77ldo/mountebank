function inject() {
    const retrievePetsResponseDirPath = require('path').dirname(__dirname) +
        '/../../../pets/responses';

    return require(retrievePetsResponseDirPath + '/getPets');
}