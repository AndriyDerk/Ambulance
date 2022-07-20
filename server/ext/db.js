const db = require('mongoose');

db.connect(process.env.DB_CONNECT + process.env.DB_NAME)

module.exports = db;