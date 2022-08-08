const db = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await db.connect(process.env.DB_CONNECT + process.env.DB_NAME);
}

main();

module.exports = db;