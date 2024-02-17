const createModel = require("../data_base/createModelMySQL");

const Sponsor = createModel('sponsor', [
    'id',
    'logo',
    'title',
    'company',
    'location',
    'status',
    'description',
    'modality',
    'link',
]);

module.exports = Sponsor;