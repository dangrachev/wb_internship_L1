const moment = require('moment');

module.exports = {
    getCurrentDate: () => {
        return moment().format('MMMM Do YYYY, h:mm:ss a');
    }
};