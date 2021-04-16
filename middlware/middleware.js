const moment = require('moment')

module.exports = function timeLog(req, res, next) {
    let date = moment(new Date())
    console.log(`${req.method} ${req.originalUrl} ${date.format('DD/MM/YYYY H:mm:ss')}`);
    next();
}